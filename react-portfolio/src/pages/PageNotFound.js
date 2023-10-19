import { useLocation } from "react-router-dom"

const PageNotFound = () => {
let location = useLocation()
  return (
    <div>
        <h2>404 The Page {location.pathname} was not found</h2>
    </div>
  )
}

export default PageNotFound