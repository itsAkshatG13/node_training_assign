import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { generateToken, authenticateJWT } from "./auth";
import { pubsub } from "./order_manager";

const app = express();
app.use(bodyParser.json());

// Login route to get a JWT token
app.post("/login", (req: Request, res: Response):void => {
  const { username, password } = req.body;

  // Dummy authentication for demo purposes
  if (username === "test" && password === "1234") {
    const token = generateToken(username);
     res.json({ token });
     return;
  }

  res.status(401).send("Invalid credentials.");
  return;
});

// Protected route to simulate order events
app.post("/purchase-order", authenticateJWT, (req: Request, res: Response):void => {
  const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID

  // Emit 'orderCreated' event
  pubsub.publish("orderCreated", orderId);

  // Simulate a delay for order processing
  setTimeout(() => {
    pubsub.publish("orderProcessed", orderId);

    // Simulate another delay for order shipping
    setTimeout(() => {
      pubsub.publish("orderShipped", orderId);
    }, 2000);
  }, 2000);

  res.send("Order events simulated successfully.");
  return;
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
