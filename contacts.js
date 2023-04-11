const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

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
  
async function addContact(name, email, phone) {
    const allContacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    allContacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(allContacts));
  };

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}