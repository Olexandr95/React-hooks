import React from "react";
import './Contact.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { Gender } from "../Gender-icon/Gener-icon";
import { ContactContent } from "../Contact-content/contactContent";

export function Contact ({firstName, lastName, phone, gender}){
    return (
        <div className="contact-conteiner">
            <FontAwesomeIcon className="conteiner-user-img" icon ={faUser}/>
            <ContactContent firstName={firstName} lastName={lastName} phone={phone}/>
            <Gender gender={gender}/>
        </div>
    )
}
