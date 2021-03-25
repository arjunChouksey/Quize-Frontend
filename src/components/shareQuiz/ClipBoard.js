import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ClipBoard = (props) => {
	const { value } = props;
	const [copy, setCopy] = useState(false);

	return (
		<div className="ui fluid action input">
			<input type="text" value={value} />

			<CopyToClipboard
				text={value}
				onCopy={() => {
					setCopy(true);
				}}
			>
				<div className="ui icon button">
					{!copy ? (
						<i className="clone large violet icon"></i>
					) : (
						<i className="check circle large violet icon"></i>
					)}
				</div>
			</CopyToClipboard>
		</div>
	);
};

export default ClipBoard;
