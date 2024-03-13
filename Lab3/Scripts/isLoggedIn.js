"use strict";

(() =>{
    // check if the user is already logged in
    if(sessionStorage.getItem("user"))
    {
    // redirect to the secure area
    loadHeader('contact-list');
    loadContent('contact-list', activeLinkCallBack('contact-list'))
    }
})();
