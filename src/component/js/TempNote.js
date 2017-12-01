import React from 'react';
import ReactDOM from 'react-dom';

export default class tempNote extends React.Component{
	constructor(props){
		super(props);
		this.state={
			divArray:[]
		}
	}
	
	
	addDiv(note){
		const newDiv = this.state.divArray;
		this.setState({comment:note});
		this.setState({divArray:newDiv});
		console.log(note);
	}
	
	render(){
		return (
			<div>
				<p>记事本</p>
				<textarea ref="commentText" rows={20} style={{"width":"500px","resize":"none"}} ></textarea><br/>
				<button onClick={()=>{
					let a = this.refs.commentText.value;
					this.addDiv(a);
					console.log("asdf");
					this.state.divArray.map((item,index)=>{
						return (
							<div>
								<p>item.comment</p>
							</div>
						);
					})
					}
				}>submit</button>
			</div>
		)
	}
}
