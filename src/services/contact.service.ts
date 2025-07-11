import {Contact} from "../model/contact.model";
import {contactList} from "../db/db";

//retrieve saved contact data
export const getAllContacts = (): Contact[] => {
    return contactList;
}
//save contact data
export const saveContact = (contact: Contact): Contact => {
    contactList.push(contact);
    return contact;
}
export const validateContact = (contact: Contact) => {
    if (!contact.email || !contact.subject || !contact.message) {
        return 'All fields are required';
    }
    return null;
}