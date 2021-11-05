import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './../../context/UserContext'
import Logo from './../../assets/logospanofondo.png'




export default function Header() {


    const [nav, setNav] = useState(false)


    const userCtx = useContext(UserContext)


    const {
        authStatus,
        user,
        logOut
    } = userCtx

    const showNav = (event) => {

        event.preventDefault()
        setNav(!nav)

    }

    return (
        <>
            <nav className="bg-pink-logo">
                <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-8">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


                            {/* MOBILE
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button> */}
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">

                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                                {

                                    authStatus ?

                                        (
                                            <>

                                                <p className=" px-4 py-2 text-sm text-pink-dark">correo@thejunglespa.com</p>
                                                <p className=" px-4 py-2 text-sm text-pink-dark">+52 5513192695</p>
                                                <img className="px-4 py-2" src="flag.png" alt="logo Spa" />
                                                <p className=" px-4 py-2 text-sm text-pink-dark">México</p>
                                                <a href="/mi-tablero" className="block px-4 py-2 text-sm text-pink-dark" role="menuitem" tabindex="-1" id="user-menu-item-0">Mi tablero</a>
                                                <a className="block px-4 py-2 text-sm text-pink-dark" onClick={() => { logOut() }}>
                                                    Cerrar sesión
                                                </a>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <Link to="/registrarse" className="block px-4 py-2 text-sm text-pink-dark" aria-controls="mobile-menu">
                                                    Registro
                                                </Link>
                                                <Link to="/iniciar-sesion" className="block px-4 py-2 text-sm text-pink-dark" aria-controls="mobile-menu">
                                                    Iniciar sesión
                                                </Link>
                                            </>
                                        )


                                }





                            </div>
                        </div>

                    </div>
                </div>


            </nav>



            <nav className="bg-pink-dark">
                <div className="max-w-7xl mx-auto px-2 ">
                    <div className="relative flex justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


                            {/* MOBILE
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button> */}
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to="/">

                                    <img className="hidden lg:block h-12 w-auto sm:justify-start" src={Logo} alt="logo Spa" />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">


                                <>
                                    <Link to="/servicios" className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Servicios
                                    </Link>
                                    <Link to="/productos" className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Productos
                                    </Link>
                                    <Link to="/reservas" className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Reservas
                                    </Link>
                                    <Link to="/nosotros" className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Nosotros
                                    </Link>
                                    <Link to="/ayuda" className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Ayuda
                                    </Link>
                                    <Link to="/contacto" className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Contacto
                                    </Link>
                                   


                                </>





                            </div>
                        </div>

                        {
                            authStatus ?

                                (
                                    <>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                            <div className="ml-3 relative">



                                                {

                                                    nav ?

                                                        (
                                                            <>
                                                                <div className="origin-top-right z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

                                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                                                                </div>
                                                            </>

                                                        ) : null

                                                }

                                            </div>
                                        </div>
                                    </>
                                ) : null

                        }

                    </div>
                </div>


                <div className="sm:hidden" id="mobile-menu">
                    <div className="pt-2 pb-4 space-y-1">
                        <a href="/" className="bg-indigo-50 border-black-500 text-pink-dark block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
                        <a href="/servicios" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Servicios</a>
                        <a href="/productos" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Productos</a>
                        <a href="/reservas" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Reservas</a>
                        <a href="/nosotros" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Nosotros</a>
                        <a href="/ayuda" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Ayuda</a>
                        <a href="/contacto" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contacto</a>
                    </div>
                </div>
            </nav>





        </>
    )
}