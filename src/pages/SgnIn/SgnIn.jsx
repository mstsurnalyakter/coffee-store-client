import useContextAPI from "../../hooks/useContextAPI"

const SgnIn = () => {
    const {name} = useContextAPI();
    console.log(name);
  return (
    <div>
        <h2>Please Sign In</h2>
    </div>
  )
}

export default SgnIn