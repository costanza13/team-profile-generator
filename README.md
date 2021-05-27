# Team Profile Manager

A web application for managers to display and update their team's info, including contact info and GitHub profile links.

## Features

GIVEN a command-line application that accepts user input
* WHEN I am prompted for my team members and their information
<br>THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML
<br>THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username
<br>THEN that GitHub profile opens in a new tab
* WHEN I start the application
<br>THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
<br>THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
<br>THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
<br>THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
<br>THEN I exit the application, and the HTML is generated