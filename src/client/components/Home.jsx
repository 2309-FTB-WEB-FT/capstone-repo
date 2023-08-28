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
                        <p>{show.name}</p>
                        <img src={show.image} onClick={() =>
                         navigate(`/Shows/${show.id}`)}></img>
                        <p>{show.genre}</p>
                    </div>
                    )
                
                })
            }
        </div>
    )
 }
export default Home

