import Hero from "./Hero"
import { ItemsCard } from "./ItemsCard"
import { PopularRent } from "./PopularRent"
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