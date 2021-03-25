import React from "react";
import ClipBoard from "./ClipBoard";
import { connect } from "react-redux";
import {
	FacebookShareButton,
	FacebookIcon,
	WhatsappIcon,
	WhatsappShareButton,
} from "react-share";

const ShareQuiz = (props) => {
	const { link } = props;
	return (
		<div className="ui container">
			<h2 className="ui center aligned icon header">
				<i className="violet fire icon"></i>
				<div className="content">CONGRATULATIONSS!</div>
				<div className="description">Share this quiz with your frnds now</div>
			</h2>

			<h4 className="ui center aligned icon header">Share via Link</h4>

			<ClipBoard value={link} />

			<h3 className="ui center aligned icon header">OR</h3>

			<h4 className="ui center aligned icon header">Share via</h4>

			<h3 className="ui center aligned icon header">
				<div className="ui grid">
					<div className="four wide column"> </div>
					<div className="four wide column">
						<FacebookShareButton
							url={link}
							quote={"how well do you know Me 🔥🔥🔥"}
						>
							<FacebookIcon size={50} round={true} iconFillColor={"white"} />
						</FacebookShareButton>
						<div className="content">facebook</div>
					</div>

					<div className="four wide column">
						<WhatsappShareButton
							title={"how well do yo know Me? check out this shit 🔥🔥🔥💣"}
							separator={"  "}
							url={link}
						>
							<WhatsappIcon size={50} round={true} iconFillColor={"white"} />
						</WhatsappShareButton>
						<div className="content">Whatsapp</div>
					</div>
					<div className="four wide column"> </div>
				</div>
			</h3>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const link = window.location.origin + `/quiz/${state.quizId}`;
	return {
		link: link,
	};
};

export default connect(mapStateToProps)(ShareQuiz);
