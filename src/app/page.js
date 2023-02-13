"use client"; // this is a client component
import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect,useState } from 'react'; // <--- import the hook
import axios from "axios";

const Home = () => {

  const [data,setData]  = useState("");

  useEffect(()=>{
    try{

      axios.get('https://www.backend.heydev.shop/api/getDetails').then(res=>{
        if(res.data.length>0){
          setData(res.data[0].meta_title)
        }
       })


    }catch(error){

    }
 
  },[])

  return (
    <main className={styles.main}>
       <h1>Welcome {data}</h1>
    </main>
  )

}


export default Home;




