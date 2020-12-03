const SUBMIT_CONTINUE_LOCATION = "ServiceLocation/SUBMIT_CONTINUE_LOCATION"

export const submitContinueLocation = ( serviceLocationDetail ) => ({
    type: SUBMIT_CONTINUE_LOCATION,
    serviceLocationDetail,
})

const initialState = {
    serviceLocationDetail: [],
}

export default function bookingRedux(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_CONTINUE_LOCATION:
            return {
                ...state,
                serviceLocationDetail: action.serviceLocationDetail,
            }
        default:
            return state;
    }
}

