import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RatedDeviceCard from './RatedDeviceCard';

function RatedDeviceList() {
    const images = [
        {
          image:
            "https://images.pexels.com/photos/10383803/pexels-photo-10383803.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          name: "House",
          desc: "Big House",
          price: "$180",
          rating: "9.6",
          
        },
        {
          image:
            "https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "House",
          desc: "Big House",
          price: "$180",
          rating: "9.6"
        },
       
      ];
  return (
    <>
    <h2 className="ml-16 p-2 text-lg">Devices Highly Rated By Users</h2>
    <section className="max-w-[92%] grid grid-cols-8 max-2xl:grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:items-center gap-2 m-auto">
        {
            images.map((image, index)=>(
                <RatedDeviceCard key={index} images={image}/>
            ))
        }
    </section>
    </>
  )
}

export default RatedDeviceList