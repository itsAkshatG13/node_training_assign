**Buffer Program to Read and Copy a File Content**

**Overview:**
This is a simple program to read the contents of a text file into a buffer and log the string in console. The logged data is written on a new text output file in the root directory.

**Features:**

1.Read File In Buffer -Reading the contents of a text file using buffer implementation.

2.Logging and Writing Content In a File- Use the read buffer to copy the contents of input file and write to a new output file.

**Setup Instructions
Pre-requisites:**

-Node.js (v18.17.0)

-Typescript

-NPM (Node Package Manager) (9.6.7)

**Clone the Repository:**

```
git clone https://git.geekyants.com/akshatg/node_training_assign.git
git checkout -b buffer/file
git pull origin buffer/file
cd node_training_assign
```

**Install Dependencies:**

```
npm install express dotenv
npm install --save-dev typescript @types/node @types/express
npx tsc
```

**Run the Application:**
`node dist/app.js`

Run the GET request on POSTMAN to test the endpoints.

\_GET endpoint: http://localhost:3000/save-file

GET response: {
"file-contents": "<file content>",
"msg": <msg>
}
