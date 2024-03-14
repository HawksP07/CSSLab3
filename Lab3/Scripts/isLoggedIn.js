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
    }
})();
