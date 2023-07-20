import {useState, useEffect} from 'react'
import '../styles/AnimeList.css'
import Modal from './Modal'
import ReactModal from './ReactModal'

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
      <ul className="animeList">
        {items.map(({ mal_id, title, images }) => (
          <li
            className="animeListItem"
            key={mal_id}
            onClick={() => handleItemClick(mal_id)}
          >
            <img className="listImage" src={images.jpg.image_url} />
            <span className="listName">{title}</span>
          </li>
        ))}
      </ul>
      {selectedItemId && (
        <ReactModal close={closeModal}>
          <div className="modal">
            <Modal res={selectedItemId} />
          </div>
        </ReactModal>
      )}
    </div>
  );
}

export default Anime