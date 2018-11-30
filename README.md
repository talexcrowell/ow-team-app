![Overwatch Buddy Logo](https://i.ibb.co/bgNbS1B/overwatch-buddy-logo.png)
<br>
(https://overwatch-buddy.herokuapp.com/)

## Overview

Overwatch Buddy is an application that allows users to customize, build, and save teams using Heroes from Blizzard's Overwatch. It is a tool to help users get further insight into the mechanics of Overwatch team builds by providing firm number statistics for each team build and allows users to add notes to give personal opinions and plan for future builds. 


### Planned features
- Individual user stat tracking for favorite heroes. <br>
- Hero Overview with Roster and Complete description of heroes. <br>
- Overwatch News and Overwatch League News Updates.<br>
- Build guide and FAQ for new users. <br>
- And many more! <br>

### Tech Stack
Full Stack Build <br><br>
Frontend: React, Redux, Enzyme (https://github.com/talexcrowell/ow-team-app-client) <br>
Backend: Node, Express, MongoDB, Mongoose, JWT, Mocha, Chai (https://github.com/talexcrowell/ow-team-app-server) <br>

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

### Instructions to Run App
To run this project, you will need to copy the repository for both the client and server and make sure you are running a local version of mongoDB.<br>
Client: (https://github.com/talexcrowell/ow-team-app-client) <br>
Server:(https://github.com/talexcrowell/ow-team-app-server) <br>
<br>
If you need to import data into your mongo database, I have included seed data for this project and a script to import the seed data (therefore you just have to run ```node seed-database.js```). Please feel free to modify the data and components to fit your project's needs.

### Screenshots
Landing Page<br>
![Landing Page](https://i.ibb.co/jkPthF9/Overwatch-Buddy-Landing.png)<br>

Registration<br>
![Registration](https://i.ibb.co/7zPkcdB/Overwatch-Buddy-Register.png)<br>

Login<br>
![Login](https://i.ibb.co/zVZ3WCv/Overwatch-Buddy-Login.png)<br>

Dashboard<br>
![Dashboard](https://i.ibb.co/T8cDGQR/Overwatch-Buddy-Dashboard.png)<br>

Team Build<br>
![Team Build1](https://i.ibb.co/L02CLsr/Overwatch-Buddy-Team-Build1.png)<br>
![Team Build2](https://i.ibb.co/TbwCYqM/Overwatch-Buddy-Team-Build2.png)<br>

Team Review<br>
![Team Review](https://i.ibb.co/KhQ5kRp/Overwatch-Buddy-Team-Review.png)<br>

Team View<br>
![Team View](https://i.ibb.co/9h5Tghz/Overwatch-Buddy-Team-View.png)<br>

### Disclaimer
Overwatch is the property of Blizzard Entertainment including all aspects of Overwatch in terms of images, heroes, etc. This is a tool to improve the competitive community and I am not seeking any monetary gain from this application.