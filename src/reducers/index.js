import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import decideReducer from "./decideReducer";
import storeOptionsReducer from "./storeOptionsReducer";
import loadingReducer from "./loadingReducer";
import setQuizId from "./setQuizId";
import getUserInfoReducer from "./getUserInfoReducer";

export default combineReducers({
	input: inputReducer,
	isScoreCal: decideReducer,
	choices: storeOptionsReducer,
	quizSubmitLoading: loadingReducer,
	quizId: setQuizId,
	userQuizInfo: getUserInfoReducer,
});
