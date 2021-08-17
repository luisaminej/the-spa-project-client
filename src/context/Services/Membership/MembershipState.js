import React, { useReducer } from 'react'
import MembershipContext from './MembershipContext'
import MembershipReducer from './MembershipReducer'

import axios from 'axios'

const MembershipState = (props) => {

    const initialState = {
        membership: [
            { 
                id: 0,
                name: "Membership DESDE GLOBAL"
            }
        ]
    }


    const [ globalState, dispatch ] = useReducer(MembershipReducer, initialState)


    const createMembership = async (dataForm) => {
        try {
            
             await axios.post("http://localhost:3001/api/services/membership/create", dataForm)

            getMembership()

        } catch (error) {
            
        }


    }


    const getMembership = async () => {

        try {

            const respuesta = await axios.get("http://localhost:3001/api/services/membership")

            const updatedMembership = respuesta.data
            console.log(updatedMembership)


            dispatch({
                type: "GET_MEMBERSHIP",
                payload: updatedMembership
            })

        } catch (error) {

        }
    }

    const updateMembership = async (dataForm) => {  

        const form = {
            membershipId: dataForm._id,
            name: dataForm.name
        }

         await axios.post("http://localhost:3001/api/services/membership/update", form)

         getMembership()
        
    }


    const deleteMembership = async (dataForm) => {

        const form = {
            membershipId: dataForm._id
        }

        const res = await axios.post("http://localhost:3001/api/services/membership/delete", form)

        console.log(res)
        
        getMembership()

    } 


    return (
        <MembershipContext.Provider
            value={{
                membership: globalState.membership,
                
                getMembership,
                createMembership,
                updateMembership,
                deleteMembership
            }}
        >

            { props.children }            

        </MembershipContext.Provider>
    )

}


export default MembershipState