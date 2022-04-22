/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: user.ts model file. Creates the user model for our web application and
 *              database operations to use
 *
 */

import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // alias
import passportLocalMongoose from 'passport-local-mongoose';

// Creates a user schema
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

// Allows passport local Mongoose to work with User schema (for authentication/security)
UserSchema.plugin(passportLocalMongoose);
// Allows the schema to work with Mongo DB Atlas (The database views the user as a model)
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
}


export default Model;