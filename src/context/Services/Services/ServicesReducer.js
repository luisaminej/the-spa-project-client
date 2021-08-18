

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_SERVICES":
            return {
                ...globalState,
                services: action.payload
            }


        
        default:
            return globalState

    }
}