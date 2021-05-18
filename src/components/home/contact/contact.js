import React from "react";
import { ContactBox, Header } from "../../";
import "./style.css";

export default function Contact() {

    return (
        <div className="contact">
            <Header
                title="Get in touch"
                description="Please fill out the form below to send us an email and we will get back to you as soon as possible"
                theme="light"
                align="left"
            />
            <ContactBox />
        </div>
    )
}