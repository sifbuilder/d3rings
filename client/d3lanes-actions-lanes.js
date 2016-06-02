/* 																	*/
/* d3lanes-actions.js   						*/
/* 																	*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3lanesActionsLanes = global.d3lanesActionsLanes || {})));
}(this, function (exports) { 'use strict';

// ____________________ keyMirror
// https://github.com/STRML/keyMirror
var keyMirror = function(obj, prefix) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = prefix + key;
    }
  }
  return ret;
}


var cttsLanes = {
	DELETE_LANE: '',
	SET_LANE: '',
	SET_LANES: '',
	SET_MESSAGES: '',
	SET_RECORDS: '',
	SET_RECORDS_COLLECTION: '',
	SET_RECORDS_FETCHED: '',
	UPDATE_MESSAGES: '',
	WALK_DOWN_RECORDS: '',
	WALK_UP_RECORDS: '',
}

var ActionTypes = keyMirror(cttsLanes, '')

// ____________________ actions LANES
var ActionCreators = {
	decreaseCursorLow() {
    return {
        type: ActionTypes.DECREASE_CURSOR_LOW,
		}
  },
	decreaseCursorHigh() {
    return {
        type: ActionTypes.DECREASE_CURSOR_HIGH,
		}
  },
	deleteLane(lane) {
    return {
        type: ActionTypes.DELETE_LANE,
        lane: lane,
		}
  },
	increaseCursorLow() {		// INCREASE_CURSOR_LOW
    return {
        type: ActionTypes.INCREASE_CURSOR_LOW,	
		}
  },
	increaseCursorHigh() {
    return {
        type: ActionTypes.INCREASE_CURSOR_HIGH,
		}
  },
	setRecordsFetched(areRecordsFetched) {
    return {
        type: ActionTypes.SET_RECORDS_FETCHED,
        areRecordsFetched: areRecordsFetched,
    }
  },
	setRecords(argObj) {	// SET_RECORDS
    return {
        type: ActionTypes.SET_RECORDS,
        itemSpan: argObj.itemSpan,
        mode: argObj.currentMode,
    }
  },
	setRecordsCollection(recordsCollection) {
    return {
        type: ActionTypes.SET_RECORDS_COLLECTION,
        recordsCollection: recordsCollection,
    }
  },
	setLane(lane) {
    return {
        type: ActionTypes.SET_LANE,
        lane: lane,
		}
  },
	setLanes(lanes) {
    return {
        type: ActionTypes.SET_LANES,
        lanes: lanes,
		}
  },
	setMessages(messages) {
    return {
        type: ActionTypes.SET_MESSAGES,
        messages: messages,
		}
  },
	updateMessages(messages) {
    return {
       type: ActionTypes.UPDATE_MESSAGES,
       cursorLow: cursorLow,
       cursorHigh: cursorHigh,
		}
  },
	walkDownRecords(itemSpan, mode) {	// WALK_DOWN_RECORDS
    return {
        type: ActionTypes.WALK_DOWN_RECORDS,
        itemSpan: itemSpan,
        mode: mode,
    }
  },
	walkUpRecords(itemSpan, mode) {	// WALK_UP_RECORDS
    return {
        type: ActionTypes.WALK_UP_RECORDS,
        itemSpan: itemSpan,
        mode: mode,
    }
  },
}

exports.ActionTypes = ActionTypes
exports.ActionCreators = ActionCreators
}));