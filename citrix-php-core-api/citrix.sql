-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2020 at 05:50 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `citrix`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `application_id` int(45) NOT NULL,
  `standard_type_id_fk` varchar(100) NOT NULL,
  `application_type` varchar(50) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `your_name` varchar(100) NOT NULL,
  `position` varchar(50) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `how_did_you_hear` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`application_id`, `standard_type_id_fk`, `application_type`, `company_name`, `your_name`, `position`, `contact`, `email`, `how_did_you_hear`) VALUES
(7, '5', 'new', 'asdf', 'asdf', 'sadf', 'asdf', 'asdf', ''),
(8, '6', 'new', 'sdf', 'sdf', 'sadf', 'sadf', 'sadf', 'sadf');

-- --------------------------------------------------------

--
-- Table structure for table `standard_type`
--

CREATE TABLE `standard_type` (
  `standard_type_id` int(11) NOT NULL,
  `sia_acs` varchar(45) DEFAULT NULL,
  `ccas_passport` varchar(45) DEFAULT NULL,
  `nsi_gold` varchar(45) DEFAULT NULL,
  `iso_nine_thousand_one` varchar(45) DEFAULT NULL,
  `iso_fourteen_thousand_one` varchar(45) DEFAULT NULL,
  `iso_fourty_five_thousand_one` varchar(45) DEFAULT NULL,
  `investor_in_people` varchar(45) DEFAULT NULL,
  `safe_contractor` varchar(45) DEFAULT NULL,
  `construction_line` varchar(45) DEFAULT NULL,
  `builders_profile` varchar(45) DEFAULT NULL,
  `achilles` varchar(45) DEFAULT NULL,
  `sisqs` varchar(45) DEFAULT NULL,
  `ssip` varchar(45) DEFAULT NULL,
  `chas` varchar(45) DEFAULT NULL,
  `smas` varchar(45) DEFAULT NULL,
  `competent_health_and_safety_advisor` varchar(45) DEFAULT NULL,
  `cdm_cordinator` varchar(45) DEFAULT NULL,
  `fire_risk_aasessment` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `standard_type`
--

INSERT INTO `standard_type` (`standard_type_id`, `sia_acs`, `ccas_passport`, `nsi_gold`, `iso_nine_thousand_one`, `iso_fourteen_thousand_one`, `iso_fourty_five_thousand_one`, `investor_in_people`, `safe_contractor`, `construction_line`, `builders_profile`, `achilles`, `sisqs`, `ssip`, `chas`, `smas`, `competent_health_and_safety_advisor`, `cdm_cordinator`, `fire_risk_aasessment`) VALUES
(5, '', NULL, '', '', '', '', '', '1', '', '1', '', '1', '', '1', '', '', '', ''),
(6, '1', NULL, '1', '', '1', '', '1', '', '', '', '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`application_id`);

--
-- Indexes for table `standard_type`
--
ALTER TABLE `standard_type`
  ADD PRIMARY KEY (`standard_type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `application_id` int(45) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `standard_type`
--
ALTER TABLE `standard_type`
  MODIFY `standard_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
