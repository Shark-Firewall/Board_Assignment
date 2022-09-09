# SDE - Backend (Intern) Assignment

Creating a server using nodejs,express and Mongodb Database

## API Reference

#### Deployed Link

```http
  https://task-rajnish.herokuapp.com
```

#### Github Link

```http
  https://github.com/Shark-Firewall/Board_Assignment
```

#### Get all task

```http
  GET https://task-rajnish.herokuapp.com/list
```

#### Post task

```http
  POST https://task-rajnish.herokuapp.com/add
```

| Name        | Type     | Description                                     |
| :---------- | :------- | :---------------------------------------------- |
| name        | `string` | For task title                                  |
| description | `string` | For task description                            |
| creator     | `string` | Nor author name                                 |
| duration    | `Number` | Duration after which date deleted from database |
| createdAt   | `Date`   | Date at task created or stored in database      |

## Run Locally

Clone the project

```bash
  git clone https://github.com/Shark-Firewall/Board_Assignment.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack

**Server:** Node, Express

**Database:** MongoDB
