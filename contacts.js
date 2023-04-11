const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
const contacts = require("./db/contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath, "utf-8");
    console.log(JSON.parse(data));
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

  function test() {
    console.log(contacts);
  }

module.exports = {
    test,
    listContacts,
    getContactById,
    removeContact,
    addContact
}