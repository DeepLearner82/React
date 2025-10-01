import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );

  // return ReactDOM.createPortal(
  //   <>
  //     <div className={classes.backdrop} onClick={closeHandler} />
  //     <dialog open className={classes.modal}>
  //       {children}
  //     </dialog>
  //   </>,
  //   document.getElementById("modal-root")
  // );
}

export default Modal;
