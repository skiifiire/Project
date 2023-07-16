import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Footer from './Footer.js'
import Modal from '../animeComponents/Modal.js'
import "../styles/ShoppingList.css"
import {useRef} from 'react'

function App() {
   const buttonOpen = useRef(null);
   const modalElement = useRef(null);

    function addPerson(e) {
        e.preventDefault();
        console.log('Add person !!', e.target.name.value);
    }

    return (
        <>

            <div>
                Pour ouvrir le formulaire
                <button type="button" ref={buttonOpen}> cliquez ici</button>
            </div>

            <div id="personModal">
                <Modal addPerson={addPerson} buttonOpen={buttonOpen}/>
            </div>
        </>
    );
}

export default App;