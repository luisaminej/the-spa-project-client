
import React, {useState, useEffect, useContext} from 'react'

import GiftcardContext from '../../context/Services/Giftcard/GiftcardContext'

export default function Giftcard() {

    const context = useContext(GiftcardContext)

    const { 
        giftcard, 
        getGiftcard,
        createGiftcard,
        updateGiftcard,
        deleteGiftcard} = context

  

    const [ newGiftcard, setNewGiftcard ] = useState({
        name: "",
        image:"",
        priceList:"",
        price:""

    })

    const [ editionMode, setEditionMode ] = useState(false)


    useEffect(() => {
        
        getGiftcard()

    },[])



    const handdleChange = (event) => {
        
        event.preventDefault()

        setNewGiftcard({
            ...newGiftcard,
            [event.target.name]: event.target.value
        })


    }


    const sendForm = (event) => {
        event.preventDefault()

        createGiftcard(newGiftcard)

        setNewGiftcard({
            name: "",
            image:"",
            priceList:"",
            price:""
        })
    }


    const activateEditionMode = (event, element) => {
        
        event.preventDefault()
        setEditionMode(true)
        setNewGiftcard(element)

    }


    const editGiftcard = (event) => {
        
        event.preventDefault()
        
        updateGiftcard(newGiftcard)

        setEditionMode(false)

        setNewGiftcard({
            name: "",
            image:"",
            priceList:"",
            price:""
        })

    }


    const removeGiftcard = (event, element) => {
        
        event.preventDefault()
        deleteGiftcard(element)

    }



    return (
        <div>
            Giftcard del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ editionMode ? 
                    (e) => editGiftcard(e) : 
                    (e) => sendForm(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newGiftcard.name}
                    onChange={(e) => { handdleChange(e) }}

                    image="image"
                    type="img"
                    value={newGiftcard.image}
                    onChange={(e) => { handdleChange(e) }}

                    priceList="Precio de lista"
                    type="price"
                    value={newGiftcard.priceList}
                    onChange={(e) => { handdleChange(e) }}

                    price="Precio"
                    type="price"
                    value={newGiftcard.price}
                    onChange={(e) => { handdleChange(e) }}
                />

                <button>
                    { editionMode ? "Editar Giftcard" : "Crear Giftcard" }
                </button>


            </form>


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


                           <button onClick={(evento) => {activateEditionMode(evento, giftcard)}}>Editar</button>
                            <button onClick={(evento) => removeGiftcard(evento, giftcard)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}