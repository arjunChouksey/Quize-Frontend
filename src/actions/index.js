import {
	CREATE_QUIZ,
	GIVE_QUIZ,
	USER_INPUT,
	STORE_OPTION,
	SET_LOADING_FALSE,
	SET_LOADING_TRUE,
	SET_QUIZ_ID,
	GET_USER_INFO,
} from "./types";
import User from "../api/User";

export const handleInput = (value) => {
	return {
		type: USER_INPUT,
		payload: value,
	};
};

export const createQuiz = () => {
	return {
		type: CREATE_QUIZ,
	};
};

export const giveQuiz = () => {
	return {
		type: GIVE_QUIZ,
	};
};

export const storeOption = (questionId, optionId) => {
	return {
		type: STORE_OPTION,
		payload: [questionId, optionId],
	};
};

export const postUserQuiz = (name, choice) => {
	return async (dispatch, getState) => {
		dispatch({
			type: SET_LOADING_TRUE,
		});
		try {
			const response = await User.post(
				"/post",
				{},
				{
					params: {
						name: name,
						choice: choice,
					},
				}
			);
			if (response.status === 201) {
				dispatch({
					type: SET_QUIZ_ID,
					payload: response.data.id,
				});
			}
		} catch (error) {
			throw error;
		}
		dispatch({
			type: SET_LOADING_FALSE,
		});
	};
};

export const getUserInfo = (id) => {
	return async (dispatch, getState) => {
		dispatch({
			type: SET_LOADING_TRUE,
		});
		dispatch({
			type: SET_QUIZ_ID,
			payload: id,
		});
		try {
			const response = await User.get("/get", {
				params: {
					id: id,
				},
			});
			if ((await response).status === 200) {
				dispatch({
					type: GET_USER_INFO,
					payload: response.data.user,
				});
			}
		} catch (error) {
			throw error;
		}
		dispatch({
			type: SET_LOADING_FALSE,
		});
	};
};

export const postScore = (score, id, userName) => {
	return async (dispatch, getState) => {
		dispatch({
			type: SET_LOADING_TRUE,
		});
		try {
			const response = await User.post(
				"/post-friend",
				{},
				{
					params: {
						id: id,
						name: userName,
						score: score,
					},
				}
			);
			if (response.status === 200) {
				await dispatch(getUserInfo(id));
			}
		} catch (error) {
			throw error;
		}
		dispatch({
			type: SET_LOADING_FALSE,
		});
	};
};
