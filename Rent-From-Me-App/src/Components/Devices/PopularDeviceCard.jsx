import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useGetItemsQuery } from '../../Store/Api/item-slice'
export const PopularDeviceCard = () => {
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
    
    const { data: items = [], error } = useGetItemsQuery();
  return (
    <Carousel responsive={responsive} showDots={true} className="max-w-[92%] pb-4 max-lg:max-w-[75%] flex flex-wrap justify-start max-lg:m-auto">
      { items.map(item => (
        <div key={item.id} className="ml-16 w-72 h-64 flex flex-wrap max-sm:flex max-sm:justify-center max-sm:items-center max-lg:m-auto max-sm:m-auto max-lg:ml-16 rounded-lg m-2 relative">
    <img
      src={item.img_url}
      className="w-full h-full rounded-lg"
      alt={item.title}
    />
    <span className="absolute bottom-2 left-2 bg-black text-white text-md py-1 px-2 rounded-md">
      {item.title}
    </span>
  </div>
      )) }
    
  </Carousel>
  )
}
