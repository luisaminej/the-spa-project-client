

export default (globalState, action) => {

    switch(action.type) {
        
        case "GET_PACKS":
            return {
                ...globalState,
                packs: action.payload
            }


        
        default:
            return globalState

    }
}