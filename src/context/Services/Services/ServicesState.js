import React, { useReducer } from 'react'
import ServicesContext from './ServicesContext'
import ServicesReducer from './ServicesReducer'

import axios from 'axios'

const ServicesState = (props) => {

    const initialState = {
        services: {
            bodily: [],
            facials: [],
            massage: [],
            giftcard: [],
            membership: [],
            packs: []
        },
        service: []
    }


    const [globalState, dispatch] = useReducer(ServicesReducer, initialState)


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

            const getServices = respuesta.data
            console.log(getServices)


            dispatch({
                type: "GET_SERVICES",
                payload: getServices
            })

        } catch (error) {

        }
    }

    const getService = async (singleService) => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services/${singleService}`)

            const getService = respuesta.data



            dispatch({
                type: "GET_SERVICE",
                payload: getService
            })

        } catch (error) {

        }
    }

    const updateServices = async (dataForm) => {

        const form = {
            ServicesId: dataForm._id,
            name: dataForm.name
        }

        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/services/update`, form)

        getServices()

    }




    const deleteServices = async (dataForm) => {

        const form = {
            servicesId: dataForm._id
        }

        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/services/delete`, form)

        console.log(res)

        getServices()

    }


    return (
        <ServicesContext.Provider
            value={{
                services: globalState.services,
                service: globalState.service,

                getService,
                getServices,
                createServices,
                updateServices,
                deleteServices
            }}
        >

            {props.children}

        </ServicesContext.Provider>
    )

}


export default ServicesState