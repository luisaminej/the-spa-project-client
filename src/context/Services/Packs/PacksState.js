import React, { useReducer } from 'react'
import PacksContext from './PacksContext'
import PacksReducer from './PacksReducer'

import axios from 'axios'

const PacksState = (props) => {

    const initialState = {
        packs: [
            { 
                id: 0,
                name: "Packs DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(PacksReducer, initialState)


    const createPacks = async (dataForm) => {
        try {
            
             await axios.post("http://localhost:3001/api/services/packs/create", dataForm)

            getPacks()

        } catch (error) {
            
        }


    }


    const getPacks = async () => {

        try {

            const respuesta = await axios.get("http://localhost:3001/api/services/packs")

            const updatedPacks = respuesta.data
            console.log(updatedPacks)


            dispatch({
                type: "GET_PACKS",
                payload: updatedPacks
            })

        } catch (error) {

        }
    }

    const updatePacks = async (dataForm) => {  

        const form = {
            PacksId: dataForm._id,
            name: dataForm.name
        }

         await axios.post("http://localhost:3001/api/services/packs/update", form)

         getPacks()
        
    }


    const deletePacks = async (dataForm) => {

        const form = {
            packsId: dataForm._id
        }

        const res = await axios.post("http://localhost:3001/api/services/packs/delete", form)

        console.log(res)
        
        getPacks()

    } 


    return (
        <PacksContext.Provider
            value={{
                packs: globalState.packs,
                
                getPacks,
                createPacks,
                updatePacks,
                deletePacks
            }}
        >

            { props.children }            

        </PacksContext.Provider>
    )

}


export default PacksState