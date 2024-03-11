import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
const Trackingdata = (usedata) => {
   const navigate=useNavigate();
  useEffect(()=>{
    const userToken=Cookie.get("user_token");
    if(userToken===undefined){
       navigate("/userLogin")
    }
  },[])
  // const {usedata}=usedata
  const orderedUrl="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmation-5365232-4500195.png?f=webp";
  const dispatchUrl="https://www.clickpost.ai/hubfs/featured%20images/Updated%20blog%20banner%20images%20Mar%2022/d2c-direct-to-consumer-shipping.webp#keepProtocol";
  const intransitUrl="https://www.postgrid.com/wp-content/uploads/2021/01/Track.png";
  const outForDeliveryUrl="https://roadcast.in/static/img/mod/hyper_banner.png";
  const shippedUrl="https://static.vecteezy.com/system/resources/previews/010/181/398/non_2x/order-shipped-order-closed-order-canceled-concept-with-people-character-parcel-tracking-system-digital-shopping-online-purchase-distribution-abstract-illustration-set-vector.jpg "
  const {item_id,order_status,user_name}=usedata.usedata;
   return (
     <div className="bg-[url(https://ecomexpress.in/_nuxt/track-shipment-bg.2ff3aeb0.png)] h-screen">
       <div className="flex items-center justify-center my-[10%]">
         <div className="h-[300px] w-[700px] shadow-2xl flex  ">
           <div>
             <div className="flex flex-col mx-12 my-2">
               <h1 className="text-gray-500">User Name</h1>
               <p className="text-black text-xl font-semibold py-2">{user_name}</p>
             </div>
             <div className="flex flex-col mx-12 my-2">
               <h1 className="text-gray-500">AWB No. | Order No.</h1>
               <p className="text-black text-xl font-semibold py-2">
                 {item_id}
               </p>
             </div>
             <div className="flex flex-col mx-12">
               <h1 className="text-gray-500">{order_status}</h1>
               <p className="text-black text-xl font-semibold py-2">Delivered</p>
             </div>
           </div>
           <div>
           {order_status==="ordered" && (<img
               src={orderedUrl}
               alt="Trackinglogo"
               className="h-[300px] w-[400px] "
             />)}
              {order_status==="ordered" && (<img
               src={orderedUrl}
               alt="Trackinglogo"
               className="h-[300px] w-[400px] "
             />)}
              {order_status==="dispatch" && (<img
               src={dispatchUrl}
               alt="Trackinglogo"
               className="h-[300px] w-[400px] "
             />)}
              {order_status==="intransit" && (<img
               src={intransitUrl}
               alt="Trackinglogo"
               className="h-[300px] w-[400px] "
             />)}
              {order_status==="out for delivery" && (<img
               src={outForDeliveryUrl}
               alt="Trackinglogo"
               className="h-[300px] w-[400px] "
             />)}
             {order_status==="shipped" &&(
             <img src={shippedUrl}
              alt="Trackinglogo"
              className="h-[300px] w-[400px]"/>
             )}
           </div>
         </div>
       </div>
     </div>
   )
 }
 export default Trackingdata
 