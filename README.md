# Direct2You 

> A web platform for delivery services

## Requisites

`node.js`
`yarn`
`mysql-server`

## Usage

Install server and client dependencies

```
yarn
cd client
yarn
```

Create an environmet variable file `.env` in the root of the project, and fill it with your credentials

```
DB_HOST_DEV=localhost
DB_PORT_DEV=3306
DB_NAME_DEV=D2Y
DB_USERNAME_DEV=your_mysql_user
DB_PASSWORD_DEV=your_mysql_password
```

To start the server (from the root of the project)

```
yarn server
```

To start the client (from the root of the project)

```
yarn client
```

Node Server is running in http://localhost:5000
<br /> 
Client Server is running in http://localhost:3000


