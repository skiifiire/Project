import '../styles/ReactModal.css'

function ReactModal({ children, close }) {

    const handleClose = () => {
        close();
    };

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