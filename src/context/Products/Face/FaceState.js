import React, { useReducer } from 'react'
import FaceContext from './FaceContext'
import FaceReducer from './FaceReducer'

import axios from 'axios'

const FaceState = (props) => {

    const initialState = {
        face: [
            { 
                id: 0,
                name: "Face DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(FaceReducer, initialState)


    const createFace = async (dataForm) => {
        try {
            
             await axios.post("http://localhost:3001/api/products/face/create", dataForm)

            getFace()

        } catch (error) {
            
        }


    }


    const getFace = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/face`)

            const updatedFace = respuesta.data
            console.log(updatedFace)


            dispatch({
                type: "GET_FACE",
                payload: updatedFace
            })

        } catch (error) {

        }
    }

    const updateFace = async (dataForm) => {  

        const form = {
            faceId: dataForm._id,
            name: dataForm.name
        }

         await axios.post("http://localhost:3001/api/products/face/update", form)

         getFace()
        
    }


    const deleteFace = async (dataForm) => {

        const form = {
            faceId: dataForm._id
        }

        const res = await axios.post("http://localhost:3001/api/products/face/delete", form)

        console.log(res)
        
        getFace()

    } 


    return (
        <FaceContext.Provider
            value={{
                face: globalState.face,
                
                getFace,
                createFace,
                updateFace,
                deleteFace
            }}
        >

            { props.children }            

        </FaceContext.Provider>
    )

}


export default FaceState