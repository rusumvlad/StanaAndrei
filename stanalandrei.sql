-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Gazda: localhost
-- Timp de generare: 20 Iun 2020 la 21:56
-- Versiune server: 5.6.12-log
-- Versiune PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Bază de date: `stanalandrei`
--
CREATE DATABASE IF NOT EXISTS `stanalandrei` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `stanalandrei`;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nume` varchar(250) NOT NULL,
  `Prenume` varchar(250) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `Mesaj` varchar(250) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `rezervare`
--

CREATE TABLE IF NOT EXISTS `rezervare` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nume` varchar(250) DEFAULT NULL,
  `Prenume` varchar(250) DEFAULT NULL,
  `Numar_Telefon` varchar(10) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Data` date DEFAULT NULL,
  `Nr_Persoane` int(11) DEFAULT NULL,
  `Nr_Zile` int(11) DEFAULT NULL,
  `Cort` int(11) DEFAULT NULL,
  `Pret` varchar(250) DEFAULT NULL,
  `Observatii` varchar(250) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
