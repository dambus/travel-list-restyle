export default function Modal({ onCloseModal, children }) {
  function handleHideModal() {
    onCloseModal(false);
  }
  return (
    <>
      <div className="modal-wrapper" onClick={handleHideModal}>
        <div className="modal-body">
          <button className="modal-close-btn" onClick={handleHideModal}>
            <strong>X</strong>
          </button>
          <div className="modal-children">{children}</div>
        </div>
      </div>
    </>
  );
}
