import React from "react";
import { Router, Route } from "react-router-dom";
import CreateQuiz from "./CreateQuiz/CreateQuiz";
import Quiz from "./Quiz/Quiz";
import Header from "./Header";
import GiveQuiz from "./GiveQuiz/GiveQuiz";
import ShareQuiz from "./shareQuiz/ShareQuiz";
import history from "../history";

const App = () => {
	return (
		<Router history={history}>
			<Header />
			<Route exact path="/" component={CreateQuiz} />

			<Route exact path="/quiz/:id" component={GiveQuiz} />

			<Route exact path="/attemptQuiz" component={Quiz} />

			<Route exact path="/shareQuiz" component={ShareQuiz} />
		</Router>
	);
};

export default App;
