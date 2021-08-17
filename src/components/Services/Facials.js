
import React, {useEffect, useContext} from 'react'

import FacialsContext from '../../context/Services/Facials/FacialsContext'

export default function Facials() {

    const context = useContext(FacialsContext)

    const { 
        facials, 
        getFacials,
        } = context

  

    useEffect(() => {
        
        getFacials()

    },[])





    return (
        <div>
            Facials del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

          


            {
                facials.length === 0 ?
                "No hay servicios faciales"
                :
                facials.map((facials,i) => {
                    return(
                        <div key={i}>

                            <p>{facials.name}</p>
                            <p>{facials._id}</p>
                            <p>{facials.image}</p>
                            <p>{facials.priceList}</p>
                            <p>{facials.price}</p>


                        </div>
                    )
                })
            }


        </div>
    )
}