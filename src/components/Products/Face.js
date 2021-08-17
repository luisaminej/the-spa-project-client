
import React, {useEffect, useContext} from 'react'

import FaceContext from '../../context/Products/Face/FaceContext'

export default function Face() {

    const context = useContext(FaceContext)

    const { 
        face, 
        getFace,
        } = context

  

    useEffect(() => {
        
        getFace()

    },[])



   


    return (
        <div>
            Face del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />


            {
                face.length === 0 ?
                "No hay productos faciales"
                :
                face.map((face,i) => {
                    return(
                        <div key={i}>

                            <p>{face.name}</p>
                            <p>{face._id}</p>
                            <p>{face.image}</p>
                            <p>{face.priceList}</p>
                            <p>{face.price}</p>


                        </div>
                    )
                })
            }


        </div>
    )
}