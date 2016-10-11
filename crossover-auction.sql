-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 10, 2016 at 05:08 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.5.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crossover-auction`
--

-- --------------------------------------------------------

--
-- Table structure for table `auction`
--

CREATE TABLE `auction` (
  `id` int(11) NOT NULL,
  `inven_id` int(11) NOT NULL,
  `auction_quantity` int(11) NOT NULL,
  `auction_status` varchar(1) NOT NULL,
  `auction_min_bid` int(11) NOT NULL,
  `auction_max_bid` int(11) NOT NULL,
  `auction_bidderid` varchar(255) NOT NULL,
  `auction_time` varchar(100) NOT NULL,
  `auction_time_extended` varchar(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auction`
--

INSERT INTO `auction` (`id`, `inven_id`, `auction_quantity`, `auction_status`, `auction_min_bid`, `auction_max_bid`, `auction_bidderid`, `auction_time`, `auction_time_extended`) VALUES
(3, 4, 3, '0', 12, 0, '0', '1468137861094', '0'),
(4, 4, 3, '0', 1000, 0, '0', '1468141226460', '0'),
(5, 4, 1, '0', 122, 0, '0', '1468141676943', '0'),
(6, 4, 1, '0', 1, 0, '0', '1468141933023', '0'),
(7, 4, 1, '0', 1000, 0, '0', '1468142905617', '0'),
(8, 1, 12, '0', 10000, 0, '0', '1468144031045', '0'),
(9, 1, 2, '0', 1, 0, '0', '1468144241427', '0'),
(10, 1, 1, '0', 12, 0, '0', '1468144370153', '0'),
(11, 1, 5, '0', 10000, 0, '', '1468146612431', '0'),
(12, 1, 3, '0', 3, 0, '', '1468146872690', '0'),
(13, 1, 3, '0', 3, 0, '', '1468147045405', '0'),
(14, 1, 1, '0', 111, 0, '', '1468147437804', '0'),
(15, 1, 3, '0', 100, 0, '', '1468147558090', '0'),
(16, 1, 5, '0', 1000, 0, '', '1468149064565', '0'),
(17, 1, 5, '0', 500, 0, '', '1468149170703', '0'),
(18, 1, 10, '0', 100, 0, '', '1468149269337', '0'),
(19, 1, 5, '0', 100, 0, '', '1468149375551', '0'),
(20, 1, 10, '0', 1000, 1000, 'ramarahmanda', '1468150485303', '0'),
(21, 2, 15, '0', 1000, 1000, 'rahmanda', '1468150889576', '0'),
(22, 2, 1, '0', 100, 100, 'ramarahmanda', '1468151103770', '0'),
(23, 2, 2, '0', 100, 100, 'ramarahmanda', '1468151351301', '0'),
(24, 3, 1, '0', 150, 150, 'ramarahmanda', '1468151542348', '0'),
(25, 5, 5, '0', 199, 200, 'rama', '1468151847776', '0'),
(26, 4, 2, '0', 100, 102, 'rama', '1468153062548', '1468153159982'),
(27, 1, 1, '0', 100, 0, '', '1468153611016', '0'),
(28, 2, 3, '0', 100, 0, '', '', '0'),
(29, 1, 1, '0', 100, 0, '', '1468153827408', '0'),
(30, 2, 2, '0', 100, 0, '', '', '0'),
(31, 1, 1, '0', 22, 233, 'rama', '1468154051075', '0'),
(32, 2, 2, '0', 22, 235, 'rama', '1468154139819', '0'),
(33, 1, 2, '0', 100, 255, 'ramarahmanda', '1468154627059', '1468154713823'),
(34, 2, 5, '0', 100, 256, 'ramarahmanda', '1468154893399', '0'),
(35, 1, 50, '0', 10, 0, '', '1468155000172', '0'),
(36, 1, 5, '0', 10, 0, '', '1468155394200', '0'),
(37, 2, 1, '0', 5, 250, 'rama', '1468155484840', '1468155566301'),
(38, 1, 5, '0', 55, 251, 'rama', '1468155613911', '1468155695666'),
(39, 1, 50, '0', 100, 250, 'rama', '1468155724821', '0'),
(40, 2, 1, '0', 2, 158, 'rama', '1468155814309', '1468155899891'),
(41, 1, 1000, '0', 20, 150, 'rama', '1468155925001', '0'),
(42, 2, 5, '0', 150, 0, '', '1468156014416', '0'),
(43, 1, 100, '0', 100, 106, 'ramarahmanda', '1468156171675', '1468156258552'),
(44, 2, 21, '0', 250, 256, 'rama', '1468156268936', '0'),
(45, 4, 15, '0', 100, 101, 'ramarahmanda', '1468156383396', '0'),
(46, 4, 1500, '0', 200, 205, 'rama', '1468156744274', '0'),
(47, 2, 55, '0', 200, 2500, 'rama', '1468156833638', '0'),
(48, 2, 450, '0', 50, 52, 'ramarahmanda', '1468156923396', '0'),
(49, 1, 2500, '0', 500, 501, 'ramarahmanda', '1468157345281', '1468157427768'),
(50, 2, 85, '0', 100, 25002, 'rama', '1468157435469', '1468157522621'),
(51, 5, 1040, '0', 1000, 1000, 'ddddasdqweqe', '1468157636185', '0'),
(52, 4, 2100, '0', 1000, 6000, 'rama', '1468157726181', '1468157808068');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `jwt` varchar(355) NOT NULL,
  `status` varchar(1) NOT NULL,
  `coin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `jwt`, `status`, `coin`) VALUES
('asdadasdsadada', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZGFkYXNkc2FkYWRhIiwiaWF0IjoxNDY4MTU2MTQyLCJleHAiOjE0NjgxNzQxNDJ9.oZUDnV06NCs70KuyqvO2dAPpe_icrN9GPC_lKiiWCqs', '1', 1000),
('asdasdasdasd', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZGFzZGFzZGFzZCIsImlhdCI6MTQ2ODE1NDU5OCwiZXhwIjoxNDY4MTcyNTk4fQ.4m3if4HWmUsYdpPOsdZ6PAdANyjDRKMM2rubLqythTE', '1', 1000),
('asdasdasddd', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZGFzZGFzZGRkIiwiaWF0IjoxNDY4MTU3MzIzLCJleHAiOjE0NjgxNzUzMjN9.A2pTOyDeBxvJg85rB1dmzThE4MzT-z7YMkGn_F9Mbxk', '1', 1000),
('ddddasdqweqe', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRkZGRhc2Rxd2VxZSIsImlhdCI6MTQ2ODE1NzY2MSwiZXhwIjoxNDY4MTc1NjYxfQ.Zc3L_88gNQmKEHcvoqJUEuXiqKyOsEsbl0yopSb3Ug4', '1', 0),
('rahmanda', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaG1hbmRhIiwiaWF0IjoxNDY4MTU0NjU4LCJleHAiOjE0NjgxNzI2NTh9.vQmZbS6YNZSAYvoFb9Vdr-HXqjfZ5-M6c-AnczBvOlo', '1', 1000),
('rama', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWEiLCJpYXQiOjE0NjgxNTc3MzcsImV4cCI6MTQ2ODE3NTczN30.JIwHKtbG49uHclKggSGzD1prmuIKKI7pTKAsIFsR92M', '1', 22228),
('ramarahmanda', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWFyYWhtYW5kYSIsImlhdCI6MTQ2ODE1NzYxMCwiZXhwIjoxNDY4MTc1NjEwfQ.ozlSAKIobasAhK-aATfSPuSd0BBo5EUh_UMQreoQt_8', '1', 6345);

-- --------------------------------------------------------

--
-- Table structure for table `users_inventory`
--

CREATE TABLE `users_inventory` (
  `id` int(11) NOT NULL,
  `inven_name` varchar(255) NOT NULL,
  `inven_quantity` int(11) NOT NULL,
  `inven_image` varchar(255) NOT NULL,
  `inven_owner` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_inventory`
--

INSERT INTO `users_inventory` (`id`, `inven_name`, `inven_quantity`, `inven_image`, `inven_owner`) VALUES
(1, 'bread', 4292, '/assets/bread.png', 'rama'),
(2, 'carrot', 20, '/assets/carrot.png', 'rama'),
(3, 'diamond', 0, '/assets/diamond.png', 'rama'),
(4, 'bread', 2629, '/assets/bread.png', 'ramarahmanda'),
(5, 'carrot', 5, '/assets/carrot.png', 'ramarahmanda'),
(6, 'diamond', 2, '/assets/diamond.png', 'ramarahmanda'),
(7, 'bread', 30, '/assets/bread.png', 'asdasdasdasd'),
(8, 'carrot', 18, '/assets/carrot.png', 'asdasdasdasd'),
(9, 'diamond', 1, '/assets/diamond.png', 'asdasdasdasd'),
(10, 'bread', 30, '/assets/bread.png', 'asdadasdsadada'),
(11, 'carrot', 18, '/assets/carrot.png', 'asdadasdsadada'),
(12, 'diamond', 1, '/assets/diamond.png', 'asdadasdsadada'),
(13, 'bread', 30, '/assets/bread.png', 'asdasdasddd'),
(14, 'carrot', 18, '/assets/carrot.png', 'asdasdasddd'),
(15, 'diamond', 1, '/assets/diamond.png', 'asdasdasddd'),
(16, 'bread', 30, '/assets/bread.png', 'ddddasdqweqe'),
(17, 'carrot', 1058, '/assets/carrot.png', 'ddddasdqweqe'),
(18, 'diamond', 1, '/assets/diamond.png', 'ddddasdqweqe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auction`
--
ALTER TABLE `auction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `users_inventory`
--
ALTER TABLE `users_inventory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inven_owner` (`inven_owner`),
  ADD KEY `inven_owner_2` (`inven_owner`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auction`
--
ALTER TABLE `auction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `users_inventory`
--
ALTER TABLE `users_inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
