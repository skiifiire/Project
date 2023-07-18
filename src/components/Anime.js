import {useState, useEffect} from 'react'
import '../styles/ShoppingList.css'
import Modal from './Modal'


function ReactModal({ children, close }) {

    const handleClose = () => {
        close();
    };

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
            alignItems: "center",
          }}
        >
          {children}
          <button
            onClick={handleClose}
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

function Anime() {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/seasons/now')
      .then((response) => response.json())
      .then((res) => {
        const data = JSON.parse(JSON.stringify(res));
        setItems(data.data);
      });
  }, []);

  const handleItemClick = (mal_id) => {
    setSelectedItemId(mal_id);
  };

  const closeModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div>
      <ul className="lmj-plant-list">
        {items.map(({ mal_id, title, images }) => (
          <li
            className="lmj-plant-item"
            key={mal_id}
            onClick={() => handleItemClick(mal_id)}
          >
            <img className="lmj-plant-img" src={images.jpg.image_url} />
            <span className="lmj-plant-name">{title}</span>
          </li>
        ))}
      </ul>
      {selectedItemId && (
        <ReactModal close={closeModal}>
          <div
            id="modal"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "50%",
              height: "80%",
              backgroundColor: "white",
              padding: 20,
              zIndex: 9999,
            }}
          >
            <Modal res={selectedItemId} />
          </div>
        </ReactModal>
      )}
    </div>
  );
}

export default Anime