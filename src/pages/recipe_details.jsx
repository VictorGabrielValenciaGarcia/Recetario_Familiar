import { useParams } from 'react-router-dom';
import logo from '../logo.png'
import Recipes from '../datasource/recipes';


function RecipeDetails() {

    const { id } = useParams();

    const recipeId = parseInt(id); // Convierte el id a número
    const recipe = Recipes.find(r => r.id === recipeId); // Busca la receta

    return <div className=" bg-stone-50 pattern_body">

        {/* NavBar */}
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-300 bg-stone-300 pattern_header">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="/" className="flex items-center py-1 space-x-3">
                    <img src={logo} className="h-8 rounded" alt="Home" />
                    <span className="text-2xl font-semibold">Recetario Familiar</span>
                </a>

                <div className="flex md:order-2">
                    <button type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                        <span className="sr-only">Open main menu</span>
                    </button>
                </div>

            </div>
        </nav>

        {/* Content */}
        {recipe ? (
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 my-auto md:mt-7 md:flex-row">

                <div className="w-full mb-4 md:w-1/2 md:mb-0">

                    <div>
                        <img src={recipe.img} alt={recipe.nombre}
                            className="object-cover w-3/4 h-64 mx-auto mb-4 rounded-lg shadow-md max-h-64" />
                    </div>

                    <div className="px-4 text-center">
                        <p className="text-2xl font-semibold">#{recipe.id}. {recipe.nombre.length > 12 ?
                            `${recipe.nombre.slice(0, 12)} ...` : recipe.nombre}</p>
                    </div>
                </div>

                <div className="w-full p-4 rounded-lg md:w-1/2 bg-stone-100">
                    <p>{recipe.description}</p>
                </div>

            </div>



        ) : (

        <div className="container flex items-center justify-center min-h-screen px-4 py-0 mx-auto my-0">
            <h1 className="text-3xl font-semibold">Receta no Encontrada</h1>
        </div>


        )}


    </div>

}

export default RecipeDetails;