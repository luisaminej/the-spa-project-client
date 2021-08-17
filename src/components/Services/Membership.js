
import React, {useState, useEffect, useContext} from 'react'

import MembershipContext from '../../context/Services/Membership/MembershipContext'

export default function Membership() {

    const context = useContext(MembershipContext)

    const { 
        membership, 
        getMembership,
        createMembership,
        updateMembership,
        deleteMembership} = context

  

    const [ newMembership, setNewMembership ] = useState({
        name: "",
        image:"",
        priceList:"",
        price:""

    })

    const [ editionMode, setEditionMode ] = useState(false)


    useEffect(() => {
        
        getMembership()

    },[])



    const handdleChange = (event) => {
        
        event.preventDefault()

        setNewMembership({
            ...newMembership,
            [event.target.name]: event.target.value
        })


    }


    const sendForm = (event) => {
        event.preventDefault()

        createMembership(newMembership)

        setNewMembership({
            name: "",
            image:"",
            priceList:"",
            price:""
        })
    }


    const activateEditionMode = (event, element) => {
        
        event.preventDefault()
        setEditionMode(true)
        setNewMembership(element)

    }


    const editMembership = (event) => {
        
        event.preventDefault()
        
        updateMembership(newMembership)

        setEditionMode(false)

        setNewMembership({
            name: "",
            image:"",
            priceList:"",
            price:""
        })

    }


    const removeMembership = (event, element) => {
        
        event.preventDefault()
        deleteMembership(element)

    }



    return (
        <div>
            Membership del backend \o/
            
            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ editionMode ? 
                    (e) => editMembership(e) : 
                    (e) => sendForm(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newMembership.name}
                    onChange={(e) => { handdleChange(e) }}

                    image="image"
                    type="img"
                    value={newMembership.image}
                    onChange={(e) => { handdleChange(e) }}

                    priceList="Precio de lista"
                    type="price"
                    value={newMembership.priceList}
                    onChange={(e) => { handdleChange(e) }}

                    price="Precio"
                    type="price"
                    value={newMembership.price}
                    onChange={(e) => { handdleChange(e) }}
                />

                <button>
                    { editionMode ? "Editar Membership" : "Crear Membership" }
                </button>


            </form>


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


                           <button onClick={(evento) => {activateEditionMode(evento, membership)}}>Editar</button>
                            <button onClick={(evento) => removeMembership(evento, membership)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}