const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
    const allContacts = await fs.readFile(contactsPath);
    return JSON.parse(allContacts);
  };
  
async function getContactById(contactId) {
    const allContacts = await listContacts();
    const oneContact = allContacts.find(contact => contact.id === contactId);
    return oneContact || null;
  };
  
  function removeContact(contactId) {
    // ...твой код
  };
  
  function addContact(name, email, phone) {
    const contact = { name, email, phone }
    fs.appendFile(contactsPath, contact);
  };

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}