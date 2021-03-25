import { USER_INPUT } from "../actions/types";

const INITIAL_INPUT_STATE = {
	userName: "",
};

const inputReducer = (state = INITIAL_INPUT_STATE, action) => {
	switch (action.type) {
		case USER_INPUT: {
			return { ...state, userName: action.payload };
		}

		default: {
			return state;
		}
	}
};

export default inputReducer;
