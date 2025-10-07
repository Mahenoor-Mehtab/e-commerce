import React from 'react'

import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div className="flex">
        <SideBar />


        <div className="flex-1 bg-[#091316] p-6 text-white">
          {/* Yahan routes ya content load hoga */}
          <h2>Welcome to Dashboard</h2>
        </div>
      </div>

    </>

  )
}

export default Home