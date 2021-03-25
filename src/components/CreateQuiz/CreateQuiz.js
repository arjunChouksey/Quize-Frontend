import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Input from "../Input";
import { createQuiz } from "../../actions";

const CreateQuiz = (props) => {
	const { createQuiz } = props;

	useEffect(() => {
		createQuiz();
	}, [createQuiz]);

	return (
		<Fragment>
			<Input />
		</Fragment>
	);
};

export default connect(null, {
	createQuiz,
})(CreateQuiz);
