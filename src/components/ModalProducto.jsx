import {useState, useEffect} from 'react'
import useTermos from "../hooks/useTermos"
import { formatearDinero } from "../helpers"

export default function ModalProducto() {

    const { 
        producto, 
        handleClickModal,
        handleAgregarPedido,
        pedido
         } = useTermos()
    const {nombre, precio, precioPerson, color, capacidad, imagen} = producto
    const [cantidad, setCantidad] = useState(1)
    const [personalizado, setPersonalizado] = useState(false)
    const [edicion, setEdicion] = useState(false)

    useEffect(() =>{
        if(pedido.some( pedidoState => pedidoState.id === producto.id )){
            const productoEdicion = pedido.filter(pedidoState => pedidoState.id === producto.id)[0]
            setPersonalizado(productoEdicion.personalizado)
            setEdicion(true)
        }
        
    }, [pedido])
    
    console.log(producto.personalizado);
    // console.log(precio2);

  return (
    <>
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img 
                    src={`/img/${imagen}.png`} 
                    alt={`Imagen producto ${producto.nombre}`} />
                    
            </div>

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button
                        onClick={() => handleClickModal() }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                        <path d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">
                    {nombre} Color {color} - {capacidad}
                </h1>
                <p className="mt-5 font-black text-5xl text-pink-800">
                    { personalizado ? 
                        formatearDinero(precioPerson) : 
                        formatearDinero(precio) 
                    }

                    {/* { 
                        formatearDinero(precio) 
                    } */}
                </p>
                <div className='flex gap-4 mt-5'>
                    {/* <button type='button'
                            onClick={() =>{
                                if(cantidad<=1) return
                                setCantidad(cantidad-1)
                            }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>
                        <p className='text-3xl'>{cantidad}</p>
                    <button type='button'
                            onClick={() =>{
                                if(cantidad>=20) return
                                setCantidad(cantidad+1)
                            }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button> */}
                    
                    <label className="text-2xl">
                            Personalizado
                    </label>
                    <input 
                           type="checkbox"
                           onClick={() => {
                                setPersonalizado(!personalizado)
                            }}
                           className="mt-2.5 w-4 h-4 text-blue-600 bg-gray-100 
                           border-gray-300 rounded focus:ring-blue-500 
                           dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                           focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                
                <button 
                    type="button"
                    className="bg-pink-600 hover:bg-pink-800 px-5 py-2 mt-5
                     text-white font-bold uppercase rounded-xl"
                     onClick={() => {
                        handleAgregarPedido({...producto, cantidad, personalizado})
                        handleClickModal()
                        }}>
                    {edicion ? 'Guardar cambios' : 'Añadir al pedido'}
                </button>
            </div>
        </div>
        
    </>
  )
}
