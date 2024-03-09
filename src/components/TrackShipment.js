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

  const jwtToken = Cookie.get('jwt_token')
  if (jwtToken === undefined) {
    navigate('/')
  }

  return (
    <div>
      <Header />
      <div className="flex flex-row mt-40">
        <div className="mx-32">
          <img
            src="https://img.freepik.com/premium-vector/online-parcel-delivery-service-concept-mobile-app-concept-hand-holding-phone-with-parcel-delivery-application-display-courier-truck-with-boxes-courier-uniform-flying-drone-with-order-box_608021-263.jpg"
            alt="this is trackshipment logo"
            className="h-[40vh] w-full"
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