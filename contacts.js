/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию

const contacts = require("./db/contacts.json");

function listContacts() {
    // ...твой код
  };
  
  function getContactById(contactId) {
    // ...твой код
  };
  
  function removeContact(contactId) {
    // ...твой код
  };
  
  function addContact(name, email, phone) {
    // ...твой код
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