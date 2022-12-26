
// use the module pattern to handle a list of contacts
module.exports = (function() {
    // private data
    let contacts = [];

    // private methods
    function addContact(contact) {
        contacts.push(contact);
    }

    function deleteContact(contact) {
        let index = contacts.indexOf(contact);
        if (index > -1) {
            contacts.splice(index, 1);
        }
    }

    // public API
    return {
        addContact: addContact,
        deleteContact: deleteContact,
        getContacts: () => contacts
    };
})();