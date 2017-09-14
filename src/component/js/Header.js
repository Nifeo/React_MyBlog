import React from 'react';
import '../css/style_header.css';
class Header extends React.Component{
	render(){
		return (
			<div id="wrap_header">
			<div className="navB">
				<ul className="nav">
					<li>About</li>
					<li>Resume</li>
				</ul>
				<img className="nav" alt=" " src=""></img>
				<ul className="nav">
					<li>Artical</li>
					<li>Coding lab</li>
				</ul>
			</div>
			</div>
		);
	}
}
export default Header;
