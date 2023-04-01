-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2023 at 10:42 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookings`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `movie` varchar(255) NOT NULL,
  `tickets` int(100) NOT NULL,
  `booking_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_name`, `email`, `movie`, `tickets`, `booking_date`) VALUES
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 1, '0000-00-00'),
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 1, '2023-03-21'),
('John', 'sean@gmail.com', 'Fight Club', 11, '2023-03-22'),
('John', 'sean@gmail.com', 'Fight Club', 1, '2023-03-28'),
('Jinh', 'seufdis@dfisd.com', 'Fight Club', 1, '2023-03-21'),
('John Bracken', 'sean@gmail.com', 'Shaun of the Dead', 1, '2023-12-12'),
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 2, '2023-03-25'),
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 2, '2023-03-25'),
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 2, '2023-03-25'),
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 2, '2023-03-25'),
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 2, '2023-03-25'),
('kj', 'peargc313@gmail.com', 'Fight Club', 2, '2023-03-24'),
('kj', 'peargc313@gmail.com', 'Fight Club', 2, '2023-03-23'),
('kj', 'peargc313@gmail.com', 'Jaws', 3, '2023-03-23'),
('Goran Hurtic', 'Bigbadman@yahoo.com', 'Reservoir Dogs', 3, '2023-03-25'),
('Goran Hurtic', 'peargc313@gmail.com', 'Fight Club', 5, '2023-03-30'),
('John Bracken', 'strawhorse@gmail.com', 'Closer', 2, '2023-03-31'),
('John Bracken', 'strawhorse@gmail.com', 'Ghostbusters', 1, '2023-03-23');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
