DECLARE @PersonID INT, @RandomInterests FLOAT, @InterestCounter INT, @InterestID INT;

DECLARE people_cursor CURSOR LOCAL STATIC READ_ONLY FOR
  SELECT PersonID FROM People;

OPEN people_cursor;

FETCH NEXT FROM people_cursor INTO @PersonID;

WHILE @@FETCH_STATUS = 0
BEGIN

  SET @RandomInterests = (RAND() * 6) - 1;

  SET @InterestCounter = 0;

  WHILE @InterestCounter < @RandomInterests
  BEGIN

    SET @InterestID = (SELECT TOP 1
	                     InterestID
					   FROM
	                     Interests
					   WHERE
					     InterestID NOT IN (SELECT InterestID FROM PersonInterests WHERE PersonID = @PersonID)
					   ORDER BY
					     NEWID());

    INSERT INTO
	  PersonInterests
	    (InterestID
		,PersonID)
	VALUES
	  (@InterestID
	  ,@PersonID);

	SET @InterestCounter = @InterestCounter + 1;

  END;

  FETCH NEXT FROM people_cursor INTO @PersonID;

END;

CLOSE people_cursor;

DEALLOCATE people_cursor;