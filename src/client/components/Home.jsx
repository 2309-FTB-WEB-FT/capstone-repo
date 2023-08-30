import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Home = () => {
const [allShows, setAllShows] = useState([]) 
const navigate = useNavigate()

useEffect(() => {
    async function fetchData() {
        try{
            const response = await fetch("http://localhost:3000/api/shows/")
            const result = await response.json();
            setAllShows(result)
        } catch (error) {
            console.error(error)
        }
    }
    fetchData()
}, [])    
return (
         <div className="showcontainer">
            {
                allShows.map((show) => {
                    return (
                    <div className="singleshow" key={show.id}>
                        <img src={show.image} className="imgbutton" onClick={() =>
                         navigate(`/Shows/${show.id}`)}></img>
                         <p className="showtitle">{show.name}</p>
                        <p className="genre">{show.genre}</p>
                        <div dangerouslySetInnerHTML={{ __html: show.description }}></div>                    </div>
                    )
                
                })
            }
        </div>
    )
 }
export default Home

