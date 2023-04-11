const {
    listContacts,
    getContactById,
    removeContact,
    addContact} =  require("./contacts");

//const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        const allContacts = await listContacts();
        console.log(allContacts);
        break;

    case "get":
        const oneContact = await getContactById(id);
        console.log(oneContact);
        break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

//invokeAction(argv);
//invokeAction({action: "list"});
invokeAction({action: "get", id: "Z5sbDlS7pCzNsnAHLtDJd"});
