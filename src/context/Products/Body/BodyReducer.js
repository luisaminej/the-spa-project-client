

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_BODY":
            return {
                ...globalState,
                body: action.payload
            }


        
        default:
            return globalState

    }
}