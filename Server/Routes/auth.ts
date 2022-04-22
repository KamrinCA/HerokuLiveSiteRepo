/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: auth.ts file. Handles the routes/views for the authentication pages in the MVC pattern
 *
 */

import express from 'express';
const router = express.Router();

// Controller instance
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/auth';

/************************************* AUTHENTICATION ROUTES **************************************/

/* GET display the login page. */
router.get('/login', DisplayLoginPage);

/* Process the login request. */
router.post('/login', ProcessLoginPage);

/* GET display the register page. */
router.get('/register', DisplayRegisterPage);

/* Process the register request. */
router.post('/register', ProcessRegisterPage);

/* Process the logout request. */
router.get('/logout', ProcessLogoutPage);

export default router;
