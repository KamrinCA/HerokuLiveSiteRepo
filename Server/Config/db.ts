/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: db.ts Config file. Holds important database fields used in our app.ts config file
 *              Helps contact application to the remote database (Mongo DB Atlas)
 *
 */

export const LocalURI="mongodb://127.0.0.1:27017/contacts";
export const RemoteURI="mongodb+srv://kamrinCA:5gYqKdZY1ImCBBET@cluster0.peuvl.mongodb.net/contacts?retryWrites=true&w=majority"
export const SessionSecret = "WEBD6201SessionSecret";
//export const Host = "localhost";
export const Host = "Mongo DB Atlas"
