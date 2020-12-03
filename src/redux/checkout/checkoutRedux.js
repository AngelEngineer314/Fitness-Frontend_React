const SUBMIT_CARD_SAVE = "AddCardDialog/SUBMIT_CARD_SAVE"

export const submitCardSave = ( cardDetail ) => ({
    type: SUBMIT_CARD_SAVE,
    cardDetail,
})

const initialState = {
    cardDetail: [],
}

export default function checkoutReducer(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_CARD_SAVE:
            return {
                ...state,
                cardDetail: action.cardDetail,
            }
        default:
            return state;
    }
}

