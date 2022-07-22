import React from "react";
import './Gender.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVenus, faMars, faGenderless} from '@fortawesome/free-solid-svg-icons';

export function Gender ({gender}){
    return (
        <div className="contact-gender">
            <div className="tittle">
             {
                    gender ?
                        (gender === 'male' ?
                            <FontAwesomeIcon icon={faMars}/> :
                            <FontAwesomeIcon icon={faVenus}/>)
                        : <FontAwesomeIcon icon={faGenderless}/>
                }
        </div>

        </div>
        
    )
}
