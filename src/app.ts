import express from "express";
import fs from "fs";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT =  process.env.PORT || 3000;

// Route to handle the file processing
app.get("/save-file", (req, res) => {
  const inputFilePath = "./input.txt";
  const outputFilePath = "./output.txt";

  // Step 1: Read the text file into a buffer
  fs.readFile(inputFilePath, (err, buffer) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Error reading the file.");
      return;
    }
    //Alternatively one can also use below code instead of above:
     // const buffer = fs.readFileSync(inputFilePath); // Buffer contains raw binary data
     // const fileContent = buffer.toString();

    const fileContent = buffer.toString();
    console.log("File Content:", fileContent);

    // Step 3: Convert the string(fileContent) back to buffer
    // and write the string back into a output file.
    fs.writeFile(outputFilePath, fileContent, (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        res.status(500).send("Error writing to the file.");
        return;
      }
      //Alternatively the below code can also be used for converting string to buffer and 
      // writing to output fileContent.
       // const outputBuffer = Buffer.from(fileContent); // Convert string back to Buffer
       // fs.writeFileSync(outputFilePath, outputBuffer);
 
      res.send({
        file_content: `${fileContent}`,
        msg : "File processed successfully. Check 'output.txt'."});
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
