**Simple URL Shortener**

**Overview:**
This is a simple URL shortener application built with Node.js and Express.js. It allows users to shorten a long URL and access it using a shorter version. The app stores URL mappings in memory and provides functionality to redirect users to the original URL.

**Features:**
1.Shorten URL- Convert a long URL into a short, unique identifier.
2.Redirect- Use the short URL to redirect to the original long URL.
3.In-memory Storage- Stores URLs temporarily in memory (non-persistent).

**Setup Instructions
Pre-requisites:**
Node.js (v18.17.0)
npm (Node Package Manager) (9.6.7)

**Clone the Repository:**
```
git clone https://git.geekyants.com/akshatg/node_training_assign.git
git pull origin main
cd node_training_assign
```


**Install Dependencies:**
```
npm install
npm install express dotenv
```


**Run the Application:**
`node short_url.js`

Run the POST request on POSTMAN to test the endpoints.

_POST endpoint: http://localhost:3000/shorten_

POST body: {
    "longUrl":"your_long_url_here"
}

POST response: {
    "shortUrl": "http://localhost:3000/sh/1",
    "shortId": "1"
}

_GET endpoint: "http://localhost:3000/r/<shortId>"_

Open your browser and go to http://localhost:3000/r/<shortId> to test the redirection of the url.