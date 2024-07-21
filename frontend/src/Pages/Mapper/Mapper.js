import React from "react";
import { useParams } from "react-router-dom";
import useSWR from 'swr'

const Mapper = ()=> {

    const {id} = useParams();

    const fetcher = (url) => fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                'urlid':id
            }
        ),
        headers:{
            'Content-type':'application/json'
        }
    }).then(res=> res.json())


    const {data,err,isLoading} = useSWR('http://127.0.0.1:8000/view/',fetcher);
    console.log(data)

    if(err){
        return(
            <div>
                {err}
            </div>
        )
    }
    if(isLoading){
        return(
            <div>
                loading : {isLoading}
            </div>
        )
    }

    if(data){
        if(data.status){
            console.log(data)

            window.location.href = data.url
    
            return(
                <div>
                    hiiii
                </div>
            )
        }
        else{
            return(
                <div>
                    did not find the required url ? it is really registered ??
                    {data.message}
                </div>
            )
        }
    }
}



export default Mapper