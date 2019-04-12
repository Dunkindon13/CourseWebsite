-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:81
-- Generation Time: Apr 12, 2019 at 08:03 PM
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
-- Table structure for table `announcements_table`
--

CREATE TABLE `announcements_table` (
  `id` int(11) NOT NULL,
  `teacherID` int(11) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(128) NOT NULL,
  `body` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `announcements_table`
--

INSERT INTO `announcements_table` (`id`, `teacherID`, `date`, `title`, `body`) VALUES
(1, 2, '2019-01-10', 'Semester Starts Today', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet ex congue luctus semper. Aenean mattis erat sem, id sodales felis iaculis lobortis. In orci leo, bibendum non est nec, auctor dapibus lectus. Quisque porttitor lorem quam, sed dignissim magna ornare in. Nam accumsan velit a libero vehicula, et tempus mauris sodales. Donec ac ultricies enim. Duis non ante imperdiet, interdum tellus a, placerat enim. In scelerisque tortor at nunc placerat, at pharetra nisl luctus.'),
(2, 1, '2019-02-08', 'Classes Cancelled Due to Inclement Weather', 'Sed ornare mauris sit amet sapien placerat, sagittis finibus felis suscipit. Duis interdum venenatis erat ac lobortis. Fusce elementum viverra mi sit amet placerat. Fusce malesuada purus vel dui sollicitudin, in luctus velit tincidunt. In ut ex nisl.'),
(3, 1, '2019-03-27', 'Website Down Due to Routine Maintenance', 'Etiam ac dapibus nulla. Maecenas vel risus quis purus accumsan pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mi nec est euismod vestibulum. Fusce ut iaculis libero. Vivamus sed auctor ligula, nec ultrices dui. Sed quis condimentum lacus.'),
(4, 2, '2019-04-07', 'Exams Starting This Week', 'Duis leo orci, pellentesque nec elementum ac, placerat eget tortor. Sed sapien felis, porta et sagittis non, convallis quis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique quis mauris ac consectetur. Maecenas pretium nibh dolor, in mollis nisi blandit vel.'),
(5, 1, '2019-04-10', 'Update to Anti-Plagirism Policy', 'Proin non enim a ipsum iaculis tempus. Vivamus volutpat, sem sit amet elementum imperdiet, nisi sapien dapibus lectus, at tristique erat sem in enim. Maecenas ornare risus ac urna consequat mattis. Nam quis ligula lacinia, tristique sem at, tristique metus. Nulla faucibus ex id suscipit auctor. Aliquam ut dictum lorem. Sed tincidunt viverra enim, at facilisis tellus rutrum vel.'),
(6, 777, '2111-11-11', 'DummySQLInsert', 'Insert from dummy SQL'),
(7, 777, '2111-11-11', 'DummySQLInsert', 'Insert from dummy SQL');

-- --------------------------------------------------------

--
-- Table structure for table `assignments_table`
--

CREATE TABLE `assignments_table` (
  `id` int(11) NOT NULL,
  `subject` varchar(64) NOT NULL,
  `information` text NOT NULL,
  `release_date` date NOT NULL,
  `due_date` date NOT NULL,
  `grade_weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignments_table`
--

INSERT INTO `assignments_table` (`id`, `subject`, `information`, `release_date`, `due_date`, `grade_weight`) VALUES
(0, '$subject', '$information', '0000-00-00', '0000-00-00', 0),
(1, 'Front End', 'Nullam quis vulputate urna. Sed pellentesque, arcu id faucibus accumsan, ex tortor dictum arcu, eu molestie magna odio id nibh.', '2019-01-01', '2019-02-01', 20),
(2, 'Back End', 'Quisque at quam eu ligula rhoncus condimentum bibendum ac libero. Suspendisse in elit euismod, vestibulum turpis eu, pulvinar magna. In in hendrerit risus.', '2019-02-02', '2019-02-28', 30),
(3, 'Back End', 'Duis fringilla efficitur purus, eu fermentum arcu facilisis et. Nulla quis dictum quam, nec dapibus ipsum. Nullam ex erat, pulvinar ut dolor sit amet, semper rhoncus dolor. ', '2019-03-01', '2019-04-18', 35),
(4, 'Front End', 'Ivamus posuere sem quis leo suscipit, id volutpat metus tristique. Nulla dictum nunc magna, a consequat eros efficitur at.', '2019-04-15', '2019-04-28', 15),
(11, 'TESTbbb', 'TESTbbb', '2018-04-28', '2018-05-28', 80),
(13, 'History', 'History of Canada', '2019-04-11', '2019-04-18', 0),
(14, 'Math', 'Sample Math Assignment', '2019-04-11', '2019-04-18', 0),
(15, '', '', '0000-00-00', '0000-00-00', 0),
(16, 'Science', 'example', '2019-04-11', '2019-04-18', 0),
(17, '', '', '0000-00-00', '0000-00-00', 0),
(18, 'Math', 'Worksheet', '2019-04-11', '2019-04-18', 0),
(19, 'bmbvhvhv', 'blah', '2019-04-11', '2019-04-18', 0),
(20, '', '', '0000-00-00', '0000-00-00', 0),
(21, 'dfgdfgd', 'dfgdfgdfgdf', '2019-04-25', '2019-04-26', 0),
(22, 'Test', 'Does a blank record get produced?', '2019-04-11', '2019-04-18', 0);

-- --------------------------------------------------------

--
-- Table structure for table `read_announcements`
--

CREATE TABLE `read_announcements` (
  `announcement_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `submitted_assignments`
--

CREATE TABLE `submitted_assignments` (
  `assignment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `submission` longtext NOT NULL,
  `grade` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submitted_assignments`
--

INSERT INTO `submitted_assignments` (`assignment_id`, `student_id`, `date`, `submission`, `grade`) VALUES
(1, 3, '2019-02-01', 'Cras id velit felis. Donec sollicitudin orci eu libero congue, sed euismod magna euismod. Sed placerat tristique placerat. Proin id ligula finibus, viverra leo in, aliquam nulla. Integer et augue in nulla pharetra pellentesque. Praesent varius ultricies ipsum sit amet porttitor.', 75),
(1, 4, '2019-02-01', 'Cras id velit felis. Donec sollicitudin orci eu libero congue, sed euismod magna euismod. Sed placerat tristique placerat. Proin id ligula finibus, viverra leo in, aliquam nulla. Integer et augue in nulla pharetra pellentesque. Praesent varius ultricies ipsum sit amet porttitor.', 85),
(1, 5, '2019-01-31', 'Cras id velit felis. Donec sollicitudin orci eu libero congue, sed euismod magna euismod. Sed placerat tristique placerat. Proin id ligula finibus, viverra leo in, aliquam nulla. Integer et augue in nulla pharetra pellentesque. Praesent varius ultricies ipsum sit amet porttitor.', 95),
(1, 6, '2019-02-03', 'Cras id velit felis. Donec sollicitudin orci eu libero congue, sed euismod magna euismod. Sed placerat tristique placerat. Proin id ligula finibus, viverra leo in, aliquam nulla. Integer et augue in nulla pharetra pellentesque. Praesent varius ultricies ipsum sit amet porttitor.', 67.5),
(2, 3, '2019-02-27', 'Cras vel iaculis velit. Etiam faucibus mattis odio, eget pellentesque lorem volutpat at. Mauris posuere nisi eget ex eleifend venenatis. Vivamus feugiat augue orci, non ultrices elit placerat quis.', 72.6),
(2, 5, '2019-02-27', 'Curabitur sit amet turpis nec quam viverra elementum sed ac quam. Curabitur maximus condimentum tristique. Curabitur aliquet pharetra velit, non luctus mauris laoreet ut. Nam ut facilisis turpis.', 95.45),
(2, 6, '2019-02-26', 'Aliquam auctor enim quis pulvinar porta. Quisque pharetra mollis justo eu consectetur. Pellentesque porttitor euismod ultrices. Curabitur lobortis dapibus risus at consectetur.', 82),
(11, 4, '2018-04-29', 'Does this work?', 80),
(12, 3, '2018-04-28', 'Its a long established...', 80),
(12, 4, '2018-04-29', 'Does this work?', 80),
(15, 5, '2019-04-11', 'Hello Worldddddddddddddddddddd151551', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` varchar(1) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `username`, `password`, `name`) VALUES
(1, 't', 'teacher1', '12345678', 'Dylan Doe'),
(2, 't', 'teacher2', '12345678', 'James Jackson'),
(3, 's', 'student1', '12345678', 'Alan Allen'),
(4, 's', 'student2', '12345678', 'Bryan Bell'),
(5, 's', 'student3', '12345678', 'Sarah Smith'),
(6, 's', 'student4', '12345678', 'Miranda Miller');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements_table`
--
ALTER TABLE `announcements_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assignments_table`
--
ALTER TABLE `assignments_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `read_announcements`
--
ALTER TABLE `read_announcements`
  ADD PRIMARY KEY (`announcement_id`,`student_id`);

--
-- Indexes for table `submitted_assignments`
--
ALTER TABLE `submitted_assignments`
  ADD PRIMARY KEY (`assignment_id`,`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements_table`
--
ALTER TABLE `announcements_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
