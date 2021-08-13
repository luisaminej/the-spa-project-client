

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_GIFTCARD":
            return {
                ...globalState,
                giftcard: action.payload
            }


        
        default:
            return globalState

    }
}