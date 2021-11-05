import React from 'react'

export default function Help() {
  return (
    <>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 class="text-center text-3xl font-extrabold text-pink-dark sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <dl class="mt-6 space-y-6 divide-y divide-gray-200">
              <div class="pt-6">
                <dt class="text-lg">

                  <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="font-medium text-pink-dark">
                      ¿Cómo puedo agendar?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                  <p class="text-base text-gray-500">
                    En la app de nuestra página Reservas  o por whatsapp.
                  </p>
                </dd>
              </div>
              <div class="pt-6">
                <dt class="text-lg">

                  <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="font-medium text-pink-dark">
                      ¿Cuáles son las formas de pago?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                  <p class="text-base text-gray-500">
                    Aceptamos todas las tarjetas (VISA, Master Card y American Express)
                  </p>
                </dd>
              </div>
              <div class="pt-6">
                <dt class="text-lg">

                  <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="font-medium text-pink-dark">
                      ¿Cómo puedo cambiar de día y horario mi servicio?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                  <p class="text-base text-gray-500">
                    Por el momento no hay manera de realizar el cambio directamente en la aplicación. Envíanos un correo a correo@thejunglespa.mx para ayudarte a modificar la dirección de tu reservación.
                  </p>
                </dd>
              </div>
              <div class="pt-6">
                <dt class="text-lg">

                  <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="font-medium text-pink-dark">
                      ¿Cómo puedo facturar mi servicio?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                  <p class="text-base text-gray-500">
                    Envíanos los siguientes datos al correo info@thejunglespa.com.mx: Datos fiscales,Uso cfdi (p.ej Gastos en General),Detalle de servicio a facturar
                  </p>
                </dd>
              </div>


              <div class="pt-6">
                <dt class="text-lg">

                  <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="font-medium text-pink-dark">
                      Si requiero tiempo adicional, ¿Se puede extender mi masaje?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                  <p class="text-base text-gray-500">
                    Es posible pero la autorización de esta extensión de tiempo debe ser aprobada por la administración de The Jungle Spa. En caso de requerir una extensión te pedimos que le solicites a tu terapeuta para que se comunique con administración. El pago de este nuevo servicio se realizará con la terapeuta por medio de una terminal clip.
                  </p>
                </dd>
              </div>
             
          
             </dl>
          </div>
        </div>
    </div> 
    
         </>
    )
}
