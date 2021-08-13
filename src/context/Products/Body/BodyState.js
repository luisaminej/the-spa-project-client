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
            
             await axios.post("http://localhost:3000/api/body/create", dataForm)

            getBody()

        } catch (error) {
            
        }


    }


    const getBody = async () => {

        try {

            const respuesta = await axios.get("http://localhost:3000/api/body")

            const updatedBody = respuesta.data
            console.log(updatedBody)


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

         await axios.post("http://localhost:3000/api/body/update", form)

         getBody()
        
    }


    const deleteBody = async (dataForm) => {

        const form = {
            bodyId: dataForm._id
        }

        const res = await axios.post("http://localhost:3000/api/body/delete", form)

        console.log(res)
        
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