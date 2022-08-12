// ==UserScript==
// @name         Joffery
// @namespace    [NAMEHASH]
// @version      0.1
// @description  Find those extra joffery tickets
// @author       You
// @match        https://reserve.bcparks.ca/dayuse*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_notification
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function () {
	'use strict';

	function clicker1 () {
		var button1 = document.querySelector('button[aria-label="Book a pass for Joffre Lakes Provincial Park"]');
		if (button1) {
			console.log("Clicked1", button1);
			button1.click();
		} else {
			console.log("No Button1 found");
            window.setTimeout(location.reload.bind(location), 1000);
		}
        window.setTimeout(clicker2, 1000);
	}

    function clicker2 () {
		var button2 = document.getElementsByClassName("date-input__calendar-btn")[0];
		if (button2) {
			console.log("Clicked2", button2);
			button2.click();
		} else {
			console.log("No Button2 found");
            window.setTimeout(location.reload.bind(location), 1000);
		}
        window.setTimeout(clicker3, 500);
	}

    function clicker3 () {
		var button3 = document.getElementsByClassName("btn-light")[14];
		if (button3) {
			console.log("Clicked3", button3);
			button3.click();
		} else {
			console.log("No Button3 found");
            window.setTimeout(location.reload.bind(location), 1000);
		}
        waitForKeyElements (".form-control:has(option[value='1: Object'])", selectDropdown);
	}

    function selectDropdown (jNode) {
        var evt = new Event ("click");
        jNode[0].dispatchEvent (evt);

        jNode.val('1: Object');

        evt = new Event ("change");
        jNode[0].dispatchEvent (evt);

        window.setTimeout(checkvalid, 500);
    }

    function checkvalid () {
		var Full = document.getElementsByClassName("Full")[0];
		if (Full) {
            window.setTimeout(location.reload.bind(location), 1000);
		} else {
			console.log("We found it");
            GM_notification ( {title: 'Tickets Available', text: 'BOOK NOW'} );
            window.setTimeout(location.reload.bind(location), 30000);
		}
	}

	window.setTimeout(clicker1, 1500);
})();