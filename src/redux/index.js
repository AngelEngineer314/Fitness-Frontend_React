import { combineReducers } from "redux"
import authReducer from "./auth"
import checkoutRedux from "./checkout/checkoutRedux"
import bookingRedux from "./booking/bookingRedux"

const rootReducer = combineReducers({
  checkoutRedux: checkoutRedux,
  bookingRedux: bookingRedux,
})

export default rootReducer
