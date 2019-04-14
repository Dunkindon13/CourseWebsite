# Course Website

<<<<<<< HEAD
This full-fledged project, which uses the MVC design pattern, includes a front-end(Angular), back-end(PHP) and database(MySQL). It features a navbar, separate logins for teachers and students, guards, announcements board, assignments page(current and submitted) and the ability for teachers to add/edit announcements and assignments.

## Front-End

The front-end is based on the Course Website API, using Angular (https://github.com/angular/angular-cli, https://angular.io/) as the framework and Angular Material (https://material.angular.io/) to stylize. Upon loading the home page, a user has the ability to see the announcements board and login in to their student/teacher account. Should a user try to access a page forbidden to them, the guard implemented will kindly redirect them to their respective page/login page, depending on whether they are logged in or not.

## Back-End

The project's back end uses PHP(https://www.php.net/) to receive, process, validate and send out requests based on form data, http requests and pull the corresponding data stored on the database.

## Database

The project's database uses MySQL(https://dev.mysql.com/doc/) made up of several tables, including a table for users, roles, announcements, assignments, courses and submitted assignments.

## Special Features

The project featues several enhancements designed to either beautify and/or optimize the UI and UX for the user.
These include: A navbar, stepper, date picker and assignments marked as "Read". 

## Languages Used

1) PHP
2) TypeScript/JavaScript
3) HTML/CSS

=======
This full-fledged project, which uses the MVC design pattern, includes an API, front-end(Angular), back-end(PHP) and database(MySQL). It features a navbar, separate logins for teachers and students, guards, pipes, announcements board, assignments page(current and submitted) and the ability for teachers to add/edit announcements and assignments.

## API End Points

By default, the API launches to port 4200.

**GET**

* */api/connect*
* */api/readAnnouncements/*
* */api/readAssignments/*
* */api/readSubmittedAssignments/*
* */api/submitAssignment/*

**POST**

* */api/addAssignment* expects a JSON object with:
  * title (string)
  * releaseDate (Date)
  * dueDate (Date)
  * body (string)
  
* */api/submitAssignment* expects a JSON object with:
  * Assignment ID (string)
  * Student ID (number)
  * Date (Date)
  * Submission (Form Data)

## Front-End

The front-end is based on the Course Website API, using Angular (https://github.com/angular/angular-cli, https://angular.io/) as the framework and Angular Material (https://material.angular.io/) to stylize. Upon loading the home page, a user has the ability to see the announcements board and login in to their student/teacher account. Should a user try to access a page forbidden to them, the guard implemented will kindly redirect them to their respective page/login page, depending on whether they are logged in or not.

## Back-End

The project's back end uses PHP(https://www.php.net/) to receive, process, validate and send out requests based on form data, http requests and pull the corresponding data stored on the database.

## Database

The project's database uses MySQL(https://dev.mysql.com/doc/) made up of several tables, including a table for users, roles, announcements, assignments, courses and submitted assignments.

## Special Features

The project featues several enhancements designed to either beautify and/or optimize the UI and UX for the user.
These include: A navbar, stepper, date picker, custom pipe(to order announcements by most recent date) and assignments marked as "Read". 

## Languages Used

1) PHP
2) TypeScript/JavaScript
3) HTML/CSS
>>>>>>> master
