import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Intl,addLocaleData,FormattedMessage} from 'react-intl';
import '../css/style_header.css';
import hbt from "../image/hb.png";


export default class Header extends React.Component{	
	render(){
		return (
			<div id="wrap_header">
			<div style={{"width":"1080px", "margin":"0 auto"}}>
			<div id="nav_bar" style={{"width":"100%"}}>
				<ul className="nav" >
					<li><Link to="/freelancer"><FormattedMessage id="menuItem1" /></Link></li>
					<li><Link to="/resume"><FormattedMessage id="menuItem2" /></Link></li>
				</ul>
				<Link to="/"><img className="nav" src={hbt} style={{'width':'64px'}}></img></Link>
				<ul className="nav">
					<li><Link to="/job_experience"><FormattedMessage id="menuItem3" /></Link></li>
					<li><Link to="/contact_me"><FormattedMessage id="menuItem4" /></Link></li>
				</ul>
			</div>
			</div>
			<Route exact path="/" component={Home}/>
			<Route exact path="/freelancer" component={AboutMe}/>
			<Route exact path="/resume" component={Resume}/>
			<Route exact path="/job_experience" component={JobExperience}/>
			<Route exact path="/contact_me" component={ContactMe}/>
			</div>
		);
	}
}

const Home = () =>(
	<div className="self_intro">
		<div>
			<p>欢迎来到Rick的个人网页，希望能帮助各位更好的了解我:)</p>
		</div>
	</div>
)

const AboutMe = () =>(
	<div className="self_intro">
		<p>我坚信合理的工作流程能产生更好的客户体验</p>
	</div>
)
const Resume = () =>(
	<div className="self_intro">
		<img></img>
		<p>如果你公司需要下列的技能，也许我就是不错的选择：</p>
	</div>
)
const JobExperience = () =>(
	<div className="self_intro">
		<p>临时记事本</p>
	</div>
)
const ContactMe = () =>(
	<div className="self_intro">
		<p>5</p>
	</div>
)


