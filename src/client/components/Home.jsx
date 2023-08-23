import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
const [allShows, setAllShows] = useState([]) 
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
        <div>
            <p>home</p>
            {
                allShows.map((show) => {
                    return (
                    <div className="singleshow" key={show.id}>
                        <p>{show.name}</p>
                        <img src={show.image}></img>
                        <p>{show.genre}</p>
                    </div>
                    )
                })
            }
        </div>
    )
 }
export default Home