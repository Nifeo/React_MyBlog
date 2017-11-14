import React from 'react';
import {Route, Link} from 'react-router-dom';
import '../css/style_header.css';
import hbt from "../image/hb.png";

export default class Header extends React.Component{	
	render(){
		return (
			<div id="wrap_header">
			<div style={{"width":"1080px", "margin":"0 auto"}}>
			<div id="nav_bar" style={{"width":"100%"}}>
				<ul className="nav" >
					<li><Link to="/about_me">个人介绍</Link></li>
					<li><Link to="/resume">技能简历</Link></li>
				</ul>
				<Link to="/"><img className="nav" src={hbt} style={{'width':'64px'}}></img></Link>
				<ul className="nav">
					<li><Link to="/job_experience">教育/从业经历</Link></li>
					<li><Link to="/contact_me">联系方式</Link></li>
				</ul>
			</div>
			</div>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about_me" component={AboutMe}/>
			<Route exact path="/resume" component={Resume}/>
			<Route exact path="/job_experience" component={JobExperience}/>
			<Route exact path="/contact_me" component={ContactMe}/>
			</div>
		);
	}
}

const Home = () =>(
	<div id="selfIntro">
		<p>欢迎来到Rick的个人网页，希望能帮助各位更好的了解我:)</p>
	</div>
)

const AboutMe = () =>(
	<div id="selfIntro">
		<p>2</p>
	</div>
)
const Resume = () =>(
	<div id="selfIntro">
		<img></img>
		<p>如果你公司需要下列的技能，也许我就是不错的选择：</p>
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


