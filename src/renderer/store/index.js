import {createStore,combineReducers} from 'redux'
import api from './api'
let reducer = combineReducers({
  api
})
let store = createStore(reducer)
export default store
