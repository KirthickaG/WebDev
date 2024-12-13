React Crud Application

Frontend: React
Backend: NodeJs, Express
DataBase: MySQL

#Steps followed for backend
Running at http://localhost:8800/

Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

npm init -y 

npm i express mysql nodemon

node index.js

modify in package.json
  "scripts": {
    "start": "nodemon index.js" // added
  }

npm start

To start mysql process
Open Task Manager,check for the MySQL or MySQL80 process.
Win+R -> Services window (services.msc) and look for MySQL or MySQL Server and start

To resolve database connect error, in mysql terminal
ALTER USER 'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';

npm i cors

#Step followed for frontend
Running at : http://localhost:3000/

npx create-react-app .

npm i react-router-dom
npm i axios