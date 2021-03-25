import { STORE_OPTION } from "../actions/types";

const INITIAL_STATE = [0, 0, 0, 0, 0];

const storeOptionsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STORE_OPTION: {
			const [questionId, optionId] = action.payload;
			let newState = [...state];
			newState[questionId] = optionId;
			return newState;
		}
		default:
			return state;
	}
};
export default storeOptionsReducer;
