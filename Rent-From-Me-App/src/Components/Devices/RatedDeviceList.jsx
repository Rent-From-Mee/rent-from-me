import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RatedDeviceCard from './RatedDeviceCard';

function RatedDeviceList() {
  return (
    <>
    <h2 className="ml-16 p-2 text-lg">Devices Highly Rated By Users</h2>
    <section className="">
  <RatedDeviceCard />
    </section>
    </>
  )
}

export default RatedDeviceList