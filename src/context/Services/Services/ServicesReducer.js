

export default (globalState, action) => {

    switch (action.type) {

        case "GET_SERVICES":
            return {
                ...globalState,
                services: action.payload
            }
        case "GET_SERVICE":
            return {
                ...globalState,
                service: action.payload
            }


        default:
            return globalState

    }
}