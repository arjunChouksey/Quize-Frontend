import React, { useState } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { fetchQuestions } from "./questions";
import { submitQuizButton } from "../../styles";
import { postUserQuiz, postScore } from "../../actions";
import history from "../../history";

const scoreCalculator = (actualChoice, userChoice) => {
	let score = 0;
	for (let i = 0; i < actualChoice.length; i++) {
		if (actualChoice[i] === userChoice[i]) {
			score += 20;
		}
	}
	return score;
};

const Quiz = (props) => {
	if (props.name === "") {
		history.replace("/");
	}

	const [validSubmit, setValidSubmit] = useState(true);
	const {
		name,
		isScoreCal,
		postUserQuiz,
		choice,
		idx,
		submitLoader,
		quizId,
		userQuizInfo,
		postScore,
	} = props;

	const questions = fetchQuestions(
		userQuizInfo ? userQuizInfo.name : null,
		isScoreCal
	);

	const handleSubmitQuiz = () => {
		if (idx === -1) {
			setValidSubmit(true);
			if (!isScoreCal) {
				postUserQuiz(name, choice);
				history.replace(`/shareQuiz`);
			} else {
				const score = scoreCalculator(choice, userQuizInfo.choice);
				postScore(score, quizId, name);
				history.replace(`/quiz/${quizId}`);
			}
		} else {
			setValidSubmit(false);
		}
	};

	const renderWarning = () => {
		if (!validSubmit) {
			return <div className="ui red message">Please select all options</div>;
		}
		return null;
	};

	const questionsList = questions.map((question) => {
		return (
			<div
				style={{ margin: "50px 0px" }}
				key={question.id}
				className="ui container"
			>
				<QuestionCard question={question} />
			</div>
		);
	});

	return (
		<div className="ui container">
			{questionsList}
			{renderWarning()}
			<button
				style={submitQuizButton}
				className={`ui violet ${submitLoader ? `loading` : ``} button`}
				onClick={handleSubmitQuiz}
			>
				Submit Quiz
			</button>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	let idx = state.choices.findIndex((ele) => {
		return ele === 0;
	});
	return {
		name: state.input.userName,
		isScoreCal: state.isScoreCal,
		choice: state.choices,
		idx: idx,
		submitLoader: state.quizSubmitLoading,
		quizId: state.quizId,
		userQuizInfo: state.userQuizInfo.info,
	};
};

export default connect(mapStateToProps, {
	postUserQuiz,
	postScore,
})(Quiz);
