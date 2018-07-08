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
		this.onWheel = this.onWheel.bind(this);
	}

	onMouseDown(e){
		this.isMouseDown = true;
		this.prevMousePos = {y:e.clientY, x:e.clientX};
	}

	onMouseUp(e){
		this.isMouseDown = false;
	}

	onMouseMove(e){
		if(this.isMouseDown){
			var diffMousePos = {
				y: e.clientY-this.prevMousePos.y,
				x: e.clientX-this.prevMousePos.x
			};
			this.setState({translate:{
				y: this.state.translate.y+diffMousePos.y,
				x: this.state.translate.x+diffMousePos.x
			}});
			this.prevMousePos = {y:e.clientY, x:e.clientX};
		}
	}

	onWheel(e){
		if(this.stepIntervals){
			this.stepIntervals.forEach((interval)=>clearInterval(interval));
		}
		this.stepIntervals = [];
		var ratio = 1 - e.deltaY/200 * 0.1;
		if(this.prevRatio){
			ratio *= this.prevRatio;
		}
		this.prevRatio = ratio;
		var diffPos = {
			y: (e.clientY-this.state.translate.y-this.boardDiv.clientHeight/2)*(1-ratio),
			x: (e.clientX-this.state.translate.x-this.boardDiv.clientWidth/2)*(1-ratio)
		};
		var prevY = this.state.translate.y;
		var prevX = this.state.translate.x;
		var prevScale = this.state.scale;
		const step = 50;
		const stepTime = 4;
		for(var i=1; i<=step; i++){
			this.stepIntervals.push(setTimeout((function(i){
				this.setState({
					translate:{
						y: prevY+diffPos.y*i/step,
						x: prevX+diffPos.x*i/step
					},
					scale: (prevScale*(step-i)+prevScale*ratio*i)/step
				});
				if(i == step){
					this.prevRatio = 0;
				}
			}).bind(this, i), stepTime*i));
		}
	}

	render() {
		return (
			<div>
				<div className="Board" onMouseDown={this.onMouseDown}
				onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}
				onWheel={this.onWheel} ref={(e)=>{this.boardDiv = e;}} >
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
