import { useEffect, useState } from "react"
import styles from "./countries.module.css"
import axios from "axios" 
import Country from "../country/country"
import { Link } from "react-router-dom"


const Countries = () => {
    const [countries,setCountries] =useState([])
    const[searchText,setSearchText] =useState("");
    const obj = [{name:"Europe",},{name:"Asia",},{name:"Africa",},{name:"Oceania",},{name:"Antarctic",},{name:"Americas",}]

console.log(countries);
    useEffect(()=>{
         axios.get("https://restcountries.com/v3.1/all")
        .then(res => setCountries(res.data))
    },[])

    async function searchCountry() {
      try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        const data = await res.json();
        setCountries(data)
      } catch (err){
        console.log(err);
      }
    }

    async function filterRegion(region){
      try{
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        const data = await res.json();
        setCountries(data)
      } catch (err){
        console.log(err);
      }
    }

    function handleSearchCountry(e){
      e.preventDefault()
      searchCountry()
    }

    function handleFilter(e){
      e.preventDefault()
      filterRegion()
    }




  return (
    <div className={styles.bigCont}>
    <div className={styles.formCont}>
      <form className={styles.searchForm} autoComplete="off" onSubmit={handleSearchCountry} >
        <input type="text" className={styles.searchInput} placeholder="Search for a country..." value={searchText} onChange={(e)=>setSearchText(e.target.value)} name="search" id="search"  />
      </form>

      <form onSubmit={handleFilter}>
        <select name="filter-region" id="filter-region" value={obj.name} onChange={(e) =>filterRegion(e.target.value)} className={styles.select}>
          {obj.map((elem,index)=>(
            <option key={index} value={elem.name}>{elem.name}</option>
          ))}
        </select>
      </form>
    </div>
    <div className={styles.cardsContainer}>
        {countries.map(country=>(
                <Link to={`/${country.name.common}`} className={styles.card} key={country.name.common}>
            <Country key={country.name.common} {...country}/>
            </Link>
        ))}
    </div>
    </div>
  )
}

export default Countries