import { useEffect } from 'react'
import '../../styles/ReactModal.css'

function ReactModal({ children, close }) {

    const handleClose = () => {
        close();
    };

    useEffect(() => {
      document.body.classList.add('body-no-scroll');
      return () => {
        document.body.classList.remove('body-no-scroll');
      };
    }, []);

    return (
      <div className="modalBack">
        <div className="buttonText">
          {children}
          <button className="buttonPosition" onClick={handleClose}>
            Close information
          </button>
        </div>
      </div>
    );
  }

export default ReactModal