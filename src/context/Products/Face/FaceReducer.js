

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_FACE":
            return {
                ...globalState,
                face: action.payload
            }


        
        default:
            return globalState

    }
}