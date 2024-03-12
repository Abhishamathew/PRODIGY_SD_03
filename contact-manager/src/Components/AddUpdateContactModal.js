import React, { useState, useEffect } from 'react';

const AddUpdateContactModal = ({ onClose, onAdd, onUpdate, selectedContact, isDetailsValid }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setPhone(selectedContact.phone);
      setEmail(selectedContact.email);
    }
  }, [selectedContact]);

  const handleSave = () => {
    if (!name || !phone || !email) {
      alert('Please enter details for all fields.');
      return;
    }

    const newContact = {
      id: selectedContact ? selectedContact.id : Date.now(),
      name,
      phone,
      email,
    };

    if (selectedContact) {
      onUpdate(newContact);
    } else {
      onAdd(newContact);
    }

    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{selectedContact ? 'Update Contact' : 'Add New Contact'}</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSave}>{selectedContact ? 'Update' : 'Add'}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddUpdateContactModal;
