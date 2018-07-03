import React, { Component } from 'react';
import './Cell.css';
import {G,P,T,C,R} from '../Const/Cell';

const cellColor = {
	G: '#4C4',
	P: '#EE8',
	T: '#862',
	C: '#D22',
	R: '#68D',
};

class Cell extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Cell" style={{background: cellColor[this.props.cell]}}>
				
			</div>
		);
	}

}

export default Cell;
