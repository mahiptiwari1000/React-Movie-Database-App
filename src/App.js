import logo from './logo.svg';
import './App.css';
import { NavBar } from './components';
import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://www.omdbapi.com";

function App() {

const [isLoading,setisLoading] = useState(false);
const [movies,setMovies] = useState([]);
const [inputValue,setInputValue] = useState("");

const search = async (e) => {
  if(e.code==="Enter"){
  console.log("I pressed Enter");

  setisLoading(true);

  const response = await axios.get(
    API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442"
  );

  console.log(response.data,"is our data from response");

  setMovies(response.data.Search);
  setisLoading(false);
  }
}

  return (
    <div className="App">
      <NavBar search={search} inputValue={inputValue} setInputValue={setInputValue}/>
      {isLoading ? "Loading":"Not Loading"}
    </div>
  );
}

export default App;
