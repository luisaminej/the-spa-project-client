import React, { useReducer } from 'react'
import BodilyContext from './BodilyContext'
import BodilyReducer from './BodilyReducer'

import axios from 'axios'

const BodilyState = (props) => {

    const initialState = {
        bodily: [
            { 
                id: 0,
                name: "Bodily DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(BodilyReducer, initialState)


    const createBodily = async (dataForm) => {
        try {
            
             await axios.post(`${process.env.REACT_APP_BASE_URL}/api/services/bodily/create`, dataForm)

            getBodily()

        } catch (error) {
            
        }


    }


    const getBodily = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/services/bodily`)

            const updatedBodily = respuesta.data
            console.log(updatedBodily)


            dispatch({
                type: "GET_BODILY",
                payload: updatedBodily
            })

        } catch (error) {

        }
    }

    const updateBodily = async (dataForm) => {  

        const form = {
            bodilyId: dataForm._id,
            name: dataForm.name
        }

         await axios.post(`${process.env.REACT_APP_BASE_URL}/api/services/bodily/update`, form)

         getBodily()
        
    }


    const deleteBodily = async (dataForm) => {

        const form = {
            bodilyId: dataForm._id
        }

        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/services/bodily/delete`, form)

        console.log(res)
        
        getBodily()

    } 


    return (
        <BodilyContext.Provider
            value={{
                bodily: globalState.bodily,
                
                getBodily,
                createBodily,
                updateBodily,
                deleteBodily
            }}
        >

            { props.children }            

        </BodilyContext.Provider>
    )

}


export default BodilyState