import React, { useReducer } from 'react'
import FacialsContext from './FacialsContext'
import FacialsReducer from './FacialsReducer'

import axios from 'axios'

const FacialsState = (props) => {

    const initialState = {
        facials: [
            { 
                id: 0,
                name: "Facials DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(FacialsReducer, initialState)


    const createFacials = async (dataForm) => {
        try {
            
             await axios.post("http://localhost:3001/api/services/facials/create", dataForm)

            getFacials()

        } catch (error) {
            
        }


    }


    const getFacials = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/services/facials`)

            const updatedFacials = respuesta.data
            console.log(updatedFacials)


            dispatch({
                type: "GET_FACIALS",
                payload: updatedFacials
            })

        } catch (error) {

        }
    }

    const updateFacials = async (dataForm) => {  

        const form = {
            facialsId: dataForm._id,
            name: dataForm.name
        }

         await axios.post("http://localhost:3001/api/services/facials/update", form)

         getFacials()
        
    }


    const deleteFacials = async (dataForm) => {

        const form = {
            facialsId: dataForm._id
        }

        const res = await axios.post("http://localhost:3001/api/services/facials/delete", form)

        console.log(res)
        
        getFacials()

    } 


    return (
        <FacialsContext.Provider
            value={{
                facials: globalState.facials,
                
                getFacials,
                createFacials,
                updateFacials,
                deleteFacials
            }}
        >

            { props.children }            

        </FacialsContext.Provider>
    )

}


export default FacialsState