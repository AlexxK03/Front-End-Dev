import { Link } from "react-router-dom"
const Index = () => {
  return (
    <>
    <h1>All Books</h1>
    <p><Link to={`/books/1`}>Book 1</Link></p>
    <p><Link to = {`/books/2`}>Book 2</Link></p>
    <p><Link to = {`/books/3`}>Book 3</Link></p>
    <p><Link to = {`/books/4`}>Book 4 </Link></p>
   
    </>
  )
}

export default Index