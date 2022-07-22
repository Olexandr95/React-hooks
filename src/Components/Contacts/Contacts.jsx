import React from "react";
import './Contacts.scss';
import { useState, useEffect} from "react";
import { contacts as dataContacts } from "../../Variables/contacts";
import { Contact } from "../Contact/Contact";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVenus, faMars, faGenderless} from '@fortawesome/free-solid-svg-icons';

export function Contacts (){
  const [contacts, setContacts] = useState(dataContacts);
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState({male: true, female: true, nogender: true});
  
  useEffect(() => {
    setContacts(filterContacts());
  }, [search, checked])


  
  const handleSearchChange = (event) => setSearch(event.target.value.toLowerCase());
  
  const handleCheckBoxChange = (event) => {
    const target = event.target;
        setChecked({
            ...checked,
            [event.target.name]: target.checked
        });
  }
  
  const filterContacts = () => {
    const filteredByGender = dataContacts.filter(contact => checked[contact.gender]
        || (!(contact.gender in checked) && checked.nogender));
    const searchResult = filteredByGender.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.phone}`.toLowerCase().includes(search));
    return searchResult;
}
  return (
    <div className="conteiner-search">
      <input className="search-input" onChange={handleSearchChange} placeholder="Lets start search"></input>
        <div className="flex-center">
          <div className="gender-icon">
            <input type="checkbox" name="male" checked={checked.male} onChange={handleCheckBoxChange} />
            <FontAwesomeIcon className="male-icon"  icon={faMars}/>
          </div>
          <div className="gender-icon">
            <input type="checkbox" name="female" checked={checked.female} onChange={handleCheckBoxChange} />
            <FontAwesomeIcon className="female-icon" icon={faVenus}/>
          </div>
          <div className="gender-icon">
            <input type="checkbox" name="nogender" checked={checked.nogender} onChange={handleCheckBoxChange}/>
            <FontAwesomeIcon className="nogender" icon={faGenderless}/>
          </div>
        </div>
      
      {
       contacts?.map(contact => <Contact {...contact}/>)
      }
    </div>
  );
}