
import React, {useEffect, useContext} from 'react'

import BodilyContext from '../../context/Services/Bodily/BodilyContext'

export default function Bodily() {

    const context = useContext(BodilyContext)

    const { 
        bodily, 
        getBodily,
        } = context

  
    useEffect(() => {
        
        getBodily()

    },[])






    return (
        <div>
            Bodily del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />



            {
                bodily.length === 0 ?
                "No hay servicios corporales"
                :
                bodily.map((bodily,i) => {
                    return(
                        <div key={i}>

                            <p>{bodily.name}</p>
                            <p>{bodily._id}</p>
                            <p>{bodily.image}</p>
                            <p>{bodily.priceList}</p>
                            <p>{bodily.price}</p>


                        </div>
                    )
                })
            }


        </div>
    )
}