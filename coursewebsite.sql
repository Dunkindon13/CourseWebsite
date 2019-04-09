-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:81
-- Generation Time: Apr 08, 2019 at 10:22 PM
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
(1, 2, '2018-01-10', 'Announcement 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet ex congue luctus semper. Aenean mattis erat sem, id sodales felis iaculis lobortis. In orci leo, bibendum non est nec, auctor dapibus lectus. Quisque porttitor lorem quam, sed dignissim magna ornare in. Nam accumsan velit a libero vehicula, et tempus mauris sodales. Donec ac ultricies enim. Duis non ante imperdiet, interdum tellus a, placerat enim. In scelerisque tortor at nunc placerat, at pharetra nisl luctus.'),
(2, 3, '2019-03-08', 'Announcement #2', 'Sed ornare mauris sit amet sapien placerat, sagittis finibus felis suscipit. Duis interdum venenatis erat ac lobortis. Fusce elementum viverra mi sit amet placerat. Fusce malesuada purus vel dui sollicitudin, in luctus velit tincidunt. In ut ex nisl.');

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `releaseDate` date NOT NULL,
  `dueDate` date NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `coursePercentage` double NOT NULL,
  `studentGrade` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  ADD PRIMARY KEY (`id`,`userid`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
