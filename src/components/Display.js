import React from "react";
import axios from "axios";
import { Button, Row, Col, Container, Card } from 'react-bootstrap';

export default class Display extends React.Component
{	constructor(props){
		super(props);
		this.state = {
			id : null,
			title : null,
			stock_symbol : null,
			stock_price : null,
			market_cap : null
		}
	}

	componentDidMount(){
		axios({
			method: 'get',
    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json',
		})
		.then((response) =>{
			this.setState({
				id : response.data[this.props.search_var].id,
				title : response.data[this.props.search_var].title,
				stock_symbol : response.data[this.props.search_var].stock_symbol,
				stock_price : response.data[this.props.search_var].stock_price,
				market_cap : response.data[this.props.search_var].market_cap
			});	
		})
		.catch((err) => alert(err))
	}

	componentDidUpdate(prevProps){
		if(this.props.search_var !== prevProps.search_var){
			axios({
			method: 'get',
    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json',
		})
		.then((response) =>{
			this.setState({
				id : response.data[this.props.search_var].id,
				title : response.data[this.props.search_var].title,
				stock_symbol : response.data[this.props.search_var].stock_symbol,
				stock_price : response.data[this.props.search_var].stock_price,
				market_cap : response.data[this.props.search_var].market_cap
			});	
		})
		.catch((err) => alert(err))
	}
}
	render(){
		return(
			<React.Fragment>
			<Card className="text-center" border="danger" style={{ width: '18rem' }}>
			  <Card.Header as="h5">Company Details</Card.Header>
			  <Card.Body>
			    <Card.Title>{this.state.title} </Card.Title>
			    <Card.Text >
			     <p classNamme="leads">Stock Symbol : {this.state.stock_symbol}</p>
			     <p classNamme="leads">Stock Price : {this.state.stock_price}</p>
			     <p classNamme="leads">Market Cap : {this.state.market_cap}</p>
			    </Card.Text>
			  </Card.Body>
			</Card>
			</React.Fragment>
		);
	}
}