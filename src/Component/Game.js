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
			}
		}; // (board.y.x)[y'][x']
	}

	render() {
		return (
			<div>
				<GameUI game={this.state} />
			</div>
		);
	}

}

export default Game;
