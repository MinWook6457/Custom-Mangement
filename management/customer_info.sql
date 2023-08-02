CREATE DATABASE IF NOT EXISTS management;

use management;

CREATE TABLE customer_info(                               
  id INT(11) NOT NULL AUTO_INCREMENT,                 
  name VARCHAR(20) NOT NULL,                          
  birthday VARCHAR(20) NOT NULL,
  gender VARCHAR(20) NOT NULL,
  job VARCHAR(20) NOT NULL,
  CONSTRAINT customer_pk PRIMARY KEY(id)             
)default character set utf8 collate utf8_general_ci;

insert into customer_info values (1,'김민욱','000406','남자','대학생');
insert into customer_info values (2,'백진겸','000710','남자','대학생');

select * from customer_info;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;

