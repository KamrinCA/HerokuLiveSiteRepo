/* Authors: Chris Lapp-Benjamin (100802074) & Kamrin Aubin (100792839)
 * Date Completed: April 21, 2022
 * Description: index.ts util file. Handles "middleware" functions and other
 *              utility functions that would be beneficial for the site to use
 *
 */

import express, { Request, Response, NextFunction } from 'express';

// Enable JWT
import jwt from 'jsonwebtoken';
import * as DBConfig from '../Config/db'; 

// Custom convenience function to return the DisplayName of the user
export function UserDisplayName(req: Request): string
{
    if (req.user)
    {
        let user = req.user as UserDocument;
        return user.DisplayName.toString();
    }
    return '';
}

// Custom authentication guard middleware - next() function makes this middleware
export function AuthGuard(req: Request, res: Response, next: NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Generates a JWT token when a user logs in, not Necessary for Lab 4, but wanted to keep it
export function GenerateToken(user: UserDocument): string
{
    // Payload that holds the user's information
    const payload = 
    {
        id: user._id,
        DisplayName: user.DisplayName,
        username: user.username,
        EmailAddress: user.EmailAddress
    }

    // Configures expiration date for JWT token
    const jwtOptions = 
    {
        expiresIn: 604800   // 1 week
    }

    // Returns the token
    return jwt.sign(payload, DBConfig.SessionSecret, jwtOptions);
}