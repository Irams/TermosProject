import { productos as data } from "../data/productos"
import Producto from "../components/Producto"
import useTermos from "../hooks/useTermos"

export default function Inicio() {

  const { categoriaActual } = useTermos()
  // console.log(categoriaActual);
  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className="text-4xl my-5 font-black">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">
        Elije y personaliza tu pedido a continuación
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto =>(
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
