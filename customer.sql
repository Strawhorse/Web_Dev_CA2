-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2023 at 05:12 PM
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
('John Bracken', 'seanobrachain@gmail.com', 'Return of the Living Dead', 3, '2023-04-21'),
('Virgil Bracken', 'weeman101@gmail.com', 'T2 Trainspotting', 4, '2023-04-27'),
('JinJing Li', 'peargc313@gmail.com', 'Fight Club', 3, '2023-04-26'),
('John Bracken', 'seanobrachain@gmail.com', 'Fight Club', 3, '2023-04-27'),
('John Bracken', 'strawhorse@gmail.com', 'Fight Club', 2, '2023-04-25'),
('Ben Dover', 'email@gmail.com', 'Return of the Living Dead', 4, '2023-04-20'),
('John Bracken', 'seanobrachain@gmail.com', 'Fight Club', 2, '2023-04-05'),
('JinJing Li', 'peargc313@gmail.com', 'Fight Club', 4, '2023-04-12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
