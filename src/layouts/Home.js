import React, {Component} from "react";
import Navigation from "../components/home/navigation"
import Intro from "../components/home/intro"
import Features from "../components/home/features";
import About from "../components/home/about";
import Services from "../components/home/services";
import Gallery from "../components/home/gallery";

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Navigation/>
                <Intro/>
                <Features/>
                <About/>
                <Services/>
                <Gallery/>
            </div>
        )
    }
}