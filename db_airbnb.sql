-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `room_id` int NOT NULL,
  `checkin` datetime NOT NULL,
  `checkout` datetime NOT NULL,
  `guests` int NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `user_id` (`user_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `booking` (`booking_id`, `user_id`, `room_id`, `checkin`, `checkout`, `guests`) VALUES
(1,	2,	2,	'2023-03-20 20:01:55',	'2023-03-20 20:01:55',	4),
(2,	1,	2,	'2023-03-20 20:02:10',	'2023-03-20 20:02:10',	12),
(3,	2,	1,	'2023-03-20 20:02:21',	'2023-03-20 20:02:21',	900);

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `room_id` int NOT NULL,
  `comment_date` datetime DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `star_rating` int DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `comment` (`comment_id`, `user_id`, `room_id`, `comment_date`, `content`, `star_rating`) VALUES
(1,	1,	1,	'2023-03-20 20:00:49',	'it\'s flat bro ',	5),
(2,	2,	2,	'2023-03-20 20:01:34',	'oh, that\'s hot, that\'s hot',	5);

DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `location` (`location_id`, `location_name`, `city`, `country`, `picture`) VALUES
(1,	'moon',	'solar system',	'milky way ',	'moon picture'),
(2,	'sun',	'solar system',	'milky way',	NULL),
(3,	'q1',	'hcm',	'vn',	'ayooooo');

DROP TABLE IF EXISTS `room`;
CREATE TABLE `room` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `location_id` int DEFAULT NULL,
  `room_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guests` int DEFAULT NULL,
  `bedrooms` int DEFAULT NULL,
  `beds` int DEFAULT NULL,
  `bathrooms` int DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int NOT NULL,
  `washer` tinyint DEFAULT NULL,
  `iron` tinyint DEFAULT NULL,
  `television` tinyint DEFAULT NULL,
  `air_con` tinyint DEFAULT NULL,
  `wifi` tinyint DEFAULT NULL,
  `kitchen` tinyint DEFAULT NULL,
  `parking_lot` tinyint DEFAULT NULL,
  `pool` tinyint DEFAULT NULL,
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`room_id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `room_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `room` (`room_id`, `location_id`, `room_name`, `guests`, `bedrooms`, `beds`, `bathrooms`, `description`, `price`, `washer`, `iron`, `television`, `air_con`, `wifi`, `kitchen`, `parking_lot`, `pool`, `image`) VALUES
(1,	1,	'deluxe earth view doublebed ',	2,	1,	1,	1,	'earth view ',	9999999,	0,	0,	1,	1,	1,	0,	1,	0,	'aaaayooooo'),
(2,	2,	'full solar system view king size bed',	4,	2,	2,	2,	'man not hot',	10,	1,	1,	1,	0,	1,	1,	1,	0,	'pictureeeee');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`user_id`, `name`, `email`, `password`, `phone`, `birthday`, `gender`, `role`, `avatar`) VALUES
(1,	'luanminh',	'luan43@mail.mail',	'1234',	'0909-000-999',	'yesterday once more',	'apache',	'admin',	NULL),
(2,	'minhluan',	'luan4334@mail.mail',	'1234',	'9090-999-000',	'1/1/0',	'attack helicopter',	'guest',	NULL);

-- 2023-04-06 09:52:44
