   /*Generation Time*/
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Database: `authentification`
--
CREATE DATABASE authentification;
CREATE USER 'root'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON authentification.* TO 'root'@'%' WITH GRANT OPTION;
-- --------------------------------------------------------

--
--
-- Table structure for table `Users`
--

CREATE TABLE Users(
   id VARCHAR(50),
   firstName VARCHAR(50) ,
   lastName VARCHAR(50) ,
   email VARCHAR(50) unique,
   password VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

INSERT INTO Users (id,firstName,lastName,email,password,createdAt, updatedAt)
VALUES (1, 'kaushik', 'Kota', 'abraham.salimov@gmail.com', '1', '0', '0' );