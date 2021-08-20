import React, { useContext, useEffect } from 'react'
import servicesContext from '../../context/Services/Services/ServicesContext'
import { useParams } from 'react-router-dom'


export default function Service() {
    const ctx = useContext(servicesContext)
    const { getService, service } = ctx

    const { serviceSlug } = useParams()
    useEffect(() => {
        getService(serviceSlug)

    }, [])


    return (
        <>
            {service.map((e) => {
                return (
                    <>
                        <div class="bg-white">
                            <div class="pt-6">
                                <nav aria-label="Breadcrumb">
                                    <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                                        <li>
                                            <div class="flex items-center">
                                                <a href="/servicios" class="mr-2 text-sm font-medium text-green-dark">
                                                    Servicios
                                                </a>
                                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                                </svg>
                                            </div>
                                        </li>



                                        <li class="text-sm">
                                            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
                                                {e.slug}
                                            </a>
                                        </li>
                                    </ol>
                                </nav>


                                <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                                    <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                        <img src={e.image} alt="Two each of gray, white, and black shirts laying flat." class="w-670 h-800 object-center object-cover" />
                                    </div>
                                    <div class="mt-4 lg:mt-0 lg:row-span-3">





                                        <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                                            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                                <h1 class="text-2xl font-extrabold tracking-tight text-green-terra sm:text-3xl">

                                                    {e.name}

                                                </h1>
                                                <p class="text-3xl text-pink-dark">${e.price}<span>.00</span></p>
                                            </div>




                                            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

                                                <div>
                                                    <h3 class="sr-only">Descripción</h3>

                                                    <div class="space-y-6">
                                                        <p class="text-base text-green-transparent">{e.description}</p>
                                                    </div>
                                                </div>

                                                <div class="mt-10">
                                                    <h3 class="text-sm font-medium text-green-dark">Detalles</h3>

                                                    <div class="mt-4">
                                                        <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                                                            <li class="text-green-transparent"><span class="text-green-transparent">{e.details1}</span></li>

                                           
  
                                                        </ul>
                                                    </div>
                                                </div>


                                            </div>
                                            <form>

                                                <button type="submit" class="mt-10 w-full bg-pink-dark border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Realizar pago</button>
                                            </form>
                                        </div>



                                    </div>




                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

