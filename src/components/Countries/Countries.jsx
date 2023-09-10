import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]); 

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        // console.log('add this to your visited list')
        const newVisitedCountries = [...visitedCountries, country]; 
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag]; 
        setVisitedFlags(newVisitedFlags); 
    }

    return (
        <div>
            <h2>Countries: {countries.length} </h2> 
            <div>
                <h4>Visited countries: {visitedCountries.length} </h4>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>       

            <div className="img-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
            </div>

            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3}
                     handleVisitedCountries={handleVisitedCountries}
                     handleVisitedFlags={handleVisitedFlags}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;