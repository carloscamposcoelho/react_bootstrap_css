import React, {Component} from "react";
import Navigation from "../components/home/navigation"
import Intro from "../components/home/intro"
import Features from "../components/home/features";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navigation/>
                <Intro/>
                <Features/>
            </div>
        )
    }
}