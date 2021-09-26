# Evaluate A News Article with Natural Language Processing(NLP)

## Installation

Check that npm and node are installed .
```
node -v
npm -v
```
Webpack 5 is used in this project.

Webpack 5 requires at least Node.js 10.13.0 ,so make sure you upgrade your Node.js if you're still running an older one.

1. Move to the project folder
```
cd <project directory> 
```
2. Clone the repo
```
git clone https://github.com/Salah-Hatem/news-article-nlp.git

cd news-article-nlp
```
3. Install npm
```
npm install
```
4. Sign up to get an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
	
	1. Create a new `.env` file in the root of your project
	2. Add your key in the `.env` like this:
	```
	API_KEY=**************************
	```

## Starting the project
`npm run build-prod` | to Build the project
`npm start` | to Run project

Open browser at http://localhost:8081/
