# BCParksChecker
Check BC parks site for day pass availability (Currently set up for Joffery Lake)

# Setup
## Requierments
Google Chrome (Windows or Mac)<br>
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) Chrome Extention 

## Tampermonkey Configuration
<ol>
    <li>In Chrome extentions click on the Tampermonkey icon</li>
    <li>Select "Create a new script..."</li>
    <li>Delete existing code in the Editor</li>
    <li>Copy code from Joffery.js into the Editor</li>
    <li>Save the code in the Editor (File->Save or Ctrl-S)</li>
    <li>Close the tab</li>
</ol>

## Usage
<ul>
    <li>Navigate to https://reserve.bcparks.ca/dayuse/</li>
    <li>As long as Tampermonkey is Enabled, it will auto check the pass avilability</li>
    <li>Once a pass is found you will recive an audable Chrome notification (Keep your volume up)</li>
    <li>You will need to book the pass once notified</li>
    <li>Try to keep your coputer from sleeping</li>
</ul>