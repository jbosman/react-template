import React from 'react';

import ClockUsingClassCompoent from '@components/Clocks/ClassComponent';
import ClockFunctionalCompoent from '@components/Clocks/FunctionalComponent';

const appStyles = {
	margin: 	"0",
	padding: 	"0",
	boxSizing: "border-box"
}

const headerStyles = {
	color: 		"#2ecc71",
	textAlign: "center",
	marginTop: "15vh"
}

export default function(){
	return (
		<div style={ appStyles }>
			<h1 style={ headerStyles }>
				Hello, React Template
			</h1>
			<h2 style={ {textAlign: "center"} }>
				Clock made using a class component
			</h2>
			<ClockUsingClassCompoent />
			<h2 style={ {textAlign: "center"} }>
				Clock made using a functional component
			</h2>
			<ClockFunctionalCompoent />
		</div>
	)
}