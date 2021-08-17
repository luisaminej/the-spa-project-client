
import React, {useState, useEffect, useContext} from 'react'

import FacialsContext from '../../context/Services/Facials/FacialsContext'

export default function Facials() {

    const context = useContext(FacialsContext)

    const { 
        facials, 
        getFacials,
        createFacials,
        updateFacials,
        deleteFacials} = context

  

    const [ newFacials, setNewFacials ] = useState({
        name: "",
        image:"",
        priceList:"",
        price:""

    })

    const [ editionMode, setEditionMode ] = useState(false)


    useEffect(() => {
        
        getFacials()

    },[])



    const handdleChange = (event) => {
        
        event.preventDefault()

        setNewFacials({
            ...newFacials,
            [event.target.name]: event.target.value
        })


    }


    const sendForm = (event) => {
        event.preventDefault()

        createFacials(newFacials)

        setNewFacials({
            name: "",
            image:"",
            priceList:"",
            price:""
        })
    }


    const activateEditionMode = (event, element) => {
        
        event.preventDefault()
        setEditionMode(true)
        setNewFacials(element)

    }


    const editFacials = (event) => {
        
        event.preventDefault()
        
        updateFacials(newFacials)

        setEditionMode(false)

        setNewFacials({
            name: "",
            image:"",
            priceList:"",
            price:""
        })

    }


    const removeFacials = (event, element) => {
        
        event.preventDefault()
        deleteFacials(element)

    }



    return (
        <div>
            Facials del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ editionMode ? 
                    (e) => editFacials(e) : 
                    (e) => sendForm(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newFacials.name}
                    onChange={(e) => { handdleChange(e) }}

                    image="image"
                    type="img"
                    value={newFacials.image}
                    onChange={(e) => { handdleChange(e) }}

                    priceList="Precio de lista"
                    type="price"
                    value={newFacials.priceList}
                    onChange={(e) => { handdleChange(e) }}

                    price="Precio"
                    type="price"
                    value={newFacials.price}
                    onChange={(e) => { handdleChange(e) }}
                />

                <button>
                    { editionMode ? "Editar Facials" : "Crear Facials" }
                </button>


            </form>


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


                           <button onClick={(evento) => {activateEditionMode(evento, facials)}}>Editar</button>
                            <button onClick={(evento) => removeFacials(evento, facials)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}