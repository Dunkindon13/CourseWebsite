-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:81
-- Generation Time: Apr 14, 2019 at 11:48 PM
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
(1, 2, '2019-01-10', 'Semester Starts Today', 'Whether you’re starting your first semester of college, or returning after a much-needed break, it’s time to start thinking about how you can put your best foot forward in the new school year.\r\nHere are a few tips to help you prepare for the start of the semester:\r\n1) Get organized.\r\n2) Buy or rent your textbooks before the first day of class.\r\n2) Adjust to a new schedule.\r\n3) Have a plan.\r\n4) Get involved.\r\n5) Making the extra effort to prepare for your first few weeks of school will help set the tone for a productive semester and put you on the right track towards achieving your goals.\r\nFor more tips on how to jumpstart the school year, click <a href=\"https://www.herzing.edu/blog/5-tips-help-you-prepare-new-semester\">here</a>.'),
(2, 1, '2019-02-08', 'Classes Cancelled Due to Inclement Weather', 'Who doesn’t love a snow day? All classes, tutorials and labs are cancelled and the University is CLOSED for today due to the impending snowstorm. Please stay indoors where it is safe and warm and don\'t forget to study.\r\nThe University will be open tomorrow and classes will resume as scheduled.\r\n'),
(3, 1, '2019-03-27', 'Website Down Due to Routine Maintenance', 'Due to an overwhelming amount of students submitting assignments at 11:59PM last night, the weak infrastructure of our website crashed and is currently being repaired. Please try to submit your assignment in advance in the future, so as not to tax our increasingly old website. \r\nPlease note: Practicing DDOS attacks on our website is absolutely illegal and will be met with severe consequences, once the culprit is found. You have been warned. '),
(4, 2, '2019-04-07', 'Exams Starting This Week', 'Please note that Exams will be starting tomorrow, Monday, April 8th, 2019. Exams end on Monday, April 22nd, 2019. Should you have a religious/work conflict, we are sorry but it is too late to submit a request for an alternate date. Should have been done 2 months ago.\r\nGood luck on your exams and enjoy your summer vacation!'),
(5, 1, '2019-04-10', 'Update to Anti-Plagiarism Policy', 'Just a notice to let all students know that starting with this upcoming exam season, Winter 2019, ALL smartwatches and activity trackers(Apple, Samsung, LG, Fitbit, Pebble, Huawei, Xiaomi, ASUS, Motorola, Mobvoi, Garmin, Fossil, Withings, etc.) are hereby BANNED and forbidden from being worn by any student during an exam. Smartwatches must be turned off and stowed in a backpack along with their smartphone while taking an exam. Should a student be caught wearing a smartwatch during an exam, an immediate zero will be given for that exam and the student will be subject to further consequences, pending the Dean\'s decision. \r\nDo yourself a favour this semester, don\'t bring your smartwatch to an exam. Period.');

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
(1, 'Simple Cashier Calculator', 'Create a cashier calculator using Java. Must include if/else statements, while/for loops, a GST/QST calculator and an items counter once at checkout.\r\nBonus: Use a switch statement and create a class Cashier.', '2019-01-01', '2019-02-01', 20),
(2, 'Shapes Using Stars', 'Create various shapes using asterisks/stars, such as a pyramid, rectangle, circle and hectagon.\r\nHINT: Use nested for loops.\r\nBonus: Create sequences of numbers using nested for loops.', '2019-02-02', '2019-02-28', 30),
(3, 'Tic Tac Toe Game', 'Create a simple Tic Tac Toe Game using PHP. Must include sessions, user input and variable computer AI difficulty.', '2019-03-01', '2019-04-18', 35),
(4, 'Front End', 'Ivamus posuere sem quis leo suscipit, id volutpat metus tristique. Nulla dictum nunc magna, a consequat eros efficitur at.', '2019-04-15', '2019-04-28', 15);

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
(2, 6, '2019-02-26', 'Aliquam auctor enim quis pulvinar porta. Quisque pharetra mollis justo eu consectetur. Pellentesque porttitor euismod ultrices. Curabitur lobortis dapibus risus at consectetur.', 82);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements_table`
--
ALTER TABLE `announcements_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `assignments_table`
--
ALTER TABLE `assignments_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
