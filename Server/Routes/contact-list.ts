/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: contact-list.ts file. Handles the routes/views for the contact list page in the MVC pattern
 *
 */

import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util/index';

// Controller instance
import { DisplayContactListPage, DisplayAddPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage} from '../Controllers/contact-list';

/************************************* CONTACT-LIST ROUTES **************************************/
/* Temporary Routes - Contact-List Related */

/* GET contact-list page. */
router.get('/contact-list', AuthGuard, DisplayContactListPage);

/* Display the Add Page */
router.get('/add', AuthGuard, DisplayAddPage);

/* Process the Add Request */
router.post('/add', AuthGuard, ProcessAddPage);

/* Display the Edit Page with Data injected from  the db */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* Process the Edit request */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* Process the Delete request */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export default router;
