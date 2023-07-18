  import { useState, useEffect } from "react";
  import ReactDOM from 'react-dom';

  function Modal({res}) {
    const [response, setResponse] = useState("");

    useEffect(() => {
      const dataFetch = async () => {
        const data = await (
          await fetch(
            'https://api.jikan.moe/v4/anime/'+res
          )
        ).json();
        setResponse(data.data);
      };

      dataFetch();
    }, []);

      return (
        <div>
          {response && (
            <div>
              <img src={response.images.jpg.image_url} alt={response.title}/>
              <span className="lmj-plant-name">{response.title}</span>
          </div>
          )}
          </div>
        )
  }

  export default Modal

    /*useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime/'+res)
        .then((fetching) => {
          return fetching.json();
        })
        .then((json) => {
          setResponse(JSON.parse(JSON.stringify(json)).data)
        })
    }, []);*/