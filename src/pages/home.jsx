import logo from '../logo.png'
import { Link } from 'react-router-dom';
import Recipes from '../datasource/recipes';

function Home() {

return <div className="bg-stone-50 pattern_body">

    {/* NavBar */}
    <nav className="border-b border-gray-300 bg-stone-300 pattern_header">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a href="/" className="flex items-center space-x-3 ">
                <img src={logo} className="h-8 rounded" alt="Home" />
                <span className="text-2xl font-semibold">Recetario Familiar</span>
            </a>

            <div className="flex md:order-2">
                <button type="button"
                    className="p-2 ml-1 text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                            d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search..." />
                </div>

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

            <div className="hidden w-full md:flex md:w-auto md:order-1">
                <div className="relative mt-3 md:hidden">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search..." />
                </div>
            </div>
        </div>
    </nav>

    {/* Content */}
    <div className="container min-h-screen px-4 pt-8 mx-auto">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Recipes.map((recipe, index) => (

                <Link to={`/recipe/${recipe.id}`}  key={index} className="flex flex-col items-center justify-center w-10/12 p-6 mx-auto text-center bg-white border border-gray-300 rounded-lg shadow cursor-pointer hover:bg-gray-100">
                    <img src={recipe.img} alt={recipe.nombre} className="object-cover mb-4 rounded-full size-40" />
                    <h2 className="w-full pb-2 mb-2 text-xl font-semibold border-b-2 border-b-stone-200">
                        {recipe.nombre.length > 18 ? `${recipe.description.slice(0,18)} ...` : recipe.nombre}
                    </h2>
                    <p className="text-gray-600">
                        {recipe.description.length > 25 ? `${recipe.description.slice(0,50)} ...` : recipe.description}
                    </p>
                </Link >
                
            ))}
        </div>
    </div>






</div>;
}

export default Home;