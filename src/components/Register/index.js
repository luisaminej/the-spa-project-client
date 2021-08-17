// Register/index.js

import React, { useState, useContext } from 'react'

import UserContext from './../../context/UserContext'

export default function Register() {

    const userCtx = useContext(UserContext)

    const { 
        user,
        registerUser, 
        verifyingToken
    } = userCtx

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    
    const handleChange = (event) => {

        event.preventDefault()

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        registerUser(data)
    }



    return (
        <>
            <div className="min-h-screen bg-green-dark flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-pink-dark">
                                Crear cuenta
                            </h2>
                        </div>

                        <div className="mt-8">

                            <div className="mt-6">
                                <form className="space-y-6" onSubmit={(e) => { sendData(e) }}>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white">
                                            Nombre de usuario
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                                id="username" 
                                                name="username" 
                                                type="text" 
                                                required 
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                                onChange={(e) => { handleChange(e) }}
                                                />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                                id="email" 
                                                name="email" 
                                                type="email" 
                                                autoComplete="email" 
                                                required 
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-white">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                                id="password" 
                                                name="password" 
                                                type="password" 
                                                required 
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-green-dark focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>                                    

                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-dark hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Registrarme
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <button onClick={() => { verifyingToken() }}>Verificar Token</button>

                            <p>Datos del usuario: {user.email} - {user.username}</p>

                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <img className="absolute inset-0 h-full w-full object-cover" src="http://www.playasmexico.mx/IMG/arton11793.jpg" alt="" />
                </div>
            </div>

        </>
    )
}