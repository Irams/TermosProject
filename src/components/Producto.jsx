// import { formatearDinero } from "../helpers"
import useTermos from "../hooks/useTermos"

export default function Producto({producto}) {

    const {handleClickModal, handleSetProducto} = useTermos()
    const {nombre, imagen, color, capacidad} = producto

  return (
    <div className="border p-3 shadow bg-white">
        <img 
            src={`/img/${imagen}.png`} 
            alt={`imagen ${nombre}`}
            className="w-full" 
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre} - {capacidad} {color}</h3>
            {/* <p className="mt-5 font-black text-4xl text-pink-600">
              {formatearDinero(precio)+ ' '} 
              <br/>
              <span className="text-zinc-700 text-xl">
              Sin personalizar
              </span> 
            </p> */}

            {/* <p className="mt-5 font-black text-4xl text-blue-600">
              {formatearDinero(precio)+ ' '} 
              <span className="text-zinc-700 text-xl">
              Personalizado
              </span> 
            </p> */}

            <button
              type="button"
              className="bg-pink-600 hover:bg-pink-800 text-white w-full 
                          mt-5 rounded-xl p-3 uppercase font-bold"
              onClick={ () => {
                handleClickModal();
                handleSetProducto(producto);
              }}>
                Agregar
            </button>
        </div>
    </div>
  )
}
