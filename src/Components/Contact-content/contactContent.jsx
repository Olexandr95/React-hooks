import React from "react";
import './contact-content.scss';


export function ContactContent ({firstName, lastName, phone}){
    return (
        <div className="contact-content">
                <p className="contact-title">{firstName} {lastName}</p>
                <p className="contact-phone">{phone}</p>
        </div>
    )
}
