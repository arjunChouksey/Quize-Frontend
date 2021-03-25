import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../actions/types";

const loadingReducer = (state = false, action) => {
	switch (action.type) {
		case SET_LOADING_TRUE: {
			return true;
		}

		case SET_LOADING_FALSE: {
			return false;
		}

		default:
			return state;
	}
};

export default loadingReducer;
