import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
 const error =   useRouteError();
  return (
   <>
   <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    {error?.message ? <h2>{error.message}</h2> : <h2>this page is not exist</h2>}
      <Link to="/">Go Back Home</Link>
    </div>
   </>
  )
}

export default ErrorPage