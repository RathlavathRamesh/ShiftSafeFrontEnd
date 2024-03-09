import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const Username = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userDetails = {
      user_name: Username.current.value,
      password: password.current.value,
    }
    const data1 = JSON.stringify(userDetails)
    const url = 'http://localhost:3001/api/user/register'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data1,
    })
    const data = await response.json()
    if (response.ok === true) {
      navigate('/browse')
    } else {
      setErrorMessage(data)
      console.log(response.ok)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center  bg-teal-500">
      <div className="w-full md:w-[850px] flex flex-row bg-white shadow-2xl border-2 border-black-400 p-6 rounded-lg">
        <div>
          <img
            src="https://shipsy.io/wp-content/uploads/2021/05/Blog-119-2.jpg"
            alt="this is login page logo"
            className="w-[100%] h-[100%]"
          />
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="my-5 ml-2">
            <div className="flex flex-col mt-3">
              <label className="mb-3 font-normal ml-1">Username</label>
              <input
                ref={Username}
                type="input"
                placeholder="Enter username"
                className="w-full h-10 border-2 border-gray-300 pl-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="mb-3 font-normal ml-1">Password</label>
              <input
                ref={password}
                type="password"
                placeholder="Enter password"
                className="w-full h-10 border-2 border-gray-300 pl-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            {errorMessage && (
              <h3 className="text-red-500 pt-2">{errorMessage}</h3>
            )}
            <button
              //onClick={handleSubmit}
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 w-full text-center rounded-md my-4 h-10 text-white text-lg"
            >
              Register
            </button>
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/" className="text-teal-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup