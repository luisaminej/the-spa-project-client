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
                            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> Hola {user.username}! </h3>
                            <h5 class="mt-2 text-1xl leading-8  tracking-tight text-gray-200 sm:text-4xl"> Bienvenido al tablero de tus promociones</h5>  
                             
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
   
                                                
                                            </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>


                            <div class="grid grid-cols-1 gap-4">
                                <section aria-labelledby="section-2-title">

                                    <div class="rounded-lg bg-green-l overflow-hidden shadow text-white">
                                        <div class="p-6">
                                       Aquí encontrarás las promociones que tenemos disponibles por tu lealtad.
                                       <br></br>
                                       Para hacer válidas las promociones, en tu próxima cita el siguiente código:
                                       <br></br>
                                       <ul>
                                           <li>- Limpieza facial profunda: LFMX30</li>
                                           <li>- Limpieza profunda: LPMX30</li>
                                           <li>- Día spa infantil: SIMX</li>
                                           <li>- Tratamiento spa: TSMX20</li>
                                       </ul>
                                       
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