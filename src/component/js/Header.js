import React from 'react';
import '../css/style_header.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import hbt from "../image/hb.png";
const sty = {height:'64px',width:'64px',marginLeft:'3%'};
class Header extends React.Component{	
	render(){
		return (
			<Router>
			<div id="wrap_header">
			<div>
				<ul className="nav" >
					<li><Link to="/about">About</Link></li>
					<li><Link to="/resume">Resume</Link></li>
				</ul>
				<img className="nav" style={sty} src={hbt}></img>
				<ul className="nav">
					<li><Link to="/artical">Artical</Link></li>
					<li><Link to="/codinglab">Coding lab</Link></li>
				</ul>
			</div>
			<Route exact path="/" component={Home}/>
			</div>
			</Router>
		);
	}
}

const Home = () =>(
	<div id="selfIntro">
		<h1>Hello World!</h1>	
		<p>I'm Rick, weclome to my blog.<br/>hope you enjoy and have fun :)</p>
	</div>
)
export default Header;
