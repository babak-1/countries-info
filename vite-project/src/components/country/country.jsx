import { Link } from "react-router-dom"
import styles from "./country.module.css"

const Country = ({flags,name,capital,region,population}) => {
  return (
    <>

        <img src={flags.svg} alt={flags.alt} className={styles.cardFlag}/>
        <div className={styles.cardBottom}>
            <h2 className={styles.cardHeader}>{name.common}</h2>

            <ul className={styles.cardInfo}>
                <li>Popultaion: <span className={styles.info}>{population.toLocaleString()}</span> </li>
                <li>Region: <span className={styles.info}>{region}</span></li>
                <li>Capital: <span className={styles.info}>{capital}</span></li>
            </ul>
        </div> 
    </>
  )
}

export default Country