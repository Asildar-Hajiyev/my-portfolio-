import { createContext, useEffect, useState } from "react";
import { getData } from "../service/api";

export const DATA = createContext([]);
function AppContext({children}) {
   const [data,setData] = useState([])
  useEffect(()=>{
    getData().then((res)=>setData(res))
  },[]);
  return (
    <DATA.Provider value={{data}}>
      {children}
    </DATA.Provider>
  )
}

export default AppContext



 

