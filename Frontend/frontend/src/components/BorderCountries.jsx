import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BORDER_COUNTRY_KEY from './../../../../.env'

const BorderCountries = () => {

  const [array, setArray] = useState([]);

  const fetchBackend = async () => {
      try{
      const response = await axios.get(BORDER_COUNTRY_KEY);
      setArray(response.data);
      }
      catch(error){
          console.log(error);
      }
      
  }

  useEffect(() => {
    fetchBackend();
}, []);


  return (
    <div>
      <div className='truncate mr-2 ml-2 items-center justify-between '>
        {
          array.map((country, index) => (
            <Link className='text-white hover:text-red-600' to='/info' state={{ country }} key={index}>
              {country.borders.map((border,index)=>{
                <p key={index}>
                  {border.commonName}
                </p>
              })}
              <br></br>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default BorderCountries
