import React, { useReducer } from 'react'
import MassageContext from './MassageContext'
import MassageReducer from './MassageReducer'

import axios from 'axios'

const MassageState = (props) => {

    const initialState = {
        massage: [
            { 
                id: 0,
                name: "Massage DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(MassageReducer, initialState)


    const createMassage = async (dataForm) => {
        try {
            
             await axios.post("http://localhost:3000/api/services/massage/create", dataForm)

            getMassage()

        } catch (error) {
            
        }


    }


    const getMassage = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services/massage`)

            const updatedMassage = respuesta.data
   


            dispatch({
                type: "GET_MASSAGE",
                payload: updatedMassage
            })

        } catch (error) {

        }
    }

    const updateMassage = async (dataForm) => {  

        const form = {
                massageId: dataForm._id,
            name: dataForm.name
        }

         await axios.post(`${process.env.REACT_APP_BASE_URL}/api/services/massage/update`, form)

         getMassage()
        
    }


    const deleteMassage = async (dataForm) => {

        const form = {
            massageId: dataForm._id
        }

        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/services/massage/delete`, form)


        
        getMassage()

    } 


    return (
        <MassageContext.Provider
            value={{
                massage: globalState.massage,
                
                getMassage,
                createMassage,
                updateMassage,
                deleteMassage
            }}
        >

            { props.children }            

        </MassageContext.Provider>
    )

}


export default MassageState