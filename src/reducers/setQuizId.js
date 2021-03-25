import { SET_QUIZ_ID } from "../actions/types";

const setQuizId = (state = null, action) => {
	switch (action.type) {
		case SET_QUIZ_ID: {
			return action.payload;
		}
		default:
			return state;
	}
};

export default setQuizId;
