import React, {Component} from 'react';
import '../HomePage/homePage.css'

import MainBanner from './mainBanner';
import Statistics from './Statistics';
import Symptoms from './Symptoms';

import logo from './assets/images/01.png'


class HomePage extends Component {
	render() {
		return (
			<div>
                <MainBanner />
                <Statistics />
				<Symptoms />
            </div>
		);
	}
}

export default HomePage;