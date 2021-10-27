create database if not exists backend;
use backend;

create table timeLine(orderId char(100) primary key,userId char(100),vehicleId char(20),userName char(15),vehicleType int,inTime timestamp default current_timestamp,floorNo int);



create table block1(floorNo int primary key,numberOfOccupied bigint default 0,floorType int);


create table history(orderId char(100) primary key,userId char(100),vehicleId char(20),userName char(100),vehicleType int,inTime timestamp default current_timestamp,outTime timestamp default current_timestamp,floorNo int);



#drop table vehicleCategory;

create table vehicleCategory(numberOfWheels bigint,fare double);

SET SQL_SAFE_UPDATES = 0;

create table slip(orderId char(100),userId char(100),
vehicleId char(100),userName char(100),vehicleType int,
inTime timestamp default current_timestamp,outTime timestamp default current_timestamp,fare bigint default 0);


insert into vehicleCategory value (1,.25);

select * from history;

#drop table history;

SELECT dateadd(day,datediff(day,0,GETDATE()),0);

SELECT * FROM timeLine order by inTime DESC;
#WHERE DATEDIFF(date(timeLine.inTime) ,current_date) = -1;

select * from history order by outTime DESC;

show tables;

drop table users;

select * from slip;

insert into timeLine(orderId,userId,vehicleId,userName,vehicleType,floorNo) values("f23","helloooo","sdfg","sd",1,1);

select * from timeLine;

select count(distinct orderId) as count from history where DATEDIFF(date(history.inTime),date(current_date))>=-1;

#delete from  where 1;

select * from history;

select * from block1;

insert into block1 values (1,0,1),(2,0,1),(3,0,2),(4,0,2);


#drop trigger incrementFloor;

show triggers;

delimiter #;

create trigger addVehicle after insert on timeLine for each row
begin 
insert into history(orderId,userId,vehicleId,userName,vehicleType,floorNo) 
values(new.orderId,new.userId,new.vehicleId,new.userName,new.vehicleType,new.floorNo);
end;
delimiter;


use backend;


delimiter #;

create trigger incrementFloor after insert on timeline for each row
begin
update block1 set block1.numberOfOccupied=block1.numberOfOccupied+1
where block1.floorNo=new.floorNo;
end;

delimiter;



delimiter #;

create trigger addToSlip after insert on timeline for each row
begin
insert into slip(orderId,userId,vehicleId,userName,vehicleType) 
values(new.orderId,new.userId,new.vehicleId,new.userName,new.vehicleType);
end;

delimiter;



delimiter #;

create trigger bill after delete on timeline for each row
begin
update slip set outTime=current_timestamp(),fare=(select timestampdiff(minute,slip.inTime,slip.outTime)) where slip.orderId=old.orderId;
end;

delimiter;

