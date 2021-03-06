
/* 														*/
/*    d3rings-reducer.js      */
/* 														*/

if (typeof require === "function") {
	var d3ringsReducerConfig = require('./d3rings-reducer-config.js')
	var d3ringsReducerCourt = require('./d3rings-reducer-court.js')
	var d3ringsReducerDebug = require('./d3rings-reducer-debug.js')
	var d3ringsReducerLanes = require('./d3rings-reducer-lanes.js')
	var d3ringsReducerParticles = require('./d3rings-reducer-particles.js')
	var d3ringsReducerWhirls = require('./d3rings-reducer-whirls.js')
	// var d3ringsReducerRangs = require('./d3rings-reducer-rangs.js')
	// var d3ringsReducerRings = require('./d3rings-reducer-rings.js')
}
	
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3ringsReducer = global.d3ringsReducer || {})));
}(this, function (exports) { 'use strict';


// _____________ adapted from redux combineReducers	
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers)
  var finalReducers = {}
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  var finalReducerKeys = Object.keys(finalReducers)

  return function combination(state = {}, action) {
    var hasChanged = false
    var nextState = {}
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i]
      var reducer = finalReducers[key]
      var previousStateForKey = state[key]
      var nextStateForKey = reducer(previousStateForKey, action)
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action)
        throw new Error(errorMessage)
      }
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    return hasChanged ? nextState : state
  }
}


// _____________ combined reducer
var reducer = combineReducers({
		reducerConfig: d3ringsReducerConfig.reducerConfig,
		reducerCourt: d3ringsReducerCourt.reducerCourt,
		reducerDebug: d3ringsReducerDebug.reducerDebug,
		reducerLanes: d3ringsReducerLanes.reducerLanes,
		reducerParticles: d3ringsReducerParticles.reducerParticles,
		reducerWhirls: d3ringsReducerWhirls.reducer,
		// reducerRangs: d3ringsReducerRangs.reducer,
		// reducerRings: d3ringsReducerRings.reducer,
})


var r = reducer()

exports.reducer = reducer;
}));
