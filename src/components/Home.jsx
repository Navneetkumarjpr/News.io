import React,{useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import './home.css'

const Home = ({headline,setHeadline}) => {

    const APIKEY="f294fc13d1c341d992b4e2638d135cb3";
    useEffect(() => {
        const headlines= async()=>{
            const data =  await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${APIKEY}`);
            setHeadline(data.data.articles);
        }
        headlines();
    },[])

  return (
    <div className='home'>
        {
            headline.map(item=>{
                return(
                    <div> 
                        <Card item={item} />
                    </div>
                )
            })
        }

    </div>
  )
}

export default Home