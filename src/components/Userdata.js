import { useState } from "react";

const Userdata = (props) => {
  const Status = async(e) => {
    const status=e.target.value;
    const userDetails={
      _id,
      order_status:status
    }
    console.log(userDetails)
    const data1 = JSON.stringify(userDetails)
    const url = 'http://localhost:3001/api/item/ubdatestatus'
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data1,
    })
    const data = await response.json()
    if (response.ok === true) {
        console.log(data.order_status)
        if(data.order_status==="dispatch"){
          setImageUrl("https://www.clickpost.ai/hubfs/featured%20images/Updated%20blog%20banner%20images%20Mar%2022/d2c-direct-to-consumer-shipping.webp#keepProtocol");
        }
        else if(data.order_status==="intransit"){
          setImageUrl("https://www.postgrid.com/wp-content/uploads/2021/01/Track.png ")
        }
        else if(data.order_status==="out for delivery"){
          setImageUrl("https://roadcast.in/static/img/mod/hyper_banner.png")
        }
        else if(data.order_status==="shipped"){
          setImageUrl("https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-delivery-order-shipping-png-image_11595392.png  ")
        }
    } else {
      console.log("err");
    }
  }
  //const [imgUrl,setImageUrl]=useState(null)
  let [imgUrl,setImageUrl]=useState(null);
  const{item_id,user_name,_id,order_status}=props.item
  if(imgUrl===null){
   if(order_status==="dispatch"){
      imgUrl="https://www.clickpost.ai/hubfs/featured%20images/Updated%20blog%20banner%20images%20Mar%2022/d2c-direct-to-consumer-shipping.webp#keepProtocol";
    }
    else if(order_status==="intransit"){
      imgUrl="https://www.postgrid.com/wp-content/uploads/2021/01/Track.png ";
    }
    else if(order_status==="out for delivery"){
      imgUrl="https://roadcast.in/static/img/mod/hyper_banner.png"
    }
    else if(order_status==="shipped"){
      imgUrl="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-delivery-order-shipping-png-image_11595392.png "
    }
    else if(order_status==="ordered"){
      imgUrl="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmation-5365232-4500195.png?f=webp";
    }
  }
  return (
    <div className="flex items-center justify-center m-4">
      <div className=" flex  flex-row items-center justify-center h-[300px] w-[500px] bg-blue-950 shadow-2xl rounded-2xl">
        <ul className="flex flex-col my-4 font-medium text-md ">
          <div className="my-3 pl-5 w-4/12">
            <label className="text-white text-left ">UserName</label>
            <li className="text-white pt-1">{user_name}</li>
          </div>
          <div className="my-3 pl-5  w-4/12">
            <label className="text-white text-left">OrderID</label>
            <li className="text-white pt-1">{item_id}</li>
          </div>
          <div className="my-3 pl-5  w-4/12">
            <label className="text-white text-left">Delivery Status</label>
            <select
              name="Status"
              className=" my-2 border-2 border-black"
              onChange={Status}
            >
              <option value="ordered" defaultValue={true}>
                {order_status}
              </option>
              <option value="shipped">Shipped</option>
              <option value="dispatch">Dispatch</option>
              <option value="intransit">Intransit</option>
              <option value="out for delivery">Out for Delivery</option>
            </select>
          </div>
        </ul>
        <div>
           <img
           src={imgUrl}
           className="h-[300px] w-[300px] bg-transparent"
           alt={`${order_status} logo`}
         />
        </div>
      </div>
    </div>
  )
}
export default Userdata
