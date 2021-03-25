import { GET_USER_INFO } from "../actions/types";

const INITIAL_STATE = {
	info: null,
};

const getUserInfoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_USER_INFO: {
			return { ...state, info: action.payload };
		}

		default:
			return state;
	}
};

export default getUserInfoReducer;
