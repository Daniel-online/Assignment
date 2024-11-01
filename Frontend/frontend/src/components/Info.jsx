import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import BorderCountries from "./BorderCountries";

// import PopulationData from "./PopulationData";
// import Charts from "./Charts";

const Info = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { country } = location.state || {};
    useEffect(() => {
        if (!country) {
            navigate('/'); // Navigate back to `CountryList` if `country` is undefined
        }
    }, [country, navigate]);
    return (
        <div className="flex-col flex">
            <div className="max-h-fit absolute-top border-neutral-900 border-b bg-cyan-800 rounded-2xl truncate pr-2 pl-2 pt-2 pb-2 mr-2 ml-2 items-center">
                <h1>Country Information</h1>
                <p>Country: {country.name}</p>
                <p>Country Code: {country.countryCode}</p>
                <div>
                    <BorderCountries/>
                </div>

                {/* <div>
                    <Charts location={location}></Charts>
                </div>
                <div className="">
                    <PopulationData countryCode={country.countryCode} />
                </div> */}
            </div>

        </div>
    )
}

export default Info;
