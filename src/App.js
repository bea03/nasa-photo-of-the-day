import React, {
  useState,
  useEffect
} from "react";
import axios from "axios";

import NasaCards from './Components/NasaCards.js';

import "./App.scss";

function App() {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const [url, setUrl] = useState("");
  // const [explanation, setExplanation] = useState("");
  const [dataRes, setDataRes] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=0gloJMTe3dpbmklTCcJ1xfVKULwBq7NrLJFloZlO&date=2019-04-03`)
      .then(response => {
        //console.log(dataRes);
        // setTitle(dataRes.data.title);
        // setDate(dataRes.data.date);
        // setUrl(dataRes.data.url);
        // setExplanation(dataRes.data.explanation);
        setDataRes(response.data);
      });
  }, []);

  return ( <
    div className = "App" >
    <h1>NASA Photo of the Day:</h1>
    <NasaCards title = {dataRes.title} //defining here instead of multiple useState requests
    date = {dataRes.date}
    url = {dataRes.url}
    explanation = {dataRes.explanation}
    copyright = {dataRes.copyright}
    />
    </div>
  );
}

export default App;
