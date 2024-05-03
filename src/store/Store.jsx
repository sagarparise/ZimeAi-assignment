import { createContext, useEffect, useState } from "react";


export const store = createContext();

const StoreProvider = ({children})=>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    setLoading(true)
    try {
      const res = await fetch('https://dummyjson.com/posts');
      const data = await res.json();
      console.log(data.posts)
      setData(data.posts)
      setLoading(false)
      
    } catch (error) {
      console.log(error.message);
      setLoading(false)
    }

  }
  return(
    <store.Provider value={{data, loading}}>
    {children}
    </store.Provider>
  )
}
export default StoreProvider;