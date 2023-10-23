import { useParams } from "react-router-dom"
const Show = () => {
    const { id } = useParams();
  return (
    <>
    <h1>Single Book</h1>
    <p>You should see book {id}</p>
    </>
  )
}

export default Show