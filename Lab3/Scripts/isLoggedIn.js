// Bernie Warren Austin Pyzer 
// 100881644 100863604 
// March 15th 2024 
// Lab 4 - Web Dev Css

"use strict";

(() =>{
    // check if the user is already logged in
    if(sessionStorage.getItem("user")) {
        // redirect to the secure area
        loadHeader('contact-list');
        loadContent('contact-list', activeLinkCallBack('contact-list'))

        // show the task list link
        var taskList = document.getElementById('taskList');
        taskList.style.display = 'block';

    } else {
        // hide the task list link
        var taskList = document.getElementById('taskList');
        taskList.style.display = 'none';
        // User is not signed in, redirect them to the login page
        loadHeader('login');
        loadContent('login', ActiveLinkCallBack('login'));
    }
})();
