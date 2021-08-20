import React, {useContext, useEffect, useState} from "react";

import { 
    Route, 
    Redirect } from "react-router-dom";

import UserContext from "../context/UserContext";



export default function PrivateRoute ( { component: Component, ...props} ){

    const userCtx = useContext(UserContext)

    const [loading, setLoading] = useState(true)

    const { 
        authStatus,
        verifyingToken } = userCtx


    useEffect( async () => {

        const verifyingAuthStatus = async () => {
            await verifyingToken()
            return setLoading(false)
        }

        verifyingAuthStatus()
        
        
    } , [ authStatus ])



    return(
    <Route 
        {...props}
        render={ ( ) => {

            if(loading) return null

            return authStatus ?
            (<Component {...props} />)
            :
            (<Redirect to="/registrarse" />)

        }}
    />)


}