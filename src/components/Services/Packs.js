
import React, {useEffect, useContext} from 'react'

import PacksContext from '../../context/Services/Packs/PacksContext'

export default function Packs() {

const context = useContext(PacksContext)

    const { 
        packs, 
        getPacks,
        } = context

  


    useEffect(() => {
        
        getPacks()

    },[])

   


    return (
        <div>
            Packs del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

          


            {
                packs.length === 0 ?
                "No hay paquetes"
                :
                packs.map((packs,i) => {
                    return(
                        <div key={i}>

                            <p>{packs.name}</p>
                            <p>{packs._id}</p>
                            <p>{packs.image}</p>
                            <p>{packs.priceList}</p>
                            <p>{packs.price}</p>


                        </div>
                    )
                })
            }


        </div>
    )
}