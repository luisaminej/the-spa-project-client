
import React, {useEffect, useContext} from 'react'

import GiftcardContext from '../../context/Services/Giftcard/GiftcardContext'

export default function Giftcard() {

    const context = useContext(GiftcardContext)

    const { 
        giftcard, 
        getGiftcard,
        } = context

  


    useEffect(() => {
        
        getGiftcard()

    },[])



    return (
        <div>
            Giftcard del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />


            {
                giftcard.length === 0 ?
                "No hay tarjetas de regalo"
                :
                giftcard.map((giftcard,i) => {
                    return(
                        <div key={i}>

                            <p>{giftcard.name}</p>
                            <p>{giftcard._id}</p>
                            <p>{giftcard.image}</p>
                            <p>{giftcard.priceList}</p>
                            <p>{giftcard.price}</p>


                        </div>
                    )
                })
            }


        </div>
    )
}