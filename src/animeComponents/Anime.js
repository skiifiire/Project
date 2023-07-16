import {useState, useEffect} from 'react'
import '../styles/ShoppingList.css'
import Modal from './Index'

function HandleClick(res) {

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
        X
        </button>
      </div>
    </div>
  );
}

function Anime() {
        const [items, setItems] = useState([])
        const [modalActive, setModalActive] = useState(false);
        const [dataAnime, setDataAnime] = useState([])

        useEffect(() => {
                fetch('https://api.jikan.moe/v4/seasons/now')
                .then((response) => {
                        return response.json()
                })
                .then((res) =>{
                        const data = JSON.parse(JSON.stringify(res))
                        setItems(data.data)
                })
        }, [])
        	console.log("test")
                return (
                <div>
                        <ul className="lmj-plant-list">
                                {items.map(({mal_id, title, images}) => (
                                        <li className="lmj-plant-item" key={mal_id} onClick={() => setModalActive(true)}>
                                        {modalActive && (
        																	<ReactModal close={() => setModalActive(false)}>
          																	<div id="modal"
            																	style={{
              																	width: 100,
              																	height: 100,
              																	backgroundColor: "white",
              																	padding: 20
            																		}}
          																		>
            																	<Modal res={mal_id}/>
          																	</div>
        																	</ReactModal>
      																	)}
                                                <img className="lmj-plant-img" src={images.jpg.image_url}/>
                                                <span className="lmj-plant-name">{title}</span>
                                        </li>
                                ))}
                        </ul>
                </div>
                );
}

export default Anime