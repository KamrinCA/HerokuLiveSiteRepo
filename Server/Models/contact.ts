/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: contact.ts model file. Creates the contact model for our web application
 *              and database operations to use
 *
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias

// Creates the contact schema
const ContactSchema = new Schema
({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String
},
{
    collection: "contacts"
});

// Allows the schema to work with Mongo DB Atlas (The database views the contact as a model)
const Model = mongoose.model("Contact", ContactSchema);
export default Model;