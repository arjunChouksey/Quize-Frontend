import React, { useEffect } from "react";
import { connect } from "react-redux";
import Input from "../Input";
import { getUserInfo, giveQuiz } from "../../actions";
import { Link } from "react-router-dom";

const GiveQuiz = (props) => {
	const { id } = props.match.params;
	const { getUserInfo, giveQuiz, userInfo } = props;
	useEffect(() => {
		getUserInfo(id);
	}, [id, getUserInfo]);

	useEffect(() => {
		giveQuiz();
	}, [giveQuiz]);

	const renderList = () => {
		if (userInfo) {
			const list = userInfo.friends.map((f) => {
				return (
					<div key={f._id} className="column">
						<div className="ui raised segment">
							<h4 className="ui center aligned icon header">Name:{f.name}</h4>
							<h5 className="ui center aligned icon header">score:{f.score}</h5>
						</div>
					</div>
				);
			});

			if (list.length > 0) {
				return (
					<div className="ui container">
						<p></p>
						<h3 className="ui center aligned icon header">Your friends</h3>
						<div className="ui three column stackable grid">{list}</div>
					</div>
				);
			}
			return <h4 className="ui center aligned icon header">No friends yet</h4>;
		}

		return (
			<div className="ui active inverted dimmer">
				<div className="ui text loader">fetching User</div>
			</div>
		);
	};

	return (
		<div className="ui container">
			<Input />
			{renderList()}
			<p></p>
			<Link to="/" className="ui violet button">
				Create ur Own Quiz
			</Link>
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		userInfo: state.userQuizInfo.info,
		loading: state.quizSubmitLoading,
	};
};

export default connect(mapStateToProps, {
	getUserInfo,
	giveQuiz,
})(GiveQuiz);
