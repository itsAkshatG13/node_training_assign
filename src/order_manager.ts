import { PubSub } from "./pubsub";
import fs from "fs";

// Create an instance of the Pub-Sub system
const pubsub = new PubSub();

// Log events to a file
const logEvent = (eventName: string, details: string): void => {
  const logMessage = `${new Date().toISOString()} - Event: ${eventName} - Details: ${details}\n`;
  fs.appendFile("./logs/events.log", logMessage, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
};

// Subscribe to order events
pubsub.subscribe("orderCreated", (orderId) => {
  console.log(`Order Created: Order ID ${orderId}`);
  logEvent("orderCreated", `Order ID ${orderId}`);
});

pubsub.subscribe("orderProcessed", (orderId) => {
  console.log(`Order Processed: Order ID ${orderId}`);
  logEvent("orderProcessed", `Order ID ${orderId}`);
});

pubsub.subscribe("orderShipped", (orderId) => {
  console.log(`Order Shipped: Order ID ${orderId}`);
  logEvent("orderShipped", `Order ID ${orderId}`);
});

// Export the Pub-Sub instance to use in the app
export { pubsub };
