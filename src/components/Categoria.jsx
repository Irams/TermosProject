import useTermos from "../hooks/useTermos"

export default function Categoria({categoria}) {

    const { handleClickCategoria, categoriaActual } = useTermos()
    const {icono, id, nombre} = categoria
    
    const resaltarCategoriaActual = () => categoriaActual.id === id ? 'bg-pink-400' : 'bg-white'
    
  return (
    <div className={`${resaltarCategoriaActual()}
                    flex items-center gap-4 border w-full p-3
                    hover:bg-pink-600 cursor-pointer`}
                    onClick={() => handleClickCategoria(id)}>

        <img 
            src={`img/icono_${icono}.png`} 
            alt="imagen icono" 
            className="w-12 forced-color-adjust-auto"/>
        <button 
          className="text-lg font-bold cursor-pointer truncate"
          type="button">
          {nombre}
        </button>

    </div>
  )
}
