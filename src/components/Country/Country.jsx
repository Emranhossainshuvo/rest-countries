import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const {name, flags, capital, population, area, cca3} = country; 

    const [visited, setVisited] = useState(false); 

    const handleVisite = () => {
        setVisited(!visited)
    }

     ;
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color : visited ? 'purple' : 'black'}}>Name: {name?.common} </h3>
            <p style={{color: visited ? 'purple' : 'black'}}>Capital: {capital} </p>
            <img src={flags?.png} alt="" />
            <p style={{color: visited ? 'purple' : 'black'}}>Population: {population}</p>
            <p style={{color: visited ? 'purple' : 'black'}}>Area : {area}</p>
            <p style={{color: visited ? 'purple' : 'black'}}><small>Code: {cca3} </small></p>
            <button onClick={() => handleVisitedCountries(country)} className='btn-spacing'>Mark visited</button>
            <button className='btn-spacing' onClick={()=>{handleVisitedFlags(country.flags.png)}}>add flag</button>
            <button onClick={handleVisite}>{visited? 'Visited' : 'Going'}</button>
            {visited && 'I have visited this country'}
        </div>
    );
};

export default Country;