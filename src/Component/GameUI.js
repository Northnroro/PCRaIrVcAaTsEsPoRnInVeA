import React, { Component } from 'react';
import './GameUI.css';
import Board from './Board';
import Info from './Info';

class GameUI extends Component {

	constructor(props) {
		super(props);
		this.state = {
			translate:{y:50, x:100},
			scale:1.00,
		};
	}

	render() {
		return (
			<div>
				<div className="Board">
					<Board board={this.props.game.board}
						translate={this.state.translate}
						scale={this.state.scale} />
				</div>
				<div className="Info">
					<Info/>
				</div>
			</div>
		);
	}

}

export default GameUI;
