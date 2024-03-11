import React ,{ useEffect, useRef, useState } from 'react'
import {useNavigate } from 'react-router-dom'

import Cookie from 'js-cookie'

const AdminLogin = () => {
    const LoginUser=async(event)=>{
        event.preventDefault();
        const userdetails = {
            user_name: username.current.value,
            password: password.current.value,
          }
          const data1 = JSON.stringify(userdetails)
          const url = 'http://localhost:3001/api/admin/login'
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: data1,
          })
          const data = await response.json()
          if (response.ok === true) {
            console.log(data)
            handleLoginSuccess(data.jwtToken)
          } else {
            setErrorMessage(response.err)
            console.log(response.ok)
          }
    }
    const handleLoginSuccess = (jwtToken) => {
        Cookie.set('admin_token', jwtToken, { expires: 150 })
        navigate('/admin')
      }
const username = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(false)
    useEffect(()=>{
      const adminToken=Cookie.get("admin_token");
  console.log(adminToken)
    if(adminToken!==undefined){
      navigate("/admin")
    }
    },[])
  return (
    <div>
      <div className=" flex justify-center items-center  bg-teal-500 h-screen">
        <div className="flex bg-white shadow-2xl h-[400px] w-[700px] ">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
              alt="this is login page logo"
              className="h-[400px] w-[400px]"
            />
          </div>
          <form className=" flex flex-col mt-10" onSubmit={LoginUser}>
            <h1 className="text-2xl text-teal-600  font-bold ml-6">
              Admin Login Page
            </h1>
            <label className="mt-3 ml-5 px-1 text-lg">User Name</label>
            <input
              type="text"
              ref={username}
              placeholder="Enter username"
              className="mt-2 ml-5 mr-5 border-2  px-3 text-md pt-1 border-gray-500 rounded-lg h-9"
            />
            <label className="mt-2 ml-5  px-1 text-lg">Password</label>
            <input
              type="password"
               ref={password}
              placeholder="Enter Password"
              className="mt-2 ml-5 mr-5 border-2 pt-1 border-gray-500 text-md rounded-lg h-9  px-3"
            />
             {errorMessage && (
              <h3 className="text-red-500 pt-2">
               errorMessage
              </h3>
            )}
            <button className=" mt-6 ml-5 text-center text-white h-[34px]  bg-teal-500 mr-5 rounded-md" type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin