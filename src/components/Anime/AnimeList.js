import { useState, useEffect } from 'react';
import ReactModal from './ReactModal'
import Modal from './Modal'
import '../../styles/AnimeList.css'

function AnimeList({ year, season }) {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}`)
      .then((response) => response.json())
      .then((res) => {
        const data = JSON.parse(JSON.stringify(res));
        setItems(data.data);
      });
  }, [year, season]);

  const handleItemClick = (mal_id) => {
    setSelectedItemId(mal_id);
  };

  const closeModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div>
    {items && (<ul className="animeList">
      {items.map(({ mal_id, title, images }) => (
        <li
          className="animeListItem"
          key={mal_id}
          onClick={() => handleItemClick(mal_id)}
        >
          <img className="listImage" alt={images.jpg.image_url} src={images.jpg.image_url} />
          <span className="listName">{title}</span>
        </li>
      ))}
    </ul>
    )}
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

export default AnimeList;