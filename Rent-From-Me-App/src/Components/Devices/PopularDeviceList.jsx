import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { PopularDeviceCard } from './PopularDeviceCard';

function PopularDevice() {
  const images = [
    {
      image:
        "https://images.pexels.com/photos/10383803/pexels-photo-10383803.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "House",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 1280 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1
    }
  };
  
  return (
    <>
    <h2 className="ml-16 p-2 text-2xl">Popular Device</h2>
      {/* <Carousel responsive={responsive} showDots={true} className="max-w-[92%] pb-4 max-lg:max-w-[75%] flex flex-wrap justify-start max-lg:m-auto"> */}
                  
         <PopularDeviceCard  />
         
    {/* </Carousel> */}
    </>
  );
}

export default PopularDevice;
