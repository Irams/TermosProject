import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ModalProducto from "../components/ModalProducto";
import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
import useTermos from "../hooks/useTermos";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')
 
export default function Layout() {

  const {modal} = useTermos();
  // console.log(modal);

  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Resumen />
      </div>

      
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce />
     

    </>
  )
}
