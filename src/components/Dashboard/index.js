import React, { useEffect, useState, useContext } from 'react'
import Carousel from 'react-elastic-carousel'
import userContext from './../../context/UserContext'


export default function Dashboard() {
        const ctx = useContext(userContext) 
        const {user} = ctx
    
    return (
        <>
            <div class="min-h-screen bg-gray-100">
                <header class="pb-24 bg-pink-dark">
                    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        <div class="hidden lg:block border-t border-white border-opacity-20 py-5">
                            <div class="grid grid-cols-1 gap-8 items-center">
                                    <h1> Hola, {user.username} </h1>
                                <div>
                                    <div class="max-w-md w-full mx-auto">
                                        <label for="mobile-search" class="sr-only">Search</label>
                                        <div class="relative text-green-transparent focus-within:text-green-dark">
                                            <div class="text-green-transparent pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">

                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="pink-dark" aria-hidden="true">
                                                    <path fill="pink-logo" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <input id="mobile-search" class="block w-full bg-white bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-green-light placeholder-green-transparent focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-green-transparent focus:ring-0 sm:text-sm" placeholder="Buscar" type="search" name="search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="lg:hidden">

                        <div class="z-20 fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>


                        <div class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
                            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                                <div class="pt-3 pb-2">
                                    <div class="flex items-center justify-between px-4">
                                        <div>
                                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                                        </div>
                                        <div class="-mr-2">
                                            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-dark">
                                                <span class="sr-only">Close menu</span>

                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-3 px-2 space-y-1">
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Home</a>
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Profile</a>
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Resources</a>
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Company Directory</a>
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Openings</a>
                                    </div>
                                </div>
                                <div class="pt-4 pb-2">
                                    <div class="flex items-center px-5">
                                        <div class="flex-shrink-0">
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        </div>
                                        <div class="ml-3 min-w-0 flex-1">
                                            <div class="text-base font-medium text-gray-800 truncate">Rebecca Nicholas</div>
                                            <div class="text-sm font-medium text-gray-500 truncate">rebecca.nicholas@example.com</div>
                                        </div>
                                        <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span class="sr-only">View notifications</span>

                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="mt-3 px-2 space-y-1">
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Your Profile</a>
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Settings</a>
                                        <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="-mt-24 pb-8">
                    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 class="sr-only">Page title</h1>

                        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">

                            <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                                <section aria-labelledby="section-1-title">
                                    <h2 class="sr-only" id="section-1-title">Section title</h2>
                                    <div class="rounded-lg bg-white overflow-hidden shadow">
                                        <div class="p-6">
                                        <div className="styling-example">
                                            <Carousel itemsToShow={1}>
                                                <item><img class="rounded-lg shadow-lg object-cover object-center" src="https://pbs.twimg.com/media/DTYV0cOX0AEHe_d.jpg" width="1184" height="1276" /></item>
                                                <item><img class="rounded-lg shadow-lg object-cover object-center" src="https://pbs.twimg.com/media/DXo_W4mXUAApwq_.jpg" width="1184" height="1276" /></item>
                                                <item><img class="rounded-lg shadow-lg object-cover object-center" src="https://i.pinimg.com/originals/b0/59/1c/b0591c5c2bfff9974dd12e1a0727291a.jpg" width="1184" height="1276" /></item>
                                                <item><img class="rounded-lg shadow-lg object-cover object-center" src="http://www.de-paseo.com/queretaro/wp-content/uploads/2020/05/padme-promocion-masajes-destacada.jpg" width="1184" height="1276" /></item>
                                                <item><img class="rounded-lg shadow-lg object-cover object-center" src="https://foodandtravel.mx/wp-content/uploads/2021/01/Spas-a-domicilio.jpg" width="1184" height="1276" /></item>
                                                
                                            </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>


                            <div class="grid grid-cols-1 gap-4">
                                <section aria-labelledby="section-2-title">
                                    <h2 class="sr-only" id="section-2-title">Nuestras instalaciones</h2>
                                    <div class="rounded-lg bg-white overflow-hidden shadow">
                                        <div class="p-6">
                                        <img class="rounded-lg shadow-lg object-cover object-center" src="https://i.pinimg.com/originals/03/b8/ba/03b8ba82cd870f350863e243e40862e1.jpg" width="1184" height="1276" />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                        <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"><span class="block sm:inline">&copy; 2021 Tailwind Labs Inc.</span> <span class="block sm:inline">All rights reserved.</span></div>
                    </div>
                </footer>
            </div>
        </>
    )
}