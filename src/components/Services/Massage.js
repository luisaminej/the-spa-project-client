
import React, {useState, useEffect, useContext} from 'react'

import MassageContext from '../../context/Services/Massage/MassageContext'

export default function Massage() {

    const context = useContext(MassageContext)

    const { 
        massage, 
        getMassage,
        createMassage,
        updateMassage,
        deleteMassage} = context

  

    const [ newMassage, setNewMassage ] = useState({
        name: "",
        image:"",
        priceList:"",
        price:""

    })

    const [ editionMode, setEditionMode ] = useState(false)


    useEffect(() => {
        
        getMassage()

    },[])



    const handdleChange = (event) => {
        
        event.preventDefault()

        setNewMassage({
            ...newMassage,
            [event.target.name]: event.target.value
        })


    }


    const sendForm = (event) => {
        event.preventDefault()

        createMassage(newMassage)

        setNewMassage({
            name: "",
            image:"",
            priceList:"",
            price:""
        })
    }


    const activateEditionMode = (event, element) => {
        
        event.preventDefault()
        setEditionMode(true)
        setNewMassage(element)

    }


    const editMassage = (event) => {
        
        event.preventDefault()
        
        updateMassage(newMassage)

        setEditionMode(false)

        setNewMassage({
            name: "",
            image:"",
            priceList:"",
            price:""
        })

    }


    const removeMassage = (event, element) => {
        
        event.preventDefault()
        deleteMassage(element)

    }



    return (
        <div>
            Massage del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ editionMode ? 
                    (e) => editMassage(e) : 
                    (e) => sendForm(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newMassage.name}
                    onChange={(e) => { handdleChange(e) }}

                    image="image"
                    type="img"
                    value={newMassage.image}
                    onChange={(e) => { handdleChange(e) }}

                    priceList="Precio de lista"
                    type="price"
                    value={newMassage.priceList}
                    onChange={(e) => { handdleChange(e) }}

                    price="Precio"
                    type="price"
                    value={newMassage.price}
                    onChange={(e) => { handdleChange(e) }}
                />

                <button>
                    { editionMode ? "Editar Massage" : "Crear Massage" }
                </button>


            </form>


            {
                massage.length === 0 ?
                "No hay servicios de masajes"
                :
                massage.map((massage,i) => {
                    return(
                        <div key={i}>

                            <p>{massage.name}</p>
                            <p>{massage._id}</p>
                            <p>{massage.image}</p>
                            <p>{massage.priceList}</p>
                            <p>{massage.price}</p>


                           <button onClick={(evento) => {activateEditionMode(evento, massage)}}>Editar</button>
                            <button onClick={(evento) => removeMassage(evento, massage)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}