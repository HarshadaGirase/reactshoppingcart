import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner";
import Product from "../components/Product";


function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading , setLoading] =useState();
    const [post , setPost]= useState([]);

    async function fetchProductData(){
      setLoading(true);
      try{
      const data = await fetch(API_URL);
      const jdata= await data.json();

      setPost(jdata);
    }
    catch(error){
      alert("Network Error");
      setPost([]);

    }
      setLoading(false);
    }
    useEffect(()=>{
      fetchProductData();
      
    },[]) 
  
  return (
    <div>
    {
      loading ? <Spinner />  :
      post.length > 0 ? 
      (<div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
      gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
        {
          post.map( (post) => (
          <Product key = {post.id} post={post}/>
        ) )
        }
      </div>) :
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="font-bold">No Data Found</p>
      </div> 
    }
  </div>
  )
}

export default Home