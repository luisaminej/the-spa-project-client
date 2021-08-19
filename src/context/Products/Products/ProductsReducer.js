

export default (globalState, action) => {

    switch (action.type) {

        case "GET_PRODUCTS":
            return {
                ...globalState,
                products: action.payload
            }
        case "GET_PRODUCT":
            return {
                ...globalState,
                product: action.payload
            }



        default:
            return globalState

    }
}