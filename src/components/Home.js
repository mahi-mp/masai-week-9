import React from "react";
import Search_company from "./Search_company";
import Sortby_price from "./Sortby_price";
import Sortby_marcketcap from "./Sortby_marcketcap";
import Title from "./Title";
import All from "./All";
import Display from "./Display";
import { Button, Row, Col, Container } from 'react-bootstrap';
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from "axios";




export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			search_var:null
		}
	}

	handleSearch = (search_var) => this.setState({
		search_var:search_var
	});
	render(){
		return(
			<React.Fragment>
			<Jumbotron fluid className="text-center">
				  <h1>PragmaSoft Tech solutions</h1>
				  <p>
				    Here, You can search company name by simply entering 1 to 999 digit, Which it will give information about the company name.
				    This website is responsive for all devices.
				  </p>
				  <p>
				    <Search_company handleSearch = {this.handleSearch}/>
				    <All />
				  </p>
				</Jumbotron>
				
				{this.state.search_var !== null ? (<Display search_var = {this.state.search_var} />) : null}   
			</React.Fragment>
		);
	}
}

// export default class home extends React.Component
// {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			id : null,
// 			title : null,
// 			stock_symbol : null,
// 			stock_price : null,
// 			market_cap : null,
// 			temp:[],
// 			search_var:0
// 		}
// 	}

// 	componentDidMount(){
// 		axios({
// 			method: 'get',
//     		url: ' https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json',
    		
// 		})
// 		.then((response) =>{	
// 			this.setState({
// 				id : response.data[this.search_var].id,
// 				title : response.data[this.search_var].title,
// 				stock_symbol : response.data[this.search_var].stock_symbol,
// 				stock_price : response.data[this.search_var].stock_price,
// 				market_cap : response.data[this.search_var].market_cap
// 			});
				
// 				//console.log(this.state.temp[0][0].id)
// 		})
// 		.catch((err) => alert(err))
// 	}

// 	componentDidUpdate(prevProps){
// 		if(this.props.search_var !== prevProps.search_var){
// 			axios({
// 			method: 'get',
//     		url: ' https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json',
    		
// 		})
// 		.then((response) =>{	
// 			this.setState({
// 				id : response.data[this.search_var].id,
// 				title : response.data[this.search_var].title,
// 				stock_symbol : response.data[this.search_var].stock_symbol,
// 				stock_price : response.data[this.search_var].stock_price,
// 				market_cap : response.data[this.search_var].market_cap
// 			});
				
// 				//console.log(this.state.temp[0][0].id)
// 		})
// 		.catch((err) => alert(err))
// 	}
// 	}

// 	handleSearch = (inp) => this.setState({
// 		search_var:inp
// 	});
	
// 	render()
// 	{
// 		return(
// 			<div classname="container-fluid">
// 	 			<Row>
// 					<div Col  sm={4}>
// 					<h1>{this.state.id}</h1>
// 					<h1>{this.state.title}</h1>
// 					<h1>{this.state.stock_symbol}</h1>
// 					<h1>{this.state.stock_price}</h1>
// 					<h1>{this.state.market_cap}</h1>
// 						<Search_company  handleSearch = {this.handleSearch} />
// 						<Sortby_price />
// 						<Sortby_marcketcap />
// 						<Title />
// 						<All />
// 						<Display />
// 						<All />
// 					</div>
// 					<div Col sm={8}>
// 						<Jumbotron fluid>
// 						  <h1>Hello, world!</h1>
// 						  <p>
// 						    This is a simple hero unit, a simple jumbotron-style component for calling
// 						    extra attention to featured content or information.
// 						  </p>
// 						  <p>
// 						    <Button variant="primary">Learn more</Button>
// 						  </p>
// 						</Jumbotron>
// 					</div>
// 				</Row>
// 			</div>
// 			);
// 	}
// }