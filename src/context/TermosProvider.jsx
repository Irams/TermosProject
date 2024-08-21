import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { categorias as categoriasDB } from "../data/categorias"

const TermosContext = createContext();

const TermosProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[1]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [precio2, setPrecio2] = useState(false);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        // console.log(categoria)
        setCategoriaActual(categoria)
        // console.log(`click en categoría ${id}`);
    }
    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleSetPrecioPersonalizado = () => {
        setPrecio2(!precio2)
    }

    const handleAgregarPedido = ({categoria_id, capacidad, ...producto}) =>{
        setPedido([...pedido, producto])
        toast.success('Agregado al Pedido')

        //El siguiente código permite no repetir productos en el pedido, sólo habría que comentar
        //la línea de arriba y descomentar el if de abajo:
        // if(pedido.some( pedidoState => pedidoState.id === producto.id )){
        //     const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
        //     setPedido(pedidoActualizado)
        //     toast.success('Guardado Correctamente')
        // }else {
        //     setPedido([...pedido, producto])
        // }

        // console.log(producto);
    }

    const handleEditarCantidad = id =>{
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }
    
    return(
        <TermosContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                setPedido,
                precio2,
                handleSetPrecioPersonalizado,
                handleAgregarPedido,
                handleEditarCantidad
            }}
        
        >{children}</TermosContext.Provider>
    )
}

export {
    TermosProvider
}

export default TermosContext