-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:81
-- Generation Time: Apr 10, 2019 at 12:27 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coursewebsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` int(11) NOT NULL,
  `teacherID` int(11) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(128) NOT NULL,
  `body` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `teacherID`, `date`, `title`, `body`) VALUES
(1, 2, '2018-01-10', 'Semester Starts Today', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet ex congue luctus semper. Aenean mattis erat sem, id sodales felis iaculis lobortis. In orci leo, bibendum non est nec, auctor dapibus lectus. Quisque porttitor lorem quam, sed dignissim magna ornare in. Nam accumsan velit a libero vehicula, et tempus mauris sodales. Donec ac ultricies enim. Duis non ante imperdiet, interdum tellus a, placerat enim. In scelerisque tortor at nunc placerat, at pharetra nisl luctus.'),
(2, 3, '2019-03-08', 'Classes Cancelled Due to Inclement Weather', 'Sed ornare mauris sit amet sapien placerat, sagittis finibus felis suscipit. Duis interdum venenatis erat ac lobortis. Fusce elementum viverra mi sit amet placerat. Fusce malesuada purus vel dui sollicitudin, in luctus velit tincidunt. In ut ex nisl.'),
(3, 1, '2019-03-27', 'Website Down Due to Routine Maintenance', 'Etiam ac dapibus nulla. Maecenas vel risus quis purus accumsan pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mi nec est euismod vestibulum. Fusce ut iaculis libero. Vivamus sed auctor ligula, nec ultrices dui. Sed quis condimentum lacus.'),
(4, 4, '2019-04-07', 'Exams Starting This Week', 'Duis leo orci, pellentesque nec elementum ac, placerat eget tortor. Sed sapien felis, porta et sagittis non, convallis quis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique quis mauris ac consectetur. Maecenas pretium nibh dolor, in mollis nisi blandit vel.'),
(5, 2, '2019-04-10', 'Update to Anti-Plagirism Policy', 'Proin non enim a ipsum iaculis tempus. Vivamus volutpat, sem sit amet elementum imperdiet, nisi sapien dapibus lectus, at tristique erat sem in enim. Maecenas ornare risus ac urna consequat mattis. Nam quis ligula lacinia, tristique sem at, tristique metus. Nulla faucibus ex id suscipit auctor. Aliquam ut dictum lorem. Sed tincidunt viverra enim, at facilisis tellus rutrum vel.');

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `teachercopy` tinyint(1) NOT NULL,
  `class` varchar(8) NOT NULL,
  `releaseDate` date NOT NULL,
  `dueDate` date NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `coursePercentage` double NOT NULL,
  `studentGrade` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignments`
-- Note: If studentGrade == -1, assignment is unsubmitted. If studentGrade == -2, assignment is submitted but not yet graded.

INSERT INTO `assignments` (`id`, `userid`, `teachercopy`, `class`, `releaseDate`, `dueDate`, `title`, `body`, `coursePercentage`, `studentGrade`) VALUES
(1, 1, 0, 'COMP201', '2019-01-01', '2019-02-01', 'Assignment1', 'This is the first Assignment', 20, 59),
(1, 1, 1, 'COMP201', '2019-01-01', '2019-02-01', 'Assignment1', 'This is the first Assignment', 20, 83),
(1, 2, 0, 'COMP201', '2019-01-01', '2019-02-01', 'Assignment1', 'This is the first Assignment', 20, 90),
(1, 3, 0, 'COMP201', '2019-01-01', '2019-02-01', 'Assignment1', 'This is the first Assignment', 20, 75),
(1, 4, 0, 'COMP201', '2019-01-01', '2019-02-01', 'Assignment1', 'This is the first Assignment', 20, 72),
(2, 1, 0, 'COMP201', '2019-03-25', '2019-04-15', 'Build A Fully-Functioning Website', 'Aliquam feugiat nisl ac orci mattis, in viverra arcu auctor. Aenean ac velit posuere, dictum est tristique, condimentum dui. Ut vitae magna eget est ornare tempus quis at velit. Nunc fringilla diam risus, sit amet scelerisque magna placerat hendrerit.', 30, -2),
(2, 1, 1, 'COMP201', '2019-03-25', '2019-04-15', 'Build A Fully-Functioning Website', 'Aliquam feugiat nisl ac orci mattis, in viverra arcu auctor. Aenean ac velit posuere, dictum est tristique, condimentum dui. Ut vitae magna eget est ornare tempus quis at velit. Nunc fringilla diam risus, sit amet scelerisque magna placerat hendrerit.', 30, -1),
(2, 2, 0, 'COMP201', '2019-03-25', '2019-04-15', 'Build A Fully-Functioning Website', 'Aliquam feugiat nisl ac orci mattis, in viverra arcu auctor. Aenean ac velit posuere, dictum est tristique, condimentum dui. Ut vitae magna eget est ornare tempus quis at velit. Nunc fringilla diam risus, sit amet scelerisque magna placerat hendrerit.', 30, -1),
(2, 3, 0, 'COMP201', '2019-03-25', '2019-04-15', 'Build A Fully-Functioning Website', 'Aliquam feugiat nisl ac orci mattis, in viverra arcu auctor. Aenean ac velit posuere, dictum est tristique, condimentum dui. Ut vitae magna eget est ornare tempus quis at velit. Nunc fringilla diam risus, sit amet scelerisque magna placerat hendrerit.', 30, -1),
(2, 4, 0, 'COMP201', '2019-03-25', '2019-04-15', 'Build A Fully-Functioning Website', 'Aliquam feugiat nisl ac orci mattis, in viverra arcu auctor. Aenean ac velit posuere, dictum est tristique, condimentum dui. Ut vitae magna eget est ornare tempus quis at velit. Nunc fringilla diam risus, sit amet scelerisque magna placerat hendrerit.', 30, -1),
(3, 1, 0, 'DATA301', '2019-03-01', '2019-04-01', 'Database Questionnaire', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 15, 65),
(3, 2, 0, 'DATA301', '2019-03-01', '2019-04-01', 'Database Questionnaire', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 15, 75),
(3, 2, 1, 'DATA301', '2019-03-01', '2019-04-01', 'Database Questionnaire', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 15, 85),
(3, 3, 0, 'DATA301', '2019-03-01', '2019-04-01', 'Database Questionnaire', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 15, 89),
(3, 4, 0, 'DATA301', '2019-03-01', '2019-04-01', 'Database Questionnaire', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 15, 82),
(4, 1, 0, 'DATA301', '2019-04-15', '2019-04-29', 'Database Joining and Transactions', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 35, -1),
(4, 2, 0, 'DATA301', '2019-04-15', '2019-04-29', 'Database Joining and Transactions', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 35, -1),
(4, 2, 1, 'DATA301', '2019-04-15', '2019-04-29', 'Database Joining and Transactions', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 35, -1),
(4, 3, 0, 'DATA301', '2019-04-15', '2019-04-29', 'Database Joining and Transactions', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 35, -1),
(4, 4, 0, 'DATA301', '2019-04-15', '2019-04-29', 'Database Joining and Transactions', 'Morbi molestie pretium purus at finibus. Fusce ultricies neque at feugiat semper. Morbi tincidunt nisi nec libero rhoncus venenatis.', 35, -1);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `username`, `password`, `name`) VALUES
(1, 'student1', '12345678', 'Dylan Doe'),
(2, 'student2', '12345678', 'James Jackson'),
(3, 'student3', '12345678', 'Sarah Smith'),
(4, 'student4', '12345678', 'Miranda Miller');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `username`, `password`, `name`) VALUES
(1, 'teacher1', '12345678', 'Alan Adams'),
(2, 'teacher2', '12345678', 'Bryan Brown'),
(3, 'teacher3', '12345678', 'Carol Carter'),
(4, 'teacher4', '12345678', 'Diana Doughty');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacherid` (`teacherID`);

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`id`,`userid`,`teachercopy`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `announcements`
--
ALTER TABLE `announcements`
  ADD CONSTRAINT `teacherid` FOREIGN KEY (`teacherID`) REFERENCES `teachers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
