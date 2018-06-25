CREATE TABLE
  States
    (StateID INT NOT NULL IDENTITY(1,1)
	,[Name] NVARCHAR(64) NOT NULL
	,Abbreviation NVARCHAR(2) NOT NULL
	,CONSTRAINT
	   PK_States
	 PRIMARY KEY CLUSTERED
	   (StateID ASC));

CREATE TABLE
  People
    (PersonID INT NOT NULL IDENTITY(1,1)
	,[Name] NVARCHAR(128) NOT NULL
	,StreetAddress NVARCHAR(256) NULL
	,City NVARCHAR(128) NULL
	,StateID INT NULL REFERENCES States (StateID)
	,Zip NVARCHAR(32) NULL
	,Age INT NULL
	,PictureUrl NVARCHAR(512) NULL
	,CONSTRAINT
	   PK_People
	 PRIMARY KEY CLUSTERED
	   (PersonID ASC));

CREATE TABLE
  Interests
    (InterestID INT NOT NULL IDENTITY(1,1)
	,[Name] NVARCHAR(512) NOT NULL
	,CONSTRAINT
	   PK_Interests
	 PRIMARY KEY CLUSTERED
	   (InterestID ASC));

CREATE TABLE
  PersonInterests
    (PersonID INT NOT NULL REFERENCES People (PersonID)
	,InterestID INT NOT NULL REFERENCES Interests (InterestID)
	,CONSTRAINT
	   PK_PersonInterests
	 PRIMARY KEY CLUSTERED
	   (PersonID ASC
	   ,InterestID ASC));

CREATE TABLE
  [Configurations]
    (ConfigurationID INT NOT NULL PRIMARY KEY DEFAULT 1
	,MillisecondDelay INT NOT NULL DEFAULT 0);
	
INSERT INTO
  [Configurations]
    (ConfigurationID
	,MillisecondDelay)
VALUES
  (1
  ,0);