import React from 'react';
import { Header } from '..';

export default function ContactMessage({ title, description }) {

    return (
        <div>
            <Header title={title} description={description} />
        </div>
    )
}