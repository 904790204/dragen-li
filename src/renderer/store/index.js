import {createStore,combineReducers} from 'redux'
import task from './task'
let reducer = combineReducers({
  task
})
let store = createStore(reducer)
export default store
