
import React, { useEffect, useContext } from 'react'

import BodyContext from '../../context/Products/Body/BodyContext'

export default function Body() {

    const context = useContext(BodyContext)

    const {
        body,
        getBody,
    } = context




    useEffect(() => {

        getBody()

    }, [])




    return (

        <>

            {
                body.length === 0 ?
                    "No hay productos corporales"
                    :
                    body.map((body, i) => {
                        console.log(body)
                        return (
                            <div key={i}>

                                <div class="bg-white overflow-hidden">
                                    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                                        <div class="hidden lg:block bg-green-transparent absolute top-0 bottom-0 left-3/4 w-screen"></div>
                                        <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                                            <div>
                                                <h2 class="text-base text-green-dark font-semibold tracking-wide uppercase">Productos corporales</h2>
                                                <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-pink-dark sm:text-4xl">The Jungle Spa</h3>
                                            </div>
                                        </div>
                                        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                                        
                                            <div class="relative bg-white">
                                                



                                                <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                                    <h2 class="sr-only">Productos para el cuerpo</h2>

                                                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                                        <a href="#" class="group">
                                                            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                            </div>
                                                            <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                                Earthen Bottle
                                                            </h3>
                                                            <p class="mt-1 text-lg font-medium text-green-transparent">
                                                                ${body.price}
                                                            </p>
                                                        </a>

                                                        <a href="#" class="group">
                                                            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                            </div>
                                                            <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                                Nomad Tumbler
                                                            </h3>
                                                            <p class="mt-1 text-lg font-medium text-green-transparent">
                                                                ${body.price}
                                                            </p>
                                                        </a>

                                                        <a href="#" class="group">
                                                            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                            </div>
                                                            <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                                Focus Paper Refill
                                                            </h3>
                                                            <p class="mt-1 text-lg font-medium text-green-transparent">
                                                                ${body.price}
                                                            </p>
                                                        </a>

                                                        <a href="#" class="group">
                                                            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                            </div>
                                                            <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                                Machined Mechanical Pencil
                                                            </h3>
                                                            <p class="mt-1 text-lg font-medium text-green-transparent">
                                                                ${body.price}
                                                            </p>
                                                        </a>


                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>



                        )
                    }

                    )

            }
        </>
    )
}