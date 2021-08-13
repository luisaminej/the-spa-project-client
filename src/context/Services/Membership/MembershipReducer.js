

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_MEMBERSHIP":
            return {
                ...globalState,
                membership: action.payload
            }


        
        default:
            return globalState

    }
}