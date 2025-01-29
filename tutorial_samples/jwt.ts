// // Step 1: Install Dependencies 

// // npm install jsonwebtoken bcrypt express body-parser
// // npm install @types/jsonwebtoken @types/bcrypt --save-dev

// // Step 2: Create a JWT Authentication System


// // User models:
// import bcrypt from "bcrypt";

// const users: { id: number; email: string; password: string }[] = [];

// const createUser = async (email: string, password: string) => {
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = { id: Date.now(), email, password: hashedPassword };
//   users.push(user);
//   return user;
// };

// const findUser = (email: string) => users.find((user) => user.email === email);

// const verifyPassword = async (user: any, password: string) =>
//   bcrypt.compare(password, user.password);

// export { createUser, findUser, verifyPassword };
// // Authentication Routes: 
// import express, { Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { createUser, findUser, verifyPassword } from "./userModel";

// const app = express();
// app.use(express.json());

// const SECRET_KEY = "your_secret_key";

// app.post("/register", async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   const user = await createUser(email, password);
//   res.status(201).json({ message: "User registered", user });
// });

// app.post("/login", async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   const user = findUser(email);

//   if (!user || !(await verifyPassword(user, password))) {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
//     expiresIn: "1h",
//   });

//   res.json({ message: "Login successful", token });
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));


// // Step 3: Protect Routes with JWT 
// // Middleware: 

// const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");

//   if (!token) return res.status(401).json({ error: "Access denied" });

//   try {
//     const verified = jwt.verify(token, SECRET_KEY);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ error: "Invalid token" });
//   }
// };
// Protected Routes: 
// app.get("/protected", authenticateJWT, (req: Request, res: Response) => {
//   res.json({ message: "Access granted", user: req.user });
// });