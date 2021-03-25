import { CREATE_QUIZ, GIVE_QUIZ } from "../actions/types";

const decideReducer = (state = false, action) => {
	switch (action.type) {
		case CREATE_QUIZ: {
			return false;
		}

		case GIVE_QUIZ: {
			return true;
		}

		default:
			return state;
	}
};

export default decideReducer;
