import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';

 function IndexPage() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <button onClick={() => setModalActive(true)}>Open Card </button>

      {modalActive && (
        <ReactModal close={() => setModalActive(false)}>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "white",
              padding: 20
            }}
          >
            Your Card Component is Here
          </div>
        </ReactModal>
      )}
    </div>
  );
}

function Modal({res}) {
  const [response, setResponse] = useState("");
  /*useEffect(() => {
      fetch('https://api.jikan.moe/v4/anime/'+res)
      .then((fetching) => {
        return fetching.json();
      })
      .then((json) => {
        setResponse(JSON.parse(JSON.stringify(json)).data)
      })
  }, []);*/
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          'https://api.jikan.moe/v4/anime/'+res
        )
      ).json();

      // set state when the data received
      setResponse(data.data);
    };

    dataFetch();
  }, []);
    return (
      <div>
        <span className="lmj-plant-name">{response.title}</span>
      </div>
      )
}

function ReactModal({ children, close }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {children}
        <button
          onClick={close}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            marginRight: 10,
            marginTop: 10
          }}
        >
          Close Modal(Maybe put some close icon)
        </button>
      </div>
    </div>
  );
}

export default Modal