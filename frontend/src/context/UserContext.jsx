import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { authDataContext } from './authContext'

export const userDataContext = createContext()
const UserContext = ({children}) => {
    let [userData , setUserData] = useState(null);
    let {serverUrl} = useContext(authDataContext);
    

const getCurrentUser= async ()=>{
   try{
    let result = await axios.get(serverUrl+"/api/user/getcurrentuser", {withCredentials :true});
   //  console.log("user data",result.data);
   setUserData(result.data)
return result.data;
   }catch(error){
       setUserData(false); // false explicitly means "not logged in"
console.log(error);
   }
}

useEffect(()=>{
 getCurrentUser();
},[])

let value ={
   userData , setUserData ,getCurrentUser
}

  return (
   <>
   <userDataContext.Provider value={value}>
{children}
   </userDataContext.Provider>

   </>
  )
}

export default UserContext