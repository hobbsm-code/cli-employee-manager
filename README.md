# CLI Employee Manager Application
  ## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  https://opensource.org/licenses/MIT  
    This project is licensed under the MIT license. 
    Click the badge for more information.  
  ## Description  
  This project is a CLI application in which the user can manage a PostgreSQL employee database. The database consists of 3 tables, department (that contains the various departments), role (that contains various roles, or job descriptions), and employee (a list of employees, their role, and in which department they belong).
  
  The application is built using Nodejs, the express library (for running the local server), the pg library (for connecting and interacting with the database), and a PostgreSQL database.
  
  The project contains the database schema and seed data. 
  
  When the application is initiated, the user is presented with a command-line prompt containing various options for doing CRUD operations against the local database.

  ## Table of Contents  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contribution](#contribution)  
  - [Tests](#tests)  
  - [Questions](#questions)  
  ## Installation  
  To install this project:  

  1. Clone the repo
   ```sh
    git clone git@github.com:hobbsm-code/cli-employee-manager.git
   ```
  2. Install NPM packages
   ```sh
   npm install
   ```

  ## Usage  
  Please follow these instructions to use the CLI Employee Manager Application
  
  Prerequisites:
  1. You need to install PostgreSQL: 
  </br>
  <a href="https://www.postgresql.org/download/">PostgreSQL Download Page</a> 
  </br>
  <a href="https://neon.tech/postgresql/postgresql-getting-started">Installation instructions</a>
  
  Setting up the database
  1. Open a terminal and cd to the directory where the CLI Employee Manager Application is saved.
  2. Enter 'psql -U postgres' and your pass key
  3. Enter '\i db/schema.sql' and press Enter (this will create the database schema).
  4. Enter '\i db/seeds.sql' and press Enter (this will load some sample data into the database).
  5. '\q' will disconnect from the database and return you to the terminal.
  
  Run the application
  1. With the terminal still open to the directory where the CLI Employee Manager Application is saved,
      type 'npm run start' and press Enter (that will build the application and start the local server).
  2. You will be presented with a prompt where you can choose from a list of CRUD operations for managing the employee database.
  3. <a href="./assets/Employee_Manger_Demo.mp4">Click this link to watch a Demo Video</a>
 
 
  ## Contribution  
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
  Don't forget to give the project a star! Thanks again!

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request

  ## Tests  
  Test instructions:  

  This project does not currently have any unit tests. Having test coverage is always welcome. Please feel free to contribute some unit tests. Otherwise, it is our goal to improve the test coverage as the project becomes more mature and more complex functionality is added.

  ## Questions  
  For questions, please contact me at:  
  GitHub: [Find me on GitHub ->  hobbsm-code](https://github.com/Find me on GitHub ->  hobbsm-code)  
  Email: [Email me at: hobbsm321@gmail.com]  
  