import React, { Component } from 'react';
import './Tile.css';
import Cell from './Cell';

class Tile extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Tile" style={{top:this.props.y*150+"px", left:this.props.x*150+"px"}}>
				<Cell cell={this.props.cells[0][0]} />
				<Cell cell={this.props.cells[0][1]} />
				<Cell cell={this.props.cells[0][2]} />
				<Cell cell={this.props.cells[1][0]} />
				<Cell cell={this.props.cells[1][1]} />
				<Cell cell={this.props.cells[1][2]} />
				<Cell cell={this.props.cells[2][0]} />
				<Cell cell={this.props.cells[2][1]} />
				<Cell cell={this.props.cells[2][2]} />
			</div>
		);
	}

}

export default Tile;
