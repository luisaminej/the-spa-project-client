import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'

import axiosClient from './../config/axios'

const UserState = (props) => {

    const initialState = {
        user: {
            username: "",
            email: ""
        },
        authStatus: null,
        token: null
    }

    const [ globalState, dispatch ] = useReducer(UserReducer, initialState)

    const registerUser = async (dataForm) => {

        try {
            const res = await axiosClient.post("/api/users/create", dataForm)

            dispatch({
                type: "REGISTER_SUCCESS",
                payload: res.data
            })    

        } catch (error) {


               
        }
        
    }

    const verifyingToken = async () => {

        const token = localStorage.getItem("token")

       
        if(token) {
            axiosClient.defaults.headers.common['x-auth-token'] = token
        } else {
            delete axiosClient.defaults.headers.common['x-auth-token']
        }


     
        try {
            
            const res = await axiosClient.get('/api/auth')


            dispatch({
                type: "GET_USER_INFO",
                payload: res.data.userFound
            })
            
        } catch (error) {
            
        }

    }

    const loginUser = async (dataForm) => {

        const form = {
            email: dataForm.email,
            password: dataForm.password
        }

        try {
            const res = await axiosClient.post('/api/auth/login', form)


            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data
            })

        } catch(e) {

        }

    }

    const logOut = async () => {

        dispatch({
            type: "LOGOUT_USER"
        })

    }





    return (
        <UserContext.Provider value={{
            user: globalState.user,
            authStatus: globalState.authStatus,
            token: globalState.token,
            registerUser,
            verifyingToken,
            loginUser,
            logOut
        }}>

            {props.children}

        </UserContext.Provider>
    )


}


export default UserState