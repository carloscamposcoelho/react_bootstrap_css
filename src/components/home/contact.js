import React from "react";
import { ContactBox, Header } from "../";

export default function Contact() {

    return (
        <div>
            <Header title="Get in touch" description="Please fill out the form below to send us an email and we will get back to you as soon as possible" theme="light" />
            <ContactBox />
        </div>
    )
}