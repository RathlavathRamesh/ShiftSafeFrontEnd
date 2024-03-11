import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Trackingdata from './Trackingdata'
import Header from './Header'
import Cookie from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const TrackShipment = () => {
  
  const itemid = useRef(null)
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const item_id = {
      item_id: itemid.current.value,
    }
    const data1 = JSON.stringify(item_id)
    const url = 'http://localhost:3001/api/item/getItem'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data1,
    })
    const data = await response.json()
    if (response.ok === true) {
      setUserData(data)
    } else {
      alert('Item not found')
    }
  }
  useEffect(()=>{
    const userToken=Cookie.get("user_token");
    if(userToken===undefined){
       navigate("/userLogin")
    }
  },[])
  return (
    <div>
      <Header />
      <div className="flex flex-row mt-32 bg-transparent">
        <div className="mx-28">
          <img
            src="https://img.freepik.com/premium-vector/package-sent-isometric-illustration-suitable-mobile-app-website-banner-diagrams-infographics-other-graphic-assets_210682-492.jpg?size=626&ext=jpg&ga=GA1.1.1249841798.1684600786&semt=ais"
            alt="this is trackshipment logo"
            className="h-[70vh] w-[70vw]"
          />
        </div>
        {!userData && (
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center"
                >
                  <input
                    ref={itemid}
                    type="input"
                    placeholder="Enter your tracking number"
                    className="border-2 border-black-400 h-[40px] md:h-[50px] w-[80%] md:w-[300px] px-1 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="mt-2 h-[40px] md:h-[50px] w-[80%] md:w-[150px] text-center bg-amber-500 rounded-lg text-white text-xl pb-1 hover:bg-orange-500"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        {userData && <Trackingdata usedata={userData} />}
      </div>
    </div>
  )
}

export default TrackShipment