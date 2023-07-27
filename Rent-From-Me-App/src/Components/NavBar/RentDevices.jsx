import mac from "../../assets/mac.png";
import labtop from "../../assets/labtop.png";
const RentDevices = () => {
  return (
    <div className=" lg:w-[90%] mx-auto p-2 mt-5">
      <h1 className="text-2xl p-2 mt-3 ml-5 lg:ml-0">Popular Rent Devices</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 space-y-3 mt-3">

        <div className="flex flex-col justify-start items-start space-y-3 transition hover:shadow-lg ease-in-out hover:border bg-[#fff] p-3 rounded ">
          <img src={mac} alt="" />
          <div className=" space-y-2">
            <h1 className="text-2xl">Ipad Pro Max</h1>
            <p className="text-base">price<span className=" ml-3 line-through">20%</span></p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start space-y-3 bg-[#fff] p-3 transition hover:shadow-lg ease-in-out hover:border">
          <img src={labtop} alt="" />
          <div className=" space-y-2">
            <h1 className="text-2xl">Ipad Pro Max</h1>
            <p className="text-base">price<span className=" ml-3 line-through">20%</span></p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start space-y-3 bg-[#fff] p-3 transition hover:shadow-lg ease-in-out hover:border">
          <img src={mac} alt="" />
          <div className=" space-y-2">
            <h1 className="text-2xl">Ipad Pro Max</h1>
            <p className="text-base">price<span className=" ml-3 line-through">20%</span></p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default RentDevices