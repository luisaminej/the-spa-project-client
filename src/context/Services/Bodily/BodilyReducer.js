

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_BODILY":
            return {
                ...globalState,
                bodily: action.payload
            }


        
        default:
            return globalState

    }
}