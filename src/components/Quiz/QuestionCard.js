import React, { useState } from "react";
import { connect } from "react-redux";
import { optionButton } from "../../styles";
import { storeOption } from "../../actions";

let globalColor = {
	1: "violet",
	2: "violet",
	3: "violet",
	4: "violet",
};
const QuestionCard = (props) => {
	const [color, setColor] = useState({
		1: "violet",
		2: "violet",
		3: "violet",
		4: "violet",
	});
	const { id, question, options } = props.question;
	const { storeOption } = props;

	const handleClickEvent = (e, id) => {
		storeOption(id, e.target.id);
		setColor({ ...globalColor, [e.target.id]: "orange" });
	};

	return (
		<div className="ui raised fluid centered card">
			<h2 className="ui center aligned icon header">{question}</h2>
			<div className="ui two column grid">
				<div className="two column row">
					<div className="column">
						<button
							onClick={(e) => handleClickEvent(e, id)}
							style={optionButton}
							id={options[0].id}
							className={`fluid ui ${color[options[0].id]} button`}
						>
							{options[0].option}
						</button>
					</div>
					<div className="column">
						<button
							onClick={(e) => handleClickEvent(e, id)}
							style={optionButton}
							id={options[1].id}
							className={`fluid ui ${color[options[1].id]} button`}
						>
							{options[1].option}
						</button>
					</div>
				</div>
				<div className="two column row">
					<div className="column">
						<button
							onClick={(e) => handleClickEvent(e, id)}
							style={optionButton}
							id={options[2].id}
							className={`fluid ui ${color[options[2].id]} button`}
						>
							{options[2].option}
						</button>
					</div>
					<div className="column">
						<button
							onClick={(e) => handleClickEvent(e, id)}
							style={optionButton}
							id={options[3].id}
							className={`fluid ui ${color[options[3].id]} button`}
						>
							{options[3].option}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(null, {
	storeOption,
})(QuestionCard);
