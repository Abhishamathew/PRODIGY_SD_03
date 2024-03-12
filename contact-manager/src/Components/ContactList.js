import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../CSS/Contact.css';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-entry">
            <div className="contact-details">
              {contact.name} - {contact.phone} - {contact.email}
            </div>
            <div className="contact-buttons">
              <button onClick={() => onEdit(contact)} className="edit-button">
                <FaEdit />
              </button>
              <button onClick={() => onDelete(contact.id)} className="delete-button">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
