import React, { useReducer } from 'react'
import ProductsContext from './ProductsContext'
import ProductsReducer from './ProductsReducer'

import axios from 'axios'

const ProductsState = (props) => {

    const initialState = {
        products: {
            body:[],
            face:[]
        },
        product: []
    }


    const [ globalState, dispatch ] = useReducer(ProductsReducer, initialState)


    const createProducts = async (dataForm) => {
        try {
            
             await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/create`, dataForm)

            getProducts()

        } catch (error) {
            
        }


    }


    const getProducts = async () => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`)

            const updatedProducts = respuesta.data
            console.log(updatedProducts)


            dispatch({
                type: "GET_PRODUCTS",
                payload: updatedProducts
            })

        } catch (error) {

        }
    }

    const getProduct = async (singleProduct) => {

        try {

            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/${singleProduct}`)

            const getProduct = respuesta.data
           


            dispatch({
                type: "GET_PRODUCT",
                payload: getProduct
            })

        } catch (error) {

        }
    }

    const updateProducts = async (dataForm) => {  

        const form = {
            productsId: dataForm._id,
            name: dataForm.name
        }

         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/update`, form)

         getProducts()
        
    }


    

    const deleteProducts = async (dataForm) => {

        const form = {
            productsId: dataForm._id
        }

        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/delete`, form)

        console.log(res)
        
        getProducts()

    } 


    return (
        <ProductsContext.Provider
            value={{
                products: globalState.products,
                product: globalState.product,
                
                getProduct,
                getProducts,
                createProducts,
                updateProducts,
                deleteProducts
            }}
        >

            { props.children }            

        </ProductsContext.Provider>
    )

}


export default ProductsState