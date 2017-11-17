import React from 'react';
import ReactDom from 'react-dom';
import '../css/style_contents.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import hbt from "../image/hb.png";

export default class Contents extends React.Component{
	render(){
		return (
			<div id="body-wrapper">
					<Route exact path="/" component={Home}/>
			<Route  path="/freelancer" component={AboutMe}/>
			<Route  path="/resume" component={Resume}/>
			<Route  path="/job_experience" component={JobExperience}/>
			<Route  path="/contact_me" component={ContactMe}/>
			</div>
		)
	}
} 
const Home = () =>(
	<div id="selfIntro">
		<div className="headerTitle">
			<div className="contentTitle">
			<img src={hbt} ></img>
			<div className="descriptionTitle">
				<h4>居扬</h4>
				<p>叫我Rick就好</p>
			</div>
			<h2 style={{"margin":"1em 2.5%"}}>Who Am I?</h2>
			<p style={{"margin":"1em 2.5%"}}>
				我叫居扬，虽然是个北方姓，不过从小在南方长大。目前从事网页开发工作。<br />
				掌握web基础开发（html/css/javascript）技能，有一年的wordpress和服务器后台(mySQL,php)管理的经验,代码规范良好，熟悉掌握github的使用，可单独/团队合作，有很好的抗压能力，积极完成领导布置的任务。*<br/>
				目前寻找兼职中，期待能有于您有一同共事的机会。<br/>
				<br/>
				*详细的技能列表请移步至<a href={"http://localhost:3000/resume"}>技能简历</a>中查看
			</p>
		</div>
		<div id="content">
		</div>
		</div>
	</div>
)

const AboutMe = () =>(
	<div id="selfIntro">
		<h1 className="headerTitle">工作流程</h1>
		<p></p>
	</div>
)
const Resume = () =>(
	<div id="selfIntro">
		<h1 className="headerTitle">我帮您解决的事情</h1>
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