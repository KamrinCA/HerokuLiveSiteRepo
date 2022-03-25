"use strict";
(function()
{
    let protected_routes = [
        "contact"
    ];

    if (protected_routes.indexOf(router.ActiveLink) > -1)
    {
        // check if user is logged in
        if(!sessionStorage.getItem("user"))
        {
            $("#contact-listArea").hide();
        }
    }

})();