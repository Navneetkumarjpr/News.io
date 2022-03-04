import React,{useState} from 'react'
import './header.css';

const Header = ({searchFun,headlines}) => {
    const [search, setSearch] = useState("")
    const value=(e)=>{
        setSearch(e.target.value);
    }
    const submit=(query)=>{
        if(query!==""){
            searchFun(query);
            setSearch("");
        }else{
            alert("enter query");
        }
    }
  return (
    <>
    <div className='header'>
        <div className='headItem'>
            <button onClick={()=>headlines()} className='homeButton'>Home</button>
            <input onChange={(e)=>value(e)} value={search} placeholder='Search news on any Topic' className='search'/>
            <button onClick={()=> submit(search)}  className='homeButton' >Search</button>
        </div>
        <div className='filters'>
            <button onClick={()=>submit("Tech")}  className='filterButton' >Tech</button>
            <button onClick={()=>submit("Buisness")}  className='filterButton' >Business</button>
            <button onClick={()=>submit("food")}  className='filterButton' >Food</button>
        </div>
    </div>
    </>
  )
}

export default Header