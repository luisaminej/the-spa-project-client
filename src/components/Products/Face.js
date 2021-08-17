
import React, {useState, useEffect, useContext} from 'react'

import FaceContext from '../../context/Products/Face/FaceContext'

export default function Face() {

    const context = useContext(FaceContext)

    const { 
        face, 
        getFace,
        createFace,
        updateFace,
        deleteFace} = context

  

    const [ newFace, setNewFace ] = useState({
        name: "",
        image:"",
        priceList:"",
        price:""

    })

    const [ editionMode, setEditionMode ] = useState(false)


    useEffect(() => {
        
        getFace()

    },[])



    const handdleChange = (event) => {
        
        event.preventDefault()

        setNewFace({
            ...newFace,
            [event.target.name]: event.target.value
        })


    }


    const sendForm = (event) => {
        event.preventDefault()

        createFace(newFace)

        setNewFace({
            name: "",
            image:"",
            priceList:"",
            price:""
        })
    }


    // MODO EDICIÓN

    const activateEditionMode = (event, element) => {
        
        event.preventDefault()
        setEditionMode(true)
        setNewFace(element)

    }


    const editFace = (event) => {
        
        event.preventDefault()
        
        updateFace(newFace)

        setEditionMode(false)

        setNewFace({
            name: "",
            image:"",
            priceList:"",
            price:""
        })

    }

    // BORRAR PROYECTO


    const removeFace = (event, element) => {
        
        event.preventDefault()
        deleteFace(element)

    }



    return (
        <div>
            Face del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ editionMode ? 
                    (e) => editFace(e) : 
                    (e) => sendForm(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newFace.name}
                    onChange={(e) => { handdleChange(e) }}

                    image="image"
                    type="img"
                    value={newFace.image}
                    onChange={(e) => { handdleChange(e) }}

                    priceList="Precio de lista"
                    type="price"
                    value={newFace.priceList}
                    onChange={(e) => { handdleChange(e) }}

                    price="Precio"
                    type="price"
                    value={newFace.price}
                    onChange={(e) => { handdleChange(e) }}
                />

                <button>
                    { editionMode ? "Editar Face" : "Crear Face" }
                </button>


            </form>


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


                           <button onClick={(evento) => {activateEditionMode(evento, face)}}>Editar</button>
                            <button onClick={(evento) => removeFace(evento, face)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}