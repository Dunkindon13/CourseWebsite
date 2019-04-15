# Course Website

This full-fledged project, which uses the MVC design pattern, includes an API, front-end(Angular), back-end(PHP) and database(MySQL). It features a navbar, separate logins for teachers and students, pipes, announcements board, assignments page(ongoing, completed and upcoming) and the ability for teachers to add/edit announcements and assignments and add/edit grades on assignments. Students can view all assignments and submit assignments.

## API End Points

By default, the API launches to port 4200.

**GET**

* */api/connect* 
* */api/readAnnouncements/*
* */api/readAssignments/*
* */api/readSubmittedAssignments/*

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
  
 * */api/addAssignment/* expects a JSON object with:
   * title (string)
   * body (string)
   * dueDate (Date)
   * releaseDate (Date)
   * weight (number)
  
  * */api/updateGrade/* expects a JSON object with:
    * Assignment ID (string)
    * Student ID (number)
    * New Grade (number)
    
   * */api/addAnnouncement/* expects a JSON object with:
     * Teacher ID (number)
     * date (Date)
     * title (string)
     * body (string)

## Front-End

The front-end is based on the Course Website API, using Angular (https://github.com/angular/angular-cli, https://angular.io/) as the framework and Angular Material (https://material.angular.io/) to stylize. Upon loading the home page, a user has the ability to see the announcements board and login in to their student/teacher account.

## Back-End

The project's back end uses PHP(https://www.php.net/) to receive, process, validate and send out requests based on form data, http requests and pull the corresponding data stored on the database.

## Database

The project's database uses MySQL(https://dev.mysql.com/doc/) made up of several tables, including a table for users, announcements, assignments and submitted assignments.

## Special Features

The project featues several enhancements designed to either beautify and/or optimize the UI and UX for the user.
These include: A navbar, date picker and a custom pipe(to order announcements by most recent date). 

## Languages Used

1) PHP
2) TypeScript/JavaScript
3) HTML/CSS

