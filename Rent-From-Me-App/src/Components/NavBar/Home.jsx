import Hero from "./Hero"
import { ItemsCard} from '../owner/ItemsCard'
import { PopularRent } from "../renter/PopularRent"
const Home = () => {
  return (
    <div>
        <Hero/>
        <PopularRent/>
        <ItemsCard/>
    </div>
  )
}

export default Home