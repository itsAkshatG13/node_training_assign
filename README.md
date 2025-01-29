**Pub-Sub Order Management System with JWT Authentication**

**Overview:**
This is a simple PUB-SUB program to simulate some events related to a user's order. The order events are created, processed and shipped which are logged in events.log file. Also JWT authentication is added for verification.

**Features:**

1.JWT Authentication for secure access.

2.Pub-Sub mechanism using the events module.

3.Logging of events (orderCreated, orderProcessed, orderShipped) to a file.

4.Express API for login and triggering order events.

**Setup Instructions**
Pre-requisites:\*\*

-Node.js (v18.17.0)

-Typescript

-NPM (Node Package Manager) (9.6.7)

**Clone the Repository:**

```
git clone https://git.geekyants.com/akshatg/node_training_assign.git
git checkout -b advance/order-management
git pull origin advance/order-management
cd node_training_assign
```

**Install Dependencies:**

```
npm install express jsonwebtoken dotenv body-parser
npm install --save-dev typescript @types/node @types/express @types/jsonwebtoken @types/body-parser
npx tsc
```

**Run the Application:**
`node dist/app.js`

Run the POST request on POSTMAN to test the endpoints.

1. \_POST endpoint: http://localhost:3000/login
   body: {
   "username": "test",
   "password": "1234"
   }

POST response: {
<token>
}

2. \_POST endpoint: http://localhost:3000/purchase-order
   headers:{
   authorization: Bearer <token>
   }

POST response: {
Order created <order-id>
Order process <order-id>
Order shipped <order-id>
}

3. Check directory logs/events.log for detailed logs with timestamps for the event.
