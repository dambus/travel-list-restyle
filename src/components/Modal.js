export default function Modal({ onCloseModal, children }) {
  // const modalWrapperStyle = {
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   background: "black",
  //   opacity: ".66",
  //   width: "100%",
  //   height: "100%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   zIndex: "98",
  // };

  // const modalBodyStyle = {
  //   position: "fixed",
  //   width: "50vw",
  //   height: "auto",
  //   minHeight: "200px",
  //   padding: "2rem",
  //   backgroundColor: "white",
  //   opacity: "1",
  //   zIndex: "99",
  //   transition: "all 0.5s ease",
  //   borderRadius: "16px",
  // };

  // const modalCloseButtonStyle = {
  //   border: "none",
  //   outline: "none",
  //   background: "none",
  //   color: "white",
  //   cursor: "pointer",
  //   fontSize: "1rem",
  //   fontWeight: "500",
  // };

  function handleHideModal() {
    onCloseModal(false);
  }
  return (
    <>
      <div className="modal-wrapper" onClick={handleHideModal}>
        <div className="modal-body">
          <button onClick={handleHideModal}>
            <strong>X</strong>
          </button>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
