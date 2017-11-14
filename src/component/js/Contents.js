import React from 'react';
import ReactDom from 'react-dom';
import '../css/style_contents.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Contents extends React.Component{
	render(){
		return (
			<div id="body-wrapper">
					<Route exact path="/" component={Home}/>
			<Route  path="/about_me" component={AboutMe}/>
			<Route  path="/resume" component={Resume}/>
			<Route  path="/job_experience" component={JobExperience}/>
			<Route  path="/contact_me" component={ContactMe}/>
			</div>
		)
	}
} 
const Home = () =>(
	<div id="selfIntro">
		<h1 className="headerTitle">Who Am I?</h1>
	</div>
)

const AboutMe = () =>(
	<div id="selfIntro">
		<p>2</p>
	</div>
)
const Resume = () =>(
	<div id="selfIntro">
		<h1 className="headerTitle">我目前能帮您解决的事情</h1>
		<p></p>
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