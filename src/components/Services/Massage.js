
import React, {useState, useEffect, useContext} from 'react'

import MassageContext from '../../context/Services/Massage/MassageContext'

export default function Massage() {

    const context = useContext(MassageContext)

    const { 
        massage, 
        getMassage,
        } = context

  

  
    useEffect(() => {
        
        getMassage()

    },[])




    return (
        <div>
            Massage del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

           


            {
                massage.length === 0 ?
                "No hay servicios de masajes"
                :
                massage.map((massage,i) => {
                    return(
                        <div key={i}>

                            <p>{massage.name}</p>
                            <p>{massage._id}</p>
                            <p>{massage.image}</p>
                            <p>{massage.priceList}</p>
                            <p>{massage.price}</p>


                        </div>
                    )
                })
            }


        </div>
    )
}