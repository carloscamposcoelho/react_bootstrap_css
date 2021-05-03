import React, {Component} from "react";
import Navigation from '../components/home/navigation'
import Intro from '../components/home/intro'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Intro/>
            </div>
        )
    }
}