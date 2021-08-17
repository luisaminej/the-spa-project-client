
import React, {useState, useEffect, useContext} from 'react'

import BodilyContext from '../../context/Services/Bodily/BodilyContext'

export default function Bodily() {

    const context = useContext(BodilyContext)

    const { 
        bodily, 
        getBodily,
        createBodily,
        updateBodily,
        deleteBodily} = context

  

    const [ newBodily, setNewBodily ] = useState({
        name: "",
        image:"",
        priceList:"",
        price:""

    })

    const [ editionMode, setEditionMode ] = useState(false)


    useEffect(() => {
        
        getBodily()

    },[])



    const handdleChange = (event) => {
        
        event.preventDefault()

        setNewBodily({
            ...newBodily,
            [event.target.name]: event.target.value
        })


    }


    const sendForm = (event) => {
        event.preventDefault()

        createBodily(newBodily)

        setNewBodily({
            name: "",
            image:"",
            priceList:"",
            price:""
        })
    }


    const activateEditionMode = (event, element) => {
        
        event.preventDefault()
        setEditionMode(true)
        setNewBodily(element)

    }


    const editBodily = (event) => {
        
        event.preventDefault()
        
        updateBodily(newBodily)

        setEditionMode(false)

        setNewBodily({
            name: "",
            image:"",
            priceList:"",
            price:""
        })

    }


    const removeBodily = (event, element) => {
        
        event.preventDefault()
        deleteBodily(element)

    }



    return (
        <div>
            Bodily del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ editionMode ? 
                    (e) => editBodily(e) : 
                    (e) => sendForm(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newBodily.name}
                    onChange={(e) => { handdleChange(e) }}

                    image="image"
                    type="img"
                    value={newBodily.image}
                    onChange={(e) => { handdleChange(e) }}

                    priceList="Precio de lista"
                    type="price"
                    value={newBodily.priceList}
                    onChange={(e) => { handdleChange(e) }}

                    price="Precio"
                    type="price"
                    value={newBodily.price}
                    onChange={(e) => { handdleChange(e) }}
                />

                <button>
                    { editionMode ? "Editar Bodily" : "Crear Bodily" }
                </button>


            </form>


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


                           <button onClick={(evento) => {activateEditionMode(evento, bodily)}}>Editar</button>
                            <button onClick={(evento) => removeBodily(evento, bodily)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}