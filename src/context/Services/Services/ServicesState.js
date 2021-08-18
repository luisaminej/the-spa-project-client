import React, { useReducer } from 'react'
import ServicesContext from './ServicesContext'
import ServicesReducer from './ServicesReducer'

import axios from 'axios'

const ServicesState = (props) => {

    const initialState = {
        services: {
            bodily:[],
            facials:[],
            massage:[],
            giftcard:[],
            membership:[],
            packs:[]
        }
    }


    const [ globalState, dispatch ] = useReducer(ServicesReducer, initialState)


    const createServices = async (dataForm) => {
        try {
            
             await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/services/create`, dataForm)

            getServices()

        } catch (error) {
            
        }


    }


    const getServices = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services`)

            const updatedServices = respuesta.data
            console.log(updatedServices)


            dispatch({
                type: "GET_SERVICES",
                payload: updatedServices
            })

        } catch (error) {

        }
    }

    const updateServices = async (dataForm) => {  

        const form = {
            servicesId: dataForm._id,
            name: dataForm.name
        }

         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/services`, form)

         getServices()
        
    }


    const deleteServices = async (dataForm) => {

        const form = {
            servicesId: dataForm._id
        }

        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/services`, form)

        console.log(res)
        
        getServices()

    } 


    return (
        <ServicesContext.Provider
            value={{
                services: globalState.services,
                
                getServices,
                createServices,
                updateServices,
                deleteServices
            }}
        >

            { props.children }            

        </ServicesContext.Provider>
    )

}


export default ServicesState