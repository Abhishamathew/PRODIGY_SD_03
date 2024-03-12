import React, { useState, useEffect } from 'react';
import AddUpdateContactModal from './AddUpdateContactModal';
import ContactList from './ContactList';
import '../CSS/Contact.css';

const Index = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleAddButtonClick = () => {
    setShowModal(true);
    setSelectedContact(null);
  };

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setShowModal(false);
  };

  const handleEditContact = (contact) => {
    setShowModal(true);
    setSelectedContact(contact);
  };

  const handleUpdateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact === selectedContact ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setShowModal(false);
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Contact Management System</h1>
      <button onClick={handleAddButtonClick}>Add New Contact</button>
      <ContactList
        contacts={contacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
      {showModal && (
        <AddUpdateContactModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddContact}
          onUpdate={handleUpdateContact}
          selectedContact={selectedContact}
        />
      )}
    </div>
  );
};

export default Index;
