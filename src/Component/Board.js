import React, { Component } from 'react';
import './Board.css';
import Tile from './Tile';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {};

		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onDrag = this.onDrag.bind(this);
	}

	onMouseDown(){
		console.log('down');
	}

	onMouseUp(){
		console.log('up');
	}

	onDrag(){
		console.log('drag');
	}

	renderTile(){
		var tiles = [];
		for(var y in this.props.board){
			for(var x in this.props.board[y]){
				tiles.push(<Tile cells={this.props.board[y][x]} y={y} x={x} />);
			}
		}
		return tiles;
	}

	render() {
		return (
			<div className="Tile-container" style={{
				top: this.props.translate.y+"px",
				left: this.props.translate.x+"px",
				transform: "scale("+this.props.scale+")"
			}} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onDrag={this.onDrag} draggable="true" >
				{this.renderTile()}
			</div>
		);
	}

}

export default Board;
