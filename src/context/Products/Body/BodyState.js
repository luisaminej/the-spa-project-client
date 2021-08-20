import React, { useReducer } from 'react'
import BodyContext from './BodyContext'
import BodyReducer from './BodyReducer'

import axios from 'axios'

const BodyState = (props) => {

    const initialState = {
        body: [
            { 
                id: 0,
                name: "Body DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(BodyReducer, initialState)


    const createBody = async (dataForm) => {
        try {
            
             await axios.post(`${process.env.REACT_APP_BASE_URL}/api/products/body/create`, dataForm)

            getBody()

        } catch (error) {
            
        }


    }


    const getBody = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/body`)

            const updatedBody = respuesta.data
        


            dispatch({
                type: "GET_BODY",
                payload: updatedBody
            })

        } catch (error) {

        }
    }

    const updateBody = async (dataForm) => {  

        const form = {
            bodyId: dataForm._id,
            name: dataForm.name
        }

         await axios.post(`${process.env.REACT_APP_BASE_URL}/api/products/body/update`, form)

         getBody()
        
    }


    const deleteBody = async (dataForm) => {

        const form = {
            bodyId: dataForm._id
        }

        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/products/body/delete`, form)

        
        getBody()

    } 


    return (
        <BodyContext.Provider
            value={{
                body: globalState.body,
                
                getBody,
                createBody,
                updateBody,
                deleteBody
            }}
        >

            { props.children }            

        </BodyContext.Provider>
    )

}


export default BodyState