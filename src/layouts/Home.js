import React from "react";
import Navigation from "../components/home/navigation"
import Intro from "../components/home/intro"
import Features from "../components/home/features";
import About from "../components/home/about";
import Services from "../components/home/services";
import Gallery from "../components/home/gallery";
import Testimonials from "../components/home/testimonials";
import Team from "../components/home/team";
import Contact from "../components/home/contact/contact";

export default function Home() {
    let teamMembers = [
        {
            Image: "/img/team/01.jpg",
            Name: "John Doe",
            Role: "Director"
        },
        {
            Image: "/img/team/02.jpg",
            Name: "Mike Doe",
            Role: "Senior Designer"
        },
        {
            Image: "/img/team/03.jpg",
            Name: "Jane Doe",
            Role: "Developer"
        },
        {
            Image: "/img/team/04.jpg",
            Name: "Karen Doe",
            Role: "Project Manager"
        }
    ];

    return (
        <div id="home">
            <Navigation />
            <Intro />
            <Features />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Team members={teamMembers}></Team>
            <Contact />
        </div>
    )
}