/*
 * Reducers specify how the application's state changes in 
 * response to actions sent to the store. 
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})