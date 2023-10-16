import axios from "axios";
import { useState, useEffect } from "react";

const GIPHY_URL = "http://api.giphy.com/v1/gifs";
const API_KEY = "fqNwKidK46dd1n6syT8wM5fbxuyQfSEF";

const GiphyViewer = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios
      .get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=5`)

      .then((response) => {
        console.log(response.data.data);
        setGifs(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  const gifComponents = gifs.map((g) => {
    return (
      <div>
        <p>
          {g.url}
          {g.title}
        </p>
      </div>
    );
  });

  return (
    <div>
      {gifComponents}
    </div>
  );
};

export default GiphyViewer;
