/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: index.ts file. Handles the routes/views in the MVC pattern
 *
 */

import express from 'express';
const router = express.Router();

// Create an index controller instance
import { DisplayHomePage, DisplayAboutPage, DisplayContactPage, DisplayServicesPage, DisplayProjectsPage, ProcessContactPage } from '../Controllers/index';

/************************************* TOP-LEVEL ROUTES **************************************/

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* Added for LAB 4 */
/* Processes contact page */
router.post('/contact', ProcessContactPage);

export default router;
