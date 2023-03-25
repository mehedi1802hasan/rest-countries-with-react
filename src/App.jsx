import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
   <LoadCountries></LoadCountries>
      </div>
  )
}
function LoadCountries (){
const [countries,setCountries]=useState([]);
useEffect( ()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res =>res.json())
  .then(data =>setCountries(data)
  );
 
},[])
return(
  <div>
    <h1 style={{color:"yellow",backgroundColor:"brown",padding:"30px"}}>Explore ALL over the countries--</h1>
    <h3 style={{color:"red"}}>Available Countries:{countries.length}</h3>
    <div className='gird'>
    {
      countries.map(country=><Country name={country.name.common}capital={country.capital}population={country.population}flags={country.flags.png} key={country.cca3}></Country>)
    }

    </div>
  </div>
)
}
function  Country (props){
  return(
  
      <div style={{border:'2px solid red',margin:"32px",padding:"22px",backgroundColor:'teal' }}>
      <img src={props.flags}></img>
      <h3>Name:{props.name}</h3>
      <h4>Capital:{props.capital}</h4>
      <h4>Population:{props.population}</h4>
      
    </div>
  
    
  )
}
export default App
