import React from 'react'

export default function Service() {
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
                                    servicio-slug
                                </a>
                            </li>
                        </ol>
                    </nav>


                    <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="mt-4 lg:mt-0 lg:row-span-3">
                            <h2 class="sr-only">Product information</h2>
                            <p class="text-3xl text-pink-dark">$192</p>



                            <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 class="text-2xl font-extrabold tracking-tight text-green-terra sm:text-3xl">
                                        Basic Tee 6-Pack
                                    </h1>
                                </div>




                                <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

                                    <div>
                                        <h3 class="sr-only">Description</h3>

                                        <div class="space-y-6">
                                            <p class="text-base text-green-transparent">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                                        </div>
                                    </div>

                                    <div class="mt-10">
                                        <h3 class="text-sm font-medium text-green-dark">Highlights</h3>

                                        <div class="mt-4">
                                            <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                                                <li class="text-green-transparent"><span class="text-green-transparent">Hand cut and sewn locally</span></li>

                                                <li class="text-green-transparent"><span class="text-green-transparent">Dyed with our propietary colors</span></li>

                                                <li class="text-green-transparent"><span class="text-green-transparent">Pre-washed &amp; pre-shrunk</span></li>

                                                <li class="text-green-transparent"><span class="text-green-transparent">Ultra-soft 100% cotton</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="mt-10">
                                        <h2 class="text-sm font-medium text-green-dark">Details</h2>

                                        <div class="mt-4 space-y-6">
                                            <p class="text-sm text-green-transparent">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                                        </div>
                                    </div>
                                </div>
                                <form>

                                    <button type="submit" class="mt-10 w-full bg-pink-dark border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Agregar a carrito</button>
                                </form>
                            </div>



                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}
