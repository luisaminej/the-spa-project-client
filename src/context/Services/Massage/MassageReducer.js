

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_MASSAGE":
            return {
                ...globalState,
                massage: action.payload
            }


        
        default:
            return globalState

    }
}