import React from 'react';
import ReactDom from 'react-dom';
import '../css/style_contents.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import hbt from "../image/hb.png";
import TempNote from './TempNote';
import BuildYourSite from '../image/bulid-your-site.png';
import Delivery from '../image/delivery.png';
import Meeting from '../image/meeting.png';

export default class Contents extends React.Component{
	constructor(){
		super();
		this.state={comment:""}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({
			comment:event.target.value
		});
	}
	handleSubmit(event){
		return <div>
		{this.state.comment}
		</div>
	}
	
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
		<div className="header_title">
			<div className="content_title">
			<img src={hbt} ></img>
			<div className="descriptionTitle">
				<h4>Rick.J</h4>
				<p>叫我Rick就好</p>
			</div>
			<h2 style={{"margin":"1em 2.5%"}}>Who Am I?</h2>
			<p style={{"margin":"1em 2.5%"}}>
				我叫Rick,目前从事网页开发工作。<br />
				掌握web基础开发（html/css/javascript）技能，有一年的wordpress和服务器后台(mySQL,php)管理的经验,代码规范良好，熟悉掌握github的使用，可单独/团队合作，有很好的抗压能力，积极完成领导布置的任务。*<br/>
				目前寻找兼职中，期待能有与您有一同共事的机会。<br/>
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
	<div className="self_intro header_title" style={{'textAlign':'center'}}>
		<h1>工作流程</h1>
		<div  className="work_flow">
			<img src={Meeting}></img>
			<p>通过会面理解客户需求，定制专属方案</p>
		</div>
		<div  className="work_flow">
			<img src={BuildYourSite}></img>
			<p>根据会议记录的客户需求制作网站，时间取决于实际情况</p>
		</div>
		<div  className="work_flow">
			<img src={Delivery}></img>
			<p>客户审查通过后交付内容,本次服务结束，根据协议转入售后服务流程*</p>
		</div>
		<br/>
		<p id="comment">*默认售后服务时间为半年，具体时长根据工作内容的不同而有所变化</p>
	</div>
)
const Resume = () =>(
	<div id="selfIntro">
		<h1 className="header_title">我帮您解决的事情</h1>
		<p></p>
	</div>
)
const JobExperience = () =>(
	<div className="self_intro">
		<TempNote />
	</div>
	)
const ContactMe = () =>(
	<div id="selfIntro">
		<p>5</p>
	</div>
)