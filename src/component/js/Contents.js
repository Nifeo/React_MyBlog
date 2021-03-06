import React from 'react';
import ReactDom from 'react-dom';
import '../css/style_contents.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import hbt from "../image/hb.png";
import TempNote from './TempNote';
import BuildYourSite from '../image/bulid-your-site.png';
import Delivery from '../image/delivery.png';
import Meeting from '../image/meeting.png';
import WechatImg from '../image/wechat.png';
import EmailImg from '../image/email.png';
import GithubImg from '../image/github.jpg';

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
			<Route  path="/relative_skill" component={JobExperience}/>
			<Route  path="/contact_me" component={ContactMe}/>
			</div>
		)
	}
} 

const Home = () =>(
	<div className="selfIntro">
		<div className="header_title">
			<div className="content_title">
			<img src={hbt} ></img>
			<div className="descriptionTitle">
				<h4>Rick.J</h4>
				<p><FormattedMessage id="sub_title" /></p>
			</div>
			<h2 style={{"margin":"1em 2.5%"}}>Who Am I?</h2>
			<p className="white_space" style={{"margin":"1em 2.5%"}}>
				<FormattedMessage id="description" /><br/><br/>
				*<FormattedMessage id="sp_link" /><a href={"http://localhost:3000/relative_skill"}><FormattedMessage id="menu_item2" /></a>
			</p>
		</div>
		<div id="content">
		</div>
		</div>
	</div>
)

const AboutMe = () =>(
	<div className="self_intro header_title" style={{'textAlign':'center'}}>
		<h1><FormattedMessage id="webpage_title"/></h1>
		<div  className="work_flow">
			<img src={Meeting}></img>
			<p><FormattedMessage id="working_step1"/></p>
		</div>
		<div  className="work_flow">
			<img src={BuildYourSite}></img>
			<p><FormattedMessage id="working_step2"/></p>
		</div>
		<div  className="work_flow">
			<img src={Delivery}></img>
			<p><FormattedMessage id="working_step3"/></p>
		</div>
		<br/>
		<p id="comment"><FormattedMessage id="working_comment" /></p>
	</div>
)
const Resume = () =>(
	<div className="selfIntro" className="header_title">
		<h1><FormattedMessage id="resume_title"/></h1>
		<p><FormattedMessage id="resume_content"/><a href="http://localhost:3000/contact_me">contact me</a></p>
	</div>
)
const JobExperience = () =>(
	<div className="selfIntro" className="header_title">
		<h1><FormattedMessage id="resume_title" /></h1>
		<p><FormattedMessage id="skill_description"/></p>
		<br/>
		<table className="relate_skill_tb">
			<tr>
				<td><FormattedMessage id="table_skill_title" /></td>
				<td><FormattedMessage id="table_skill_description_title" /></td>
				<td><FormattedMessage id="table_skill_description2_title" /></td>
			</tr>
			<tr>
				<td><FormattedMessage id="table_skill1" /></td>
				<td><FormattedMessage id="table_skill_description1" /></td>
			</tr>
			<tr>
				<td><FormattedMessage id="table_skill2" /></td>
				<td><FormattedMessage id="table_skill_description2" /></td>
			</tr>
			<tr>
				<td><FormattedMessage id="table_skill3" /></td>
				<td><FormattedMessage id="table_skill_description3" /></td>
			</tr>
		</table>
	</div>
	)
const ContactMe = () =>(
	<div className="selfIntro header_title" style={{"textAlign":"center"}}>
		<img className="contact_img" src={WechatImg}></img>
		<img className="contact_img" src={EmailImg}></img>
		<img className="contact_img" src={GithubImg}></img>
	</div>
)