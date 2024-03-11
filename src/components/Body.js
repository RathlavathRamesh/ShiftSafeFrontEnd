import React, { useEffect } from 'react'
import Header from './Header'
import Cookie from 'js-cookie'
import { useNavigate } from 'react-router-dom';
const Body = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    const userToken=Cookie.get("user_token");
    if(userToken===undefined){
       navigate("/userLogin")
    }
  },[])
  return (
    <div>
      <Header />
      <div className="flex flex-row items-center justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/400/611/non_2x/delivery-service-concept-and-application-for-tracking-online-orders-food-delivery-man-courier-riding-electric-scooter-with-yellow-package-product-box-illustration-for-website-mobile-app-vector.jpg"
          className=" w-[50%] h-[100%] object-cover mt-36"
          alt="Delivery"
        />
        <div>
          <h1 className="text-orange-500 text-5xl font-bold">
            Welcome to Courier Express
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Body