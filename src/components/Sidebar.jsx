
import useTermos from "../hooks/useTermos"
import Categoria from "./Categoria"

export default function Sidebar() {

  const {categorias} = useTermos()

  return (
    <aside className="md:w-72 p-2">
      <div className="p-4">
        <img 
          src="img/jossa.svg" 
          alt="Logo"
          className="w-full" />
      </div>

      <div className="mt-10">
        {categorias.map( categoria =>(
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </div>

      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-pink-800 w-full p-3 font-bold text-white rounded-lg"
        >Cancelar Orden</button>
      </div>


    </aside>
  )
}
