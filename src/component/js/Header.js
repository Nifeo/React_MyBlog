import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../css/style_header.css';
import hbt from "../image/hb.png";

class Header extends React.Component{	
	render(){
		return (
			<Router>
			<div id="wrap_header">
			<div id="nav_bar" style={{"width":"100%"}}>
				<ul className="nav" >
					<li><Link to="/about_me">个人介绍</Link></li>
					<li><Link to="/resume">技能简历</Link></li>
				</ul>
				<Link to="/"><img className="nav" src={hbt} style={{'width':'64px'}}></img></Link>
				<ul className="nav">
					<li><Link to="/job_experience">从业经历</Link></li>
					<li><Link to="/contact_me">联系方式</Link></li>
				</ul>
			</div>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about_me" component={AboutMe}/>
			<Route exact path="/resume" component={Resume}/>
			<Route exact path="/job_experience" component={JobExperience}/>
			<Route exact path="/contact_me" component={ContactMe}/>
			</div>
			</Router>
		);
	}
}

const Home = () =>(
	<div id="selfIntro">
		<p>1</p>
	</div>
)

const AboutMe = () =>(
	<div id="selfIntro">
		<p>2</p>
	</div>
)
const Resume = () =>(
	<div id="selfIntro">
		<p>3</p>
	</div>
)
const JobExperience = () =>(
	<div id="selfIntro">
		<p>4</p>
	</div>
)
const ContactMe = () =>(
	<div id="selfIntro">
		<p>5</p>
	</div>
)


export default Header;
