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

		this.isMouseDown = false;

		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
	}


	onMouseDown(){
		this.isMouseDown = true;
	}

	onMouseUp(){
		this.isMouseDown = false;
	}

	onMouseMove(){
		if(this.isMouseDown){
			console.log('drag');
		}
	}

	render() {
		return (
			<div>
				<div className="Board" onMouseDown={this.onMouseDown}
				onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove} >
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
