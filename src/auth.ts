import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

// Generate JWT Token
export const generateToken = (username: string): string => {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
};

// Middleware to Verify JWT Token
export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send("Access denied. No token provided.");
    return; // ✅ Ensure function exits properly
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded; // Attach decoded token to request object
    next(); // ✅ Call next() only when authentication is successful
  } catch (err) {
    res.status(403).send("Invalid or expired token.");
    return; // ✅ Ensure function exits properly
  }
};
