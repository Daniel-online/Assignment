import axios from "axios"
import { useEffect, useState } from 'react';

const PopulationData = () => {
    const [array, setArray] = useState([]);

    const fetchBackend = async () => {
        try {
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/population");
            console.log(response.data); // Log the entire response
            setArray(response.data.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBackend();
    }, []);

    return (
        <div>
            <div className='max-h-fit max-w-fit flex-nowrap flex-row flex-nowrap scroll-smooth flex-row truncate pr-3 pl-3 mr-2 ml-2 items-center justify-between flex overflow-x-auto overflow-y-auto h-full w-full'>
                {
                    array.map((country, index) => (
                        <div className='space-x-4 rounded-2xl bg-cyan-600 text-white hover:text-yellow-300' key={index}>
                            <h1>{country.country}</h1>
                            <h4>{country.code}</h4>
                            <br></br>
                            {country.populationCounts.map((count, yearIndex) => (
                                <div className="max-h-40 whitespace-nowrap overflow-y-hidden pt-2 pb-2 mr-3" key={yearIndex}>
                                    Year: {count.year}, Population: {count.value}
                                </div>
                            ))}

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PopulationData
