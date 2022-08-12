// ==UserScript==
// @name         Joffery Lake
// @namespace    [NAMEHASH]
// @version      0.1
// @description  Find those extra joffery tickets
// @author       ME
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
		var e = document.querySelector('button[aria-label="Book a pass for Joffre Lakes Provincial Park"]');
		if (e) {
			console.log("Clicked1", e);
			e.click();
		} else {
			console.log("No Button1 found");
            window.setTimeout(location.reload.bind(location), 1000);
		}

        window.setTimeout(clicker2, 1000);
	}

    function clicker2 () {
		var e2 = document.getElementsByClassName("date-input__calendar-btn")[0];
		if (e2) {
			console.log("Clicked2", e2);
			e2.click();
		} else {
			console.log("No Button2 found");
            window.setTimeout(location.reload.bind(location), 1000);
		}

        window.setTimeout(clicker3, 500);
	}

    function clicker3 () {
		var e3 = document.getElementsByClassName("btn-light")[14];
		if (e3) {
			console.log("Clicked3", e3);
			e3.click();
		} else {
			console.log("No Button3 found");
            window.setTimeout(location.reload.bind(location), 1000);
		}

        waitForKeyElements (".form-control:has(option[value='1: Object'])", selectFinickyDropdown);
	}

    function selectFinickyDropdown (jNode) {
        var evt = new Event ("click");
        jNode[0].dispatchEvent (evt);

        jNode.val('1: Object');

        evt = new Event ("change");
        jNode[0].dispatchEvent (evt);

        window.setTimeout(checkvalid, 500);
    }

    function checkvalid () {
		var e4 = document.getElementsByClassName("Full")[0];
		if (e4) {
            window.setTimeout(location.reload.bind(location), 1000);
		} else {
			console.log("We found it");
            GM_notification ( {title: 'Tickets Available', text: 'BOOK NOW'} );
		}
	}

	window.setTimeout(clicker1, 1500);
})();