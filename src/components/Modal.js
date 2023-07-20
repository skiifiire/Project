  import { useState, useEffect } from "react";
  import '../styles/Modal.css'

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
    }, [res]);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-EN', options);
    };

      return (
        <div className="Modal">
          {response && (
            <div>
              <div className="modalImage">
                  <img src={response.images.jpg.large_image_url} alt={response.title}/>
              </div>
              <div className="modalName">
                  <span className="ModalCategorie">Titre : </span>
                  <span className="ModalValue">{response.title}</span>
              </div>
              <div className="modalEpisode">
                  <span className="ModalCategorie">Episodes : </span>
                  <span className="ModalValue">{response.episodes}</span>
              </div>
              <div className="modalSynopsis">
                    <span className="ModalCategorie">Synopsis : </span>
                    <span className="ModalValue">{response.synopsis}</span>
              </div>
              <div className="modalGernes">
                    <span className="ModalCategorie">Genres : </span>
                  {response.genres.map(({ name }) => (
                    <span className="ModalValue" key={name}>{name}</span>
                  ))}
              </div>
              <div className="modalStudios">
                    <span className="ModalCategorie">Studios : </span>
                  {response.studios.map(({ name }) => (
                    <span className="ModalValue" key={name}>{name}</span>
                  ))}
              </div>
              {response.status === "Currently Airing" && (
                  <div className="modalDay">
                      <span className="ModalCategorie">Airing : </span>
                      <span className="ModalValue">Currently airing on {response.broadcast.day}</span>
                  </div>
              )}
              {response.status === "Not yet aired" && (
                  <div className="modalDay">
                      <span className="ModalCategorie">Airing : </span>
                      <span className="ModalValue">Not yet aired {formatDate(response.aired.from)}</span>
                  </div>
              )}
              {response.status === "Finished Airing" && (
                  <div className="modalDay">
                      <span className="ModalCategorie">Airing : </span>
                      <span className="ModalValue">Finished Airing from {formatDate(response.aired.from)} to {formatDate(response.aired.to)}</span>
                  </div>
              )}
              <div className="modalTrailer">
                  <span className="ModalCategorie">Trailer : </span>
                  <a href={response.trailer.url} rel="noreferrer" className="lmj-plant-name" target="_blank">{response.trailer.url}</a>
              </div>
          </div>
          )}
          </div>
        )
  }

  export default Modal
