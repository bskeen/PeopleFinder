# People Finder

This app was made primarily to allow a search through a database of 10,000 invented people.

## How to run the app

The app was made using .Net Core 2.0 in Visual Studio 2017, and Angular 6.0 in Visual Studio Code. After cloning the repository, it should just work to hit run or debug in Visual Studio. It is set up to connect to an Azure database that will be up for a couple of weeks from the time of this writing (posted on 6/1/2018). The user in the connection string only has read access to the database, so no updates are possible to the data.

## Things that could be added to the project

The following things would make this project and the experience of searching for random users better:

- More extensive unit testing on both the front and the back end. As it is, the server side would be more difficult to test, since more than anything it is a set of LINQ queries (for an example specific to this project, one LINQ expression uses a `string.Contains`. [Here is a link](https://odetocode.com/blogs/scott/archive/2010/07/07/unit-tests-and-linq-queries.aspx) explaining an example problem unit testing with this specific operator).
- SASS is used on the front end for the stylesheets. There are parts of the SASS that could be made more DRY.
- Code organization could be improved in the main components on the front end.
- The LINQ expression used to filter users would generate a `LIKE` statement in the SQL sent to the database with wildcards at the beginning and the end. This operation is not sargable, meaning that adding an index to the neame column would not help. Alternatives would be to set up a full text index in SQL Server or setting up a separate Elastic Search or Lucene index. This would be necessary if we needed to scale the dataset across millions of people (as opposed to the 10,000 in this database).
- A good design principle for user interfaces that is not included here is to help lead your user to what they need to do. I could add placeholder text to the search box and even some instructions to the person detail area (to help the user know what they need to do, e.g. "Enter a search here" or "Select a person to see more detail").
- Some more animations might also be nice.
- There are certain features that the server supports, but there is no support on the front end. For example, the server accepts query string parameters to sort the results by Name or Age, along with a sort direction (these default to Name and Ascending). There is also an endpoint for adjusting the delay time on the server, but there is no UI on the front end to access this.
- A screen could be added to allow users to add users to the database.
