This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

Overwatch Buddy is an application that allows users to customize, build, and save teams using Heroes from Blizzard's Overwatch. It is a tool to help users get further insight into the mechanics of Overwatch team builds by providing firm number statistics for each team build and allows users to add notes to give personal opinions and plan for future builds. 


### Planned features
- Individual user stat tracking for favorite heroes. <br>
- Hero Overview with Roster and Complete description of heroes. <br>
- Overwatch News and Overwatch League News Updates.<br>
- Build guide and FAQ for new users. <br>

### Tech Stack
Full Stack Build: <br>
Frontend: React, Redux, Enzyme (https://github.com/talexcrowell/ow-team-app-client) <br>
Backend: Node, Express, MongoDB, Mongoose, JWT (https://github.com/talexcrowell/ow-team-app-server) <br>

### Component Sources
- Landing Page (src/components/landing-page.js)
- Registration (src/components/registration.js, src/components/registration-form.js)
- Login (src/components/login-page.js, src/components/login-form.js)
- Dashboard (src/components/dashboard.js, src/components/dashboard-teams.js, src/components/dashboard-team-stats, src/components/header-bar.js)
- Team Build (src/components/team-build.js, src/components/bar-user-teams.js, src/components/bar-team.js)
- Team Review (src/components/build-review.js, src/components/review-form.js, src/components/bar-user-teams.js, src/components/bar-team.js)
- Team View (src/components/team-view.js, src/components/view-form.js, src/components/bar-user-teams.js, src/components/bar-team.js)

### Developer Notes
This project is meant to act as a foundation to structure or inspire future apps. As a true believer of open source and combined efforts, I want developers to have the ability to manipulate my code and maybe give insight on how to solve problems that they are having on personal projects. 

## Instructions to Run App
To run this project, you will need to copy the repository for both the client and server and make sure you are running a local version of mongoDB.<br>
Client: (https://github.com/talexcrowell/ow-team-app-client) <br>
Server:(https://github.com/talexcrowell/ow-team-app-server) <br>
<br>
If you need to import data into your mongo database, I have included seed data for this project and a script to import the seed data (therefore you just have to run ```node seed-database.js```). Please feel free to modify the data and components to fit your project's needs.