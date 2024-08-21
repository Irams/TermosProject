import { useContext } from "react";
import TermosContext from "../context/TermosProvider";

const useTermos = () =>{
    return useContext(TermosContext)
}

export default useTermos