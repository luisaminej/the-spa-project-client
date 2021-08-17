
import React, {useState, useEffect, useContext} from 'react'

import PacksContext from '../../context/Services/Packs/PacksContext'

export default function Packs() {

const context = useContext(PacksContext)

    const { 
        packs, 
        getPacks,
        createPacks,
        updatePacks,
        deletePacks} = context

  

    const [ newPacks, setNewPacks ] = useState({
        name: "",
        image:"",
        priceList:"",
        price:""

    })

    const [ editionMode, setEditionMode ] = useState(false)


    useEffect(() => {
        
        getPacks()

    },[])



    const handdleChange = (event) => {
        
        event.preventDefault()

        setNewPacks({
            ...newPacks,
            [event.target.name]: event.target.value
        })


    }


    const sendForm = (event) => {
        event.preventDefault()

        createPacks(newPacks)

        setNewPacks({
            name: "",
            image:"",
            priceList:"",
            price:""
        })
    }


    const activateEditionMode = (event, element) => {
        
        event.preventDefault()
        setEditionMode(true)
        setNewPacks(element)

    }


    const editPacks = (event) => {
        
        event.preventDefault()
        
        updatePacks(newPacks)

        setEditionMode(false)

        setNewPacks({
            name: "",
            image:"",
            priceList:"",
            price:""
        })

    }


    const removePacks = (event, element) => {
        
        event.preventDefault()
        deletePacks(element)

    }



    return (
        <div>
            Packs del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ editionMode ? 
                    (e) => editPacks(e) : 
                    (e) => sendForm(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newPacks.name}
                    onChange={(e) => { handdleChange(e) }}

                    image="image"
                    type="img"
                    value={newPacks.image}
                    onChange={(e) => { handdleChange(e) }}

                    priceList="Precio de lista"
                    type="price"
                    value={newPacks.priceList}
                    onChange={(e) => { handdleChange(e) }}

                    price="Precio"
                    type="price"
                    value={newPacks.price}
                    onChange={(e) => { handdleChange(e) }}
                />

                <button>
                    { editionMode ? "Editar Packs" : "Crear Packs" }
                </button>


            </form>


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


                           <button onClick={(evento) => {activateEditionMode(evento, packs)}}>Editar</button>
                            <button onClick={(evento) => removePacks(evento, packs)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}