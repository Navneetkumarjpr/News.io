import './App.css';
import React,{useState} from 'react'
import Header from "./components/Header"
import Home from './components/Home';
import axios from 'axios'

function App() {
  const APIKEY="f294fc13d1c341d992b4e2638d135cb3";

  const [headline, setHeadline] = useState([]);
  const searchFun=async(search)=>{
    const data = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2022-02-04&sortBy=publishedAt&apiKey=${APIKEY}`)
    setHeadline(data.data.articles);
  }
  const coun="in";
  const headlines= async()=>{
    const data =  await axios.get(`https://newsapi.org/v2/top-headlines?country=${coun}&category=business&apiKey=${APIKEY}`);
    console.log("console ",data);
    setHeadline(data.data.articles);
}
  return (
    <div className="App">
      <Header searchFun={searchFun} headlines={headlines}/>
      <Home  headline={headline} setHeadline={setHeadline}/>
    </div>
  );
}

export default App;
