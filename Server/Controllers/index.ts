/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: index.ts file. Added process contact function, that handles
 *              the event when a user enters there contact information to the
 *              form on the contact page.
 *
 */

import express, {Request, Response, NextFunction} from 'express';

import Contact from '../Models/contact';
import { UserDisplayName } from '../Util/index';

// Display Page Functions
export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req) });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req) });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req) });
}

// Added for LAB 4
// Processes a user's contact information, when the send button is clicked
//
// NOTE: This did not have to have complete functionality, however we opted to have it mimic the add contact process function.
//       Meaning this adds the contact to the database as well! Then redirects them to the home page
export function ProcessContactPage(req: Request, res: Response, next: NextFunction): void
{
        // Instantiate a new contact to add
        let newContact = new Contact
        ({
            "FullName": req.body.fullName,
            "ContactNumber": req.body.contactNumber,
            "EmailAddress": req.body.emailAddress
        });
    
        // Insert contact into db
        Contact.create(newContact, function(err)
        {
            if (err)
            {
                console.error(err);
                res.end(err);
            }
    
            // newContact has been added to db -> go to the contact list
            res.redirect('/home');
        });
}