
/* 																	*/
/* d3rings-actions.js   						*/
/* 																	*/

if (typeof require === "function") {
	var d3ringsActionsCourt = require('./d3rings-actions-court.js')
	var d3ringsActionsDebug = require('./d3rings-actions-debug.js')
	var d3ringsActionsLanes = require('./d3rings-actions-lanes.js')
	var d3ringsActionsParticles = require('./d3rings-actions-particles.js')
	var d3ringsActionsWhirls = require('./d3rings-actions-whirls.js')
}	


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3ringsActions = global.d3ringsActions || {})));
}(this, function (exports) { 'use strict';


// ____________________ merge_objects
function merge_objects(ctt1,ctt2){	
    var i, obj = {}
    for (i = 0; i < arguments.length; i++) {
        Object.assign(obj, arguments[i])
    }
    return obj;
}

var ActionTypes = merge_objects(
		d3ringsActionsCourt.ActionTypes,
		d3ringsActionsDebug.ActionTypes,
		d3ringsActionsLanes.ActionTypes,
		d3ringsActionsParticles.ActionTypes,
		d3ringsActionsWhirls.ActionTypes
	)
		
var ActionCreators = merge_objects(
		d3ringsActionsCourt.ActionCreators,
		d3ringsActionsDebug.ActionCreators, 
		d3ringsActionsLanes.ActionCreators, 
		d3ringsActionsParticles.ActionCreators,
		d3ringsActionsWhirls.ActionCreators
	)

exports.ActionTypes = ActionTypes;
exports.ActionCreators = ActionCreators;
}));
