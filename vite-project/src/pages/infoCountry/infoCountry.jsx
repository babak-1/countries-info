import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./infoCountry.module.css";
import { v4 as uuidv4 } from 'uuid';

const InfoCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getInfoCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        setCountry(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    getInfoCountry();
  }, [name]);

  console.log(country);
  return (<div className={styles.bigContainer}>
     <div className={styles.container}>
       <Link className={styles.backBtn} to={"/"}>Back</Link>
      {country.map((item) => (
        <div key={uuidv4()} className={styles.infoCountryContainer}>
                 
          <img src={item.flags.svg} className={styles.infoCountryFlag}/>

          <div className={styles.infoPart}>
            <h2>{item?.name?.common}</h2>
            <div className={styles.ulCont}> 
            <ul>
              <li>
                Native Name:
                <span className={styles.infoSpan}>{item?.name?.nativeName?.spa?.official}</span>
              </li>
              <li>
                Population: <span className={styles.infoSpan}>{item?.population.toLocaleString()}</span>
              </li>
              <li>
                Region: <span className={styles.infoSpan}>{item?.region}</span>
              </li>
              <li>
                Sub Region: <span className={styles.infoSpan}>{item?.subregion}</span>
              </li>
              <li>
                Capital: <span className={styles.infoSpan}>{item?.capital}</span>
              </li>
            </ul>

            <ul>
              <li>
                Top Level Domain: <span className={styles.infoSpan}>{item?.tld}</span>
              </li>
              {Object.keys(item.currencies).map((currencyCode) => (
                <li key={currencyCode}>
                  Currencies: <span className={styles.infoSpan}>{item?.currencies[currencyCode].name}</span>
                </li>
              ))}
                <li className={styles.languageLi} >Languages: {Object.keys(item?.languages).map((languageCode,index,array) => ( <span  key={languageCode} className={styles.infoSpan}>{item?.languages[languageCode]}{index !== array.length-1 ? " ,":""}</span>))}</li>
            </ul>
            </div>
            
                <div className={styles.borderCont}>
                <h3>Borders Countries:</h3>
                <ul className={styles.borderCountries}>
                {item?.borders?.map((elem,index) => (
                  <li key={index} className={styles?.borderCountry}>{elem}</li>
                ))}
                </ul>
                </div>
             
          </div>
        </div>
      ))}
    </div>
  </div>
   
  );
};

export default InfoCountry;
