import React from "react";
import "../styles/Contacts.css"; // Import CSS file


const contacts = [
  {
    id: 1,
    name: "Faith",
    image: "https://i.pinimg.com/236x/d7/4f/da/d74fda5f6ff2020d7633e07dc8733edf.jpg",
    details: "Frontend Developer"
  },
];

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <img src={contact.image} alt={contact.name} />
      <h2>{contact.name}</h2>
      <p className="contact-card-p">{contact.details}</p>
    </div>
  );
};

const Contacts = () => {
  return (
      <div>
        <h1 className="contact-title">Meet the Team that Makes the Dream Work</h1>
          <div className="contacts">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>

  );
};

export default Contacts;
