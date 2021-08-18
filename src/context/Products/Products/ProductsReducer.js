

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_PRODUCTS":
            return {
                ...globalState,
                products: action.payload
            }


        
        default:
            return globalState

    }
}