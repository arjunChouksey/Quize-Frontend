import React, { useState } from "react";
import { connect } from "react-redux";
import { handleInput } from "../actions";
import history from "../history";

const Input = (props) => {
	const { handleInput, name } = props;
	const [warning, setWarning] = useState(false);

	const handleSubmitEvent = (e) => {
		if (name) {
			history.push("/attemptQuiz");
		}

		setWarning(true);
	};

	return (
		<div className="ui container">
			<h3 className={`ui center aligned icon ${warning ? `red` : ``} header`}>
				Enter Full Name
			</h3>
			<div className="ui fluid icon input">
				<input
					type="text"
					placeholder="Full Name"
					onChange={(e) => handleInput(e.target.value)}
					value={name}
				/>
			</div>
			<p></p>
			<button
				className="fluid ui violet button"
				onClick={(e) => handleSubmitEvent(e)}
			>
				Enter
			</button>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		name: state.input.userName,
	};
};
export default connect(mapStateToProps, {
	handleInput,
})(Input);
