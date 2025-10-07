import React from 'react'
import { createContext } from 'react'


export const authDataContext = createContext();
const Authcontext = ({children}) => {
const serverUrl = "http://localhost:3000"
    let value={
serverUrl
    }

  return (
    <>
<authDataContext.Provider value={value}>
    {children}
</authDataContext.Provider>
    </>
  )
}

export default Authcontext

// login ki authetication ke liye ha tha 
