import React, { useState } from 'react'

import RegisterSuccess from '../Notifications/RegisterSucess'


export default function Home() {



    return (
        <>
            <div class="bg-white">
                <div class="relative overflow-hidden">

                    <main>
                        <div class="relative">
                            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
                            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                    <div class="absolute inset-0">
                                        <img class="h-full w-full object-cover" src="bg-flamingo.jpeg" alt="People working on laptops" />
                                        <div class="absolute inset-0 bg-gradient-to-r from-pink-deli to-white mix-blend-multiply"></div>
                                    </div>
                                    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                        <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span class="block text-pink-light">Bienvenido a</span>
                                            <span class="block text-pink-flamingo">la mejor experiencia spa!</span>
                                        </h1>
                                        <p class="mt-6 max-w-lg mx-auto text-center text-xl text-pink-light sm:max-w-3xl">
                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                        </p>
                                        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                                <a href="/nosotros" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-pink-dark bg-white hover:bg-indigo-50 sm:px-8">
                                                    Nosotros
                                                </a>
                                                <a href="/reservas" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-dark bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                                                    Reserva
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="bg-gray-100">
                            <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                                <p class="text-center text-sm font-semibold uppercase text-green-terra tracking-wide">
                                    Un espacio exclusivo para tí
                                </p>
                                <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5">

                                    <div class="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                        <img class="h-12" src="masaje.png" alt="Mirage" />
                                    </div>
                                    <div class="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                        <img class="h-12" src="aceite.png" alt="StaticKit" />
                                    </div>
                                    <div class="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                        <img class="h-12" src="bata.png" alt="Transistor" />
                                    </div>
                                    <div class="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                        <img class="h-12" src="sauna.png" alt="Workcation" />
                                    </div>
                                    <div class="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                        <img class="h-12" src="cafe.png" alt="Workcation" />
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="relative bg-white py-16 sm:py-24 lg:py-32">
                            <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                                <h2 class="text-base font-semibold tracking-wider text-pink-flamingo uppercase">Nuestra distinción</h2>
                                <p class="mt-2 text-3xl font-extrabold text-pink-dark tracking-tight sm:text-4xl">
                                    Personaliza tu servicio
                                </p>
                                <p class="mt-5 max-w-prose mx-auto text-xl text-green-transparent">
                                    En The Jungle Spa queremos cubrir tus necesidades y expectativas. Es por ello que personalizamos tus servicios, dependiendo  de tus gustos, estado de ánimo y necesidades específicas. Podrás elegir el color de tu cabina (cromoterapia), la música (musicoterapia), el aroma (aromaterapia), la presión del masaje, aceite o crema para tu masaje y el sabor del té.
                                    Con estos elementos, logramos generar un entorno que te relaje, revitalice o equilibre. Todo, dependiendo de cómo te sientas y lo que necesites hacer después de tu terapia.
                                </p>
                                <div class="mt-12">
                                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                        <div class="pt-6">
                                            <div class="flow-root bg-green-t rounded-lg px-6 pb-8">
                                                <div class="-mt-6">
                                                    <div>
                                                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-terra to-green-l rounded-md shadow-lg">

                                                            <img class="h-12" src="aroma-color.png" alt="Transistor" />
                                                        </span>
                                                    </div>
                                                    <h3 class="mt-8 text-lg font-bold text-pink-dark tracking-tight">Aromaterapia</h3>
                                                    <p class="mt-5 font-bold text-base text-white">
                                                        Elige el aroma con aceites esenciales de tu gusto.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-6">
                                            <div class="flow-root bg-gray-100 rounded- px-6 pb-8">
                                                <div class="-mt-6">
                                                    <div>
                                                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-l to-green-transparent rounded-md shadow-lg">

                                                            <img class="h-12" src="color-color.png" alt="Transistor" />
                                                        </span>
                                                    </div>
                                                    <h3 class="mt-8 text-lg font-medium text-pink-dark tracking-tight">Cromoterapia</h3>
                                                    <p class="mt-5 font-bold text-base text-green-l">
                                                        Elige el color de tu cabina, y siéntete confidente con tu ser
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-6">
                                            <div class="flow-root bg-green-t rounded-lg px-6 pb-8">
                                                <div class="-mt-6">
                                                    <div>
                                                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-terra to-green-l rounded-md shadow-lg">

                                                            <img class="h-12" src="te-color.png" alt="Transistor" />
                                                        </span>
                                                    </div>
                                                    <h3 class="mt-8 text-lg font-medium text-pink-dark tracking-tight">Sabor del té</h3>
                                                    <p class="mt-5 font-bold text-base text-white">
                                                        Elige entre nuestras variedades de sabor de té con el que te quieres relajar
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-6">
                                            <div class="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                                                <div class="-mt-6">
                                                    <div>
                                                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-l to-green-transparent rounded-md shadow-lg">

                                                            <img class="h-12" src="musica-color.png" alt="Transistor" />
                                                        </span>
                                                    </div>
                                                    <h3 class="mt-8 text-lg font-medium text-pink-dark tracking-tight">Musicoterapia</h3>
                                                    <p class="mt-5 font-bold text-base text-green-l">
                                                        Elige el tipo de música con el que te quieres relajar
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pt-6">
                                            <div class="flow-root bg-green-t rounded-lg px-6 pb-8">
                                                <div class="-mt-6">
                                                    <div>
                                                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-terra to-green-l rounded-md shadow-lg">

                                                            <img class="h-12" src="presionmasaje-color.png" alt="Transistor" />
                                                        </span>
                                                    </div>
                                                    <h3 class="mt-8 text-lg font-medium text-pink-dark tracking-tight">Presión del masaje</h3>
                                                    <p class="mt-5 font-bold text-base text-white">
                                                        Permite saber al terapeuta la presión que desees sobre el masaje
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="relative bg-pink-dark">
                            <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                                <img class="w-full h-full object-cover" src="https://www.leisureopportunities.co.uk/images/2020/HIGH346179_24624_721191.jpg" alt="" />
                                <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"></div>
                            </div>
                            <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                                <div class="md:ml-auto md:w-1/2 md:pl-10">
                                    <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                                        Siempre mejorando nuestro servicio para tí
                                    </h2>
                                    <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                                        Estamos para ayudarte
                                    </p>
                                    <p class="mt-3 text-lg text-gray-300">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
                                    </p>
                                    <div class="mt-8">
                                        <div class="inline-flex rounded-md shadow">
                                            <a href="/contacto" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-t bg-white hover:bg-gray-50">
                                                Contáctanos

                                                <svg class="-mr-1 ml-3 h-5 w-5 text-pink-flamingo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>


        </>
    )
}