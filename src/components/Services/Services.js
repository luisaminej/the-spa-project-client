
import React, { useEffect, useContext } from 'react'

import ServicesContext from '../../context/Services/Services/ServicesContext'

import {
    Link
} from "react-router-dom"

export default function Services() {

    const context = useContext(ServicesContext)

    const {
        services,
        getServices,
    } = context




    useEffect(() => {

        getServices()

    }, [])




    return (

        <>


            <div>

            <div class="bg-white overflow-hidden">
                    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div class="hidden lg:block bg-green-transparent absolute top-0 bottom-0 left-3/4 w-screen">
                        <img class=" shadow-lg object-contain  " src="logo.jpeg" width="550" height="700" />
                        </div>
                        <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                            <div>
                                <h2 class="text-base text-green-dark font-semibold tracking-wide uppercase">Nuestros servicios</h2>
                                <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-pink-dark sm:text-4xl">The Jungle Spa</h3>
                            </div>
                        </div>
                        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">

                            <div class="relative bg-white">




                                <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                    
                                    <h5 class="mt-4 text-1xl leading-8 font-extrabold tracking-tight text-green-transparent sm:text-3xl">Masajes</h5>
                                    <br />
                                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                                        {services.massage.map((service) => {
                                            return (
                                                <>
                                                    <Link to={`/servicios/${service.slug}`} class="group">
                                                        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                            <img src={service.image} alt="" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                        </div>
                                                        <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                            {service.name}
                                                        </h3>
                                                        <p class="line-through text-red-900 ">
                                                            ${service.pricelist}.00 mxn </p>
                                                        <p class="mt-1 text-lg font-medium text-green-transparent">
                                                            ${service.price}
                                                        </p>
                                                    </Link>

                                                </>
                                            )
                                        })}

                                    </div>
                                    <h5 class="mt-4 text-1xl leading-8 font-extrabold tracking-tight text-green-transparent sm:text-3xl">Corporales</h5>
                                    <br />
                                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                                        {services.bodily.map((service) => {
                                            return (
                                                <>
                                                    <Link to={`/servicios/${service.slug}`} class="group">
                                                        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                            <img src={service.image} alt="" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                        </div>
                                                        <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                            {service.name}
                                                        </h3>
                                                        <p class="line-through text-red-900 ">
                                                            ${service.pricelist}.00 mxn </p>
                                                        <p class="mt-1 text-lg font-medium text-green-transparent">
                                                            ${service.price}
                                                        </p>
                                                    </Link>

                                                </>
                                            )
                                        })}

                                    </div>

                                    <h5 class="mt-4 text-1xl leading-8 font-extrabold tracking-tight text-green-transparent sm:text-3xl">Faciales</h5>
                                    <br />
                                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                                        {services.facials.map((service) => {
                                            return (
                                                <>
                                                    <Link to={`/servicios/${service.slug}`} class="group">
                                                        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                            <img src={service.image} alt="" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                        </div>
                                                        <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                            {service.name}
                                                        </h3>
                                                        <p class="line-through text-red-900 ">
                                                            ${service.pricelist}.00 mxn </p>
                                                        <p class="mt-1 text-lg font-medium text-green-transparent">
                                                            ${service.price}
                                                        </p>
                                                    </Link>

                                                </>
                                            )
                                        })}

                                    </div>
                                    <h5 class="mt-4 text-1xl leading-8 font-extrabold tracking-tight text-green-transparent sm:text-3xl">Tarjetas de regalo</h5>
                                    <br />
                                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                                        {services.giftcard.map((service) => {
                                            return (
                                                <>
                                                    <Link to={`/servicios/${service.slug}`} class="group">
                                                        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                            <img src={service.image} alt="" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                        </div>
                                                        <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                            {service.name}
                                                        </h3>
                                                        <p class="line-through text-red-900 ">
                                                            ${service.pricelist}.00 mxn </p>
                                                        <p class="mt-1 text-lg font-medium text-green-transparent">
                                                            ${service.price}
                                                        </p>
                                                    </Link>

                                                </>
                                            )
                                        })}

                                    </div>

                                    <h5 class="mt-4 text-1xl leading-8 font-extrabold tracking-tight text-green-transparent sm:text-3xl">Membresías</h5>
                                    <br />
                                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                                        {services.membership.map((service) => {
                                            return (
                                                <>
                                                    <Link to={`/servicios/${service.slug}`} class="group">
                                                        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                            <img src={service.image} alt="" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                        </div>
                                                        <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                            {service.name}
                                                        </h3>
                                                        <p class="line-through text-red-900 ">
                                                            ${service.pricelist}.00 mxn </p>
                                                        <p class="mt-1 text-lg font-medium text-green-transparent">
                                                            ${service.price}
                                                        </p>
                                                    </Link>

                                                </>
                                            )
                                        })}

                                    </div>
                                    <h5 class="mt-4 text-1xl leading-8 font-extrabold tracking-tight text-green-transparent sm:text-3xl">Paquetes</h5>
                                    <br />
                                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                                        {services.packs.map((service) => {
                                            return (
                                                <>
                                                    <Link to={`/servicios/${service.slug}`} class="group">
                                                        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                            <img src={service.image} alt="" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                                                        </div>
                                                        <h3 class="mt-4 text-sm font-bold text-pink-dark">
                                                            {service.name}
                                                        </h3>
                                                        <p class="line-through text-red-900 ">
                                                            ${service.pricelist}.00 mxn </p>
                                                        <p class="mt-1 text-lg font-medium text-green-transparent">
                                                            ${service.price}
                                                        </p>
                                                    </Link>

                                                </>
                                            )
                                        })}

                                    </div>



                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>





            )


        </>
    )
}