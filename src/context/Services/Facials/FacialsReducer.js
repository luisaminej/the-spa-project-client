

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_FACIALS":
            return {
                ...globalState,
                facials: action.payload
            }


        
        default:
            return globalState

    }
}