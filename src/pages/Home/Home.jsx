import { useLoaderData } from "react-router"
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";


const Home = () => {
  const coffeeData = useLoaderData();

  return (
    <div>
      <h2>Hot Hot Cold coffee : {coffeeData.length}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {
          coffeeData?.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} />)
        }
      </div>
    </div>
  )
}

export default Home