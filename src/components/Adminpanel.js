import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Userdata from './Userdata'
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'

const Adminpanel = () => {
  const navigate = useNavigate()
  const [userdata,setUserData]=useState(null);
  const getdata=async()=>{
    const url = 'http://localhost:3001/api/item/getItems'
    const response=await fetch(url);
    const data=await response.json();
    setTimeout(()=>{setUserData(data)},1000)
  }

  useEffect(()=>{
    getdata();
  },[])

  const handleAddUser = (e) => {
    e.preventDefault()
    navigate('/admin/adduser')
  }

  const jwtToken=Cookie.get("admin_token");
  if(jwtToken===undefined){
    navigate('/');
  }
  return (
    <div>
      <Header />
      <div className="text-center m-5">
        <button
          onClick={handleAddUser}
          className="border bg-teal-400 p-2 rounded-md mt-12"
        >
          Add Order
        </button>
      </div>
      <div className="bg-white flex flex-row justify-center flex-wrap">
        {/* {console.log(userdata[0])}  */}
        {userdata &&
          userdata.map((item) => <Userdata item={item} key={item._id} />)}
      </div>
    </div>
  )
}

export default Adminpanel
