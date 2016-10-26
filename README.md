# HTML Exercise - Colored Reindeer

This is an exercise for NSS Evening Cohort 3 that introduced students to JavaScript and how to implement it in their HTML files.

==============================

- Viewing/Downloading Project
    - [To View Hosted Project](#to-view-hosted-project)
    - [Installation](#installation)
    - [To Run](#torun)
- Specifications and Project Information
    - [Languages] (#languages)
    - [Tools] (#tools)
    - [Specifications] (#specifications)

==============================

## Viewing/Downloading Project

### To View Hosted Project

[Static Web Exercise - Colored Reindeer](https://mb-nss-exercises.firebaseapp.com/reindeer/index.html)

### Installation

Clone the repository from GitHub:

`git clone https://github.com/mattbruton/NSS-FrontEnd-StaticWeb-Reindeer.git`

Navigate to the project from the directory it was cloned into:

`cd NSS-FrontEnd-StaticWeb-Reindeer/`

### To Run

If you need a command line http server, to install http-server globally:

`npm install http-server -g`

Then:

`http-server` or `http-server -p XXXX` (the X's represent the port of your choice)

You should now be able to open your browser and type `localhost:8080` to view the project.

## Specs and Project Information

### Languages

1. JavaScript
1. HTML

### Tools

1. [Git](https://git-scm.com/)
1. [Atom](https://atom.io/)
1. [NPM http-server](https://www.npmjs.com/package/http-server)

### Specifications

==============================

> Take two arrays:


  1. `var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];`


  2. `var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];`

    - and loop through both, adding object in color array to corresponding index of reindeer's name array.
    - followed by appending the pair to the DOM in individual `<p>` tags within a `<div>`.


==============================