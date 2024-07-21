import React from "react";
import { useState } from "react";


const Home = () => {

    const [Url,setUrl] = useState('')

    const handleShort = ()=> {
        const body = document.getElementById('url')
        body.innerHTML = ''
        fetch('http://localhost:8000/add/',{
            method:"POST",
            body:JSON.stringify({
                url:Url
            }),
            headers:{
                'Content-type':'application/json'
            }
        }).then(res => res.json())
        .then(res => {
            if(res.status){
                console.log(res)
                const result = document.createElement('h3')
                result.textContent = "http:localhost:3000/"+res.id
                body.appendChild(result)
            }
        })
    }

    return(
        <div id="home-body" >
            <h1>Url Shorterner</h1>
            <label>{'Enter the url    '}</label>
            <input type="text" id="urlinp" onChange={(e)=>{setUrl(e.target.value)}} />
            <button id="short" onClick={handleShort} >Shorten it</button>
            <div id="url">

            </div>
        </div>
    )
}



export default Home