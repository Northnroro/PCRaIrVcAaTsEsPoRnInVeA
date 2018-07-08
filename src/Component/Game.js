import React, { Component } from 'react';
import './Game.css';
import GameUI from './GameUI';
import {G,P,T,C,R} from '../Const/Cell';

class Game extends Component {

	constructor(props) {
		super(props);
		this.state = {
			board: {
				[0]:{
					[0]: [
						[G,T,G],
						[P,P,P],
						[G,G,G]
					]
				}
			},
			players: [
				{name: 'Northnroro', score: 0, you: true},
				{name: 'Dummy', score: 10}
			],
			turn: 0,
			nextTile: [
				[G,P,G],
				[P,P,P],
				[G,T,G]
			]
		}; // (board.y.x)[y'][x']

		this.isYourTurn = this.isYourTurn.bind(this);

	}

	isYourTurn(){
		return this.state.players[this.state.turn].you;
	}

	render() {
		return (
			<div className="Game">
				<GameUI game={this.state} isYourTurn={this.isYourTurn()} />
			</div>
		);
	}

}

export default Game;
