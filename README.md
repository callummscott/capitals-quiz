# Capital Cities of the World Quiz
> Test your knowledge of the world's capital cities with this quiz.

This was just a little experiment in very basic database querying and interactive web page design.
It very much needs 'user' functionality with score tracking, and potentially an option to filter which countries/capitals are shown by region.

## Getting started
1. Install modules with `npm install`
2. Create a new database and run the commands found in `queries.sql` to get set up
3. Import the list of capitals from `capitals.csv` to the newly created `capitals` table
4. Set up a `.env` file with the following environment variables:
    - [ ] PORT : The port that your express server is going to run on (e.g. 3000)
    - [ ] DB_NAME : The name of your database
    - [ ] DB_HOST : The name of your host (e.g. localhost)
    - [ ] DB_USER : Your database user name (e.g. postgres)
    - [ ] DB_PASSWORD : Your database password
    - [ ] DB_PORT : The port that your database is running on (e.g. 5432)
5. Start the server with `npm start`
6. Now just connect to `localhost:<process.env.PORT>` and get started!

## Acknowledgements

Thanks to <a href="">appbrewery</a> and their full-stack bootcamp course for the project resources.