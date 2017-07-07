CREATE DATABASE  IF NOT EXISTS `cleanwebsite` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cleanwebsite`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cleanwebsite
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `postid` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'The ID of the post in question. This ID is unique, and will link the post to it''s comments.',
  `title` varchar(45) DEFAULT '#NO_TITLE_DEFINED' COMMENT 'Title of post. Maximum character count of 45.',
  `authorid` int(10) unsigned DEFAULT '0' COMMENT 'Unique user ID of creator. This is linked with the users table.',
  `timestamp` int(14) unsigned DEFAULT '0' COMMENT 'Timestamp of post creation in milliseconds.',
  `media` varchar(45) DEFAULT 'media/undefined.jpg' COMMENT 'Address of header image. Maximum character count of 45.',
  `content` mediumtext COMMENT 'Content of the post, maximum character count of 65,535.',
  `comments` int(10) unsigned DEFAULT '0' COMMENT 'Number of comments.',
  PRIMARY KEY (`postid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='collection of posts for the main page of the website';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usergroups`
--

DROP TABLE IF EXISTS `usergroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usergroups` (
  `usergroupid` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Unique ID for the usergroup, to be used to identify the usergroup by an unsigned integer value.',
  `usergroup` varchar(45) DEFAULT '#NO_NAME_DEFINED' COMMENT 'Name of the usergroup.',
  `color` varchar(6) DEFAULT '606060' COMMENT 'Color of the usergroup in hexadecimal cleartext.',
  `canadmin` bit(1) NOT NULL DEFAULT b'0' COMMENT 'Boolean value for whether this usergroup can perform tasks at the administrator level. This will involve changing the style and layout of the website, aswell a changing other user''s usergroups. consider this as a root access value.',
  `canpost` bit(1) NOT NULL DEFAULT b'0' COMMENT 'Boolean value for whether users in the group may post content, not including comments, to the website.',
  `cancomment` bit(1) NOT NULL DEFAULT b'0' COMMENT 'Boolean value for whether users in this usergroup may comment on already posted content. This value may be true if canpost is false.',
  PRIMARY KEY (`usergroupid`),
  UNIQUE KEY `usergroup_UNIQUE` (`usergroup`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COMMENT='Table of usergroups, to determine permissions and aesthetic properties of users.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usergroups`
--

LOCK TABLES `usergroups` WRITE;
/*!40000 ALTER TABLE `usergroups` DISABLE KEYS */;
INSERT INTO `usergroups` VALUES (1,'Administrator','0079C4','','',''),(2,'Contributor','5ec400','\0','',''),(3,'Respected','bd00c4','\0','\0',''),(4,'User','606060','\0','\0',''),(5,'Banned','c40000','\0','\0','\0');
/*!40000 ALTER TABLE `usergroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userid` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID of the user in question. This ID is unique and will link a user to their posts and comments.',
  `username` varchar(45) NOT NULL COMMENT 'Username of the user, this shall be unique, and be used to authenticate the user, when associated with the password',
  `password` varchar(45) NOT NULL COMMENT 'Pasword of the user. Only a salted hash of a hash of the password will be stored in the database.',
  `email` varchar(45) DEFAULT NULL COMMENT 'Email address of the user. This will be used to reset passwords.',
  `joindate` int(14) unsigned DEFAULT '0' COMMENT 'Joindate of the user. This will have no other use than to display when the user joined.',
  `usergroupid` int(10) unsigned DEFAULT '4' COMMENT 'Usergroup of the user. This will determine what actions the user is able to perform, aswell as determine Aesthetic properties.',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='collection of users for the website';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ROOT','ROOT',NULL,0,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-07 11:40:24
