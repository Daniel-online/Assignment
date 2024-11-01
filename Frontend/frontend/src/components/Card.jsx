import { useEffect, useRef } from "react";
// import CountryList from "./CountryList";
// import axios from "axios";
import "./../components/styles/Card.scss"
import CountryList from "./CountryList";


const Card = () => {
    console.clear();
    const cardsContainerRef = useRef(null);
    const overlayRef = useRef(null);
    // const response = axios.get("https://date.nager.at/api/v3/AvailableCountries");

    useEffect(() => {

        const cardsContainer = cardsContainerRef.current;
        const overlay = overlayRef.current;
        if (!cardsContainer || !overlay) return; // Exit if refs are null

        // const cardsContainerInner = document.querySelector(".cards__inner");
        const cards = Array.from(cardsContainer.querySelectorAll(".card"));

        const applyOverlayMask = (e) => {
            const overlayEl = e.currentTarget;
            const x = e.pageX - cardsContainer.offsetLeft;
            const y = e.pageY - cardsContainer.offsetTop;

            overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
        };


        const createOverlayCta = (overlayCard, ctaEl) => {
            const overlayCta = document.createElement("div");
            overlayCta.classList.add("cta");
            overlayCta.textContent = ctaEl.textContent;
            overlayCta.setAttribute("aria-hidden", true);
            overlayCard.append(overlayCta);
        };

        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const cardIndex = cards.indexOf(entry.target);
                const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
                if (cardIndex >= 0 && overlay.children[cardIndex]) {
                    overlay.children[cardIndex].style.width = `${width}px`;
                    overlay.children[cardIndex].style.height = `${height}px`;
                }
            });
        });

        const initOverlayCard = (cardEl) => {
            const overlayCard = document.createElement("div");
            overlayCard.classList.add("card");
            createOverlayCta(overlayCard, cardEl.lastElementChild);
            overlay.append(overlayCard);
            observer.observe(cardEl);
        };

        cards.forEach(initOverlayCard);
        document.body.addEventListener("pointermove", applyOverlayMask);
        return () => {
            document.body.removeEventListener("pointermove", applyOverlayMask);
            observer.disconnect();
        };
    }, []);

    return (<>
        <h1 className="main__heading border-neutral-900">Countries</h1>

        <div className="pr-2 pl-2 pt-2 pb-2 border-neutral-900 main__cards cards bg-yellow-600 rounded-2xl ">
            <CountryList/>
        </div>
    </>

    );
}

export default Card
