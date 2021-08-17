import React, { useReducer } from 'react'
import GiftcardContext from './GiftcardContext'
import GiftcardReducer from './GiftcardReducer'

import axios from 'axios'

const GiftcardState = (props) => {

    const initialState = {
        giftcard: [
            { 
                id: 0,
                name: "Giftcard DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(GiftcardReducer, initialState)


    const createGiftcard = async (dataForm) => {
        try {
            
             await axios.post("http://localhost:3001/api/services/giftcard/create", dataForm)

            getGiftcard()

        } catch (error) {
            
        }


    }


    const getGiftcard = async () => {

        try {

            const respuesta = await axios.get("http://localhost:3001/api/services/giftcard")

            const updatedGiftcard = respuesta.data
            console.log(updatedGiftcard)


            dispatch({
                type: "GET_GIFTCARD",
                payload: updatedGiftcard
            })

        } catch (error) {

        }
    }

    const updateGiftcard = async (dataForm) => {  

        const form = {
            giftcardId: dataForm._id,
            name: dataForm.name
        }

         await axios.post("http://localhost:3001/api/services/giftcard/update", form)

         getGiftcard()
        
    }


    const deleteGiftcard = async (dataForm) => {

        const form = {
            giftcardId: dataForm._id
        }

        const res = await axios.post("http://localhost:3001/api/services/giftcard/delete", form)

        console.log(res)
        
        getGiftcard()

    } 


    return (
        <GiftcardContext.Provider
            value={{
                giftcard: globalState.giftcard,
                
                getGiftcard,
                createGiftcard,
                updateGiftcard,
                deleteGiftcard
            }}
        >

            { props.children }            

        </GiftcardContext.Provider>
    )

}


export default GiftcardState