import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionType from '../../Store/actions';
import GoogleLoginButton from './GoogleLoginButton/googleLoginButton';


export class SignInForm extends Component {
	
	render() {
		return (
			<div className="container vh-100">
				<div
					className="d-flex justify-content-center align-items-center h-100"
					style={{ backgroundColor: '#ebf5f2' }}
				>
					<div className="d-flex flex-column justify-content-center h-100">
						<h1  className=" mb-5" >{this.props.header}</h1>
						<form className="mt-5" >
							<div className="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
								<small id="emailHelp" className="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>

							<button type="submit" className="btn btn-primary">
								Submit
							</button>
							<GoogleLoginButton/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		page: state.page,
		pageTitle: state.pageTitle,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchPageStatus: (page) => dispatch({type: actionType.CURRENT_PAGE, pageName: page}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);


