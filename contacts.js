const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  };
  
  function getContactById(contactId) {
    // ...твой код
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