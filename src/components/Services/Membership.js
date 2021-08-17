
import React, {useEffect, useContext} from 'react'

import MembershipContext from '../../context/Services/Membership/MembershipContext'

export default function Membership() {

    const context = useContext(MembershipContext)

    const { 
        membership, 
        getMembership,
        } = context

  


    useEffect(() => {
        
        getMembership()

    },[])




    return (
        <div>
            Membership del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

           

            {
                membership.length === 0 ?
                "No hay membresias"
                :
                membership.map((membership,i) => {
                    return(
                        <div key={i}>

                            <p>{membership.name}</p>
                            <p>{membership._id}</p>
                            <p>{membership.image}</p>
                            <p>{membership.priceList}</p>
                            <p>{membership.price}</p>


                        </div>
                    )
                })
            }


        </div>
    )
}