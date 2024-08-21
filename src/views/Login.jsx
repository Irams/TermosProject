import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-black">Iniciar sesión</h1>
        <p>Para hacer unpedido, debes iniciar sesión</p>
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="email"
                    >Email:</label>                    
                    <input 
                        type="email" 
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-200 rounded-lg"
                        name="email"
                        placeholder="Tu email"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password"
                    >Password:</label>                    
                    <input 
                        type="password" 
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-200 rounded-lg"
                        name="password"
                        placeholder="Tu password"
                    />
                </div>

                <input 
                    type="submit"
                    value="Iniciar Sesión"
                    className="bg-pink-600 hover:bg-pink-800 text-white w-full mt-5 p-3 
                                uppercase font-bold cursor-pointer rounded-lg" 
                />
            </form>
        </div>
        <nav className="mt-5">
          <Link to="/auth/registro">¿No tienes cuenta? Crea una</Link>
        </nav>
    </>
  )
}
