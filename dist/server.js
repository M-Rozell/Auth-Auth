/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/config/index.js":
/*!********************************!*\
  !*** ./server/config/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n//this file is the single source of truth of all things configuration in an environment variable\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config(); //this will look into the root of my project to find the .env file\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  //here we are going to use our environment variables\n  db: {\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASS,\n    database: process.env.DB_SCHEMA\n  },\n  jwt: {\n    secret: process.env.JWT_SECRET\n  }\n});\n\n//# sourceURL=webpack://auth-auth/./server/config/index.js?");

/***/ }),

/***/ "./server/db/index.js":
/*!****************************!*\
  !*** ./server/db/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Query\": () => (/* binding */ Query),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./server/config/index.js\");\n/* harmony import */ var _queries_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries/users */ \"./server/db/queries/users.js\");\n // import { resolve } from \"path\";\n\n\nconst pool = mysql__WEBPACK_IMPORTED_MODULE_0__.createPool(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].db); //     {\n//     host: 'localhost',\n//     user: 'auth_demo',\n//     password: 'auth_demo',\n//     database: 'the_key_to_auth'\n// }\n\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    pool.query(query, values, (err, results) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(results);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  users: _queries_users__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://auth-auth/./server/db/index.js?");

/***/ }),

/***/ "./server/db/queries/users.js":
/*!************************************!*\
  !*** ./server/db/queries/users.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./server/db/index.js\");\n // import { UsersTable } from \"../models\";\n//.ts Query<UsersTable[]>\n// const find = (email) => Query('SELECT * FROM users WHERE email = ?', [email]) //finding someone's email in our database//select statements always return arrray of objects\n\nconst find = (column, value) => (0,___WEBPACK_IMPORTED_MODULE_0__.Query)('SELECT * FROM users WHERE ?? = ?', [column, value]); //.ts Query<MysqlResponse>\n\n\nconst insert = () => (0,___WEBPACK_IMPORTED_MODULE_0__.Query)(''); //insert or register our users\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  find,\n  insert\n});\n\n//# sourceURL=webpack://auth-auth/./server/db/queries/users.js?");

/***/ }),

/***/ "./server/routes/api/index.js":
/*!************************************!*\
  !*** ./server/routes/api/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pizza__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizza */ \"./server/routes/api/pizza.js\");\n\n //name these routers whatever you want\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.use('/pizza', _pizza__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); //this uses the logic from the pizza router\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/api/index.js?");

/***/ }),

/***/ "./server/routes/api/pizza.js":
/*!************************************!*\
  !*** ./server/routes/api/pizza.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./server/config/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n //this is needed to validate our token\n\n //where our secret signature is found\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)(); //we need to say 'if there is no token, you don't get pizza time'\n\nrouter.get('/', (req, res) => {\n  //logic from the pizza router\n  try {\n    //no token? no go\n    // console.log(req.headers.authorization?.split(' ')) //this split method will break it into an array of elements\n    const bearerToken = req.headers.authorization?.split(' '); //we need to split this into an array so we can confirm this... const token = bearerToken[0] === \"Bearer\" && bearerToken[1];\n    //if bearerToken at [0] is 'Bearer and that is true we are going to grab bearerToken[1] at position 1.\n\n    const token = bearerToken && bearerToken[0] === \"Bearer\" ? bearerToken[1] : null;\n\n    if (!bearerToken || !token) {\n      res.status(401).json({\n        message: 'unauthorized'\n      });\n      return;\n    } //validate that the token is not expired and has the correct signature\n\n\n    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify(token, _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwt.secret); //this will return the token's payload.\n\n    console.log(payload); // console.log(token);\n\n    res.json({\n      message: `Enjoy your pizza time ${payload.email}!`\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({\n      message: 'my code sucks',\n      error: error.message\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/api/pizza.js?");

/***/ }),

/***/ "./server/routes/auth/index.js":
/*!*************************************!*\
  !*** ./server/routes/auth/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./server/routes/auth/login.js\");\n\n //this creates the login router path\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.use('/login', _login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); //this router is going to use on the path of /login the logic of loginRouter\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/auth/index.js?");

/***/ }),

/***/ "./server/routes/auth/login.js":
/*!*************************************!*\
  !*** ./server/routes/auth/login.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db */ \"./server/db/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./server/config/index.js\");\n/* harmony import */ var _utils_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/password */ \"./server/utils/password.js\");\n\n\n //import the db object from the folder and you don't have to write the index. it will automatically look for that\n\n //to import our jwt secret from config/index.js\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();\nrouter.post('/', async (req, res) => {\n  const email = req.body.email;\n  const password = req.body.password;\n\n  try {\n    //check for the users email\n    const [userFound] = await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].users.find('email', email); //the first argument here is the column from mysql, and the email from the request body above  \n    //a call to the db index that is exporting users form queries/users. also have to import db at the top\n\n    console.log(userFound); //when sent in postman the database info will print in the terminal\n    //checking if users email is found && if passwords compare and pass\n\n    if (userFound && (0,_utils_password__WEBPACK_IMPORTED_MODULE_4__.compareHash)(password, userFound.password)) {\n      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign( //sign takes at min 2 arguments. 1.a payload(a js object, that is encoded not encrypted. you put in them whatever you want to make a claim about)\n      {\n        userid: userFound.id,\n        email: userFound.email,\n        role: 'guest'\n      }, //payload\n      _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwt.secret, //sign it with our secret as our 2nd argument\n      {\n        expiresIn: '15d'\n      } // 3rd optional argument: you want to set an expiration date on this so it doesn't last forever. can set days(d), min(m), sec(s), and other methods.\n      ); // return res.json('login successful')\n\n      return res.json(token); //test this token at jsonwebtoken.io, paste the token from postman and see your email pop up!\n    }\n\n    res.status(401).json({\n      message: 'invalid credentials'\n    }); //if user is not found\n    // console.log(compareHash(password, userFound.password)); //this comes back true when sent in postman\n    // console.log(!userFound);\n    // if (!userFound || !compareHash(password, userFound.password)) { //compareHash returns a boolean. it will take the password form above(req.body.password) which would be from a form they filled out, and compare it to the password found in the database which is userFound.password\n    //     return res.status(401).json({ message: 'invalid credentials'}); //keep this vague for hackers\n    // }\n    // res.json('login successful!')\n    // res.json(userFound);   //using this like a console.log  //you have to (a)wait this promise to be resolved or your code will run syncr and the promise will not get resolved\n    //this was for testing // res.json({email, password}) //we want to echo this request back to ourselves to test\n  } catch (error) {\n    //to test endpoints and methods before building out the logic\n    console.log(error);\n    res.status(500).json({\n      message: 'my code sucks!'\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/auth/login.js?");

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./server/routes/api/index.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./server/routes/auth/index.js\");\n\n //these create the path\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); //these tell it to use this route path\n\nrouter.use('/auth', _auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/index.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./server/routes/index.js\");\n\n //routes represents the api router and the auth router\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"]('public'));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__.json()); //this is the body parser\n\napp.use(_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst port = process.env.Port || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on port: ${port}`);\n});\nconsole.log('You can do it!!'); //Testing code // This has been moved to utils/password.js\n// import * as bcrypt from 'bcrypt'; //on server side it is recommended to do async development\n// //generateHash('password123'); don't want to store the password in the database it needs to be hashed\n// function generateHash(password){\n//     const salt = bcrypt.genSaltSync(12);  //this generates our salt with 12 rounds\n//     const hash = bcrypt.hashSync(password, salt); //the string we are trying to hash which is the plain text password with our random data (salt)\n//     return hash;\n// }\n// function compareHash(password, hashed) {\n//     return bcrypt.compareSync(password, hashed);\n// }\n// // console.log(generateHash('password123'));\n// // //$2b$12$YKmf3M4uLKDO8jpFx6sQYO96OknleImqWCa9GYwGHr53xgIjySEne\n// console.log(compareHash('password123', '$2b$12$YKmf3M4uLKDO8jpFx6sQYO96OknleImqWCa9GYwGHr53xgIjySEne'))\n\n//# sourceURL=webpack://auth-auth/./server/server.js?");

/***/ }),

/***/ "./server/utils/password.js":
/*!**********************************!*\
  !*** ./server/utils/password.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareHash\": () => (/* binding */ compareHash),\n/* harmony export */   \"generateHash\": () => (/* binding */ generateHash)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n//Testing code\n //on server side it is recommended to do async development\n//generateHash('password123'); don't want to store the password in the database it needs to be hashed\n\nfunction generateHash(password) {\n  const salt = bcrypt__WEBPACK_IMPORTED_MODULE_0__.genSaltSync(12); //this generates our salt with 12 rounds\n\n  const hash = bcrypt__WEBPACK_IMPORTED_MODULE_0__.hashSync(password, salt); //the string we are trying to hash which is the plain text password with our random data (salt)\n\n  return hash;\n}\nfunction compareHash(password, hashed) {\n  return bcrypt__WEBPACK_IMPORTED_MODULE_0__.compareSync(password, hashed);\n} // console.log(generateHash('password123'));\n//$2b$12$PhqyNTrsAk/m/lRk9Awv9.wXmrs6B/kPoRiaaZh.mC5/BaQPtmDaq\n// console.log(compareHash('password123', '$2b$12$YKmf3M4uLKDO8jpFx6sQYO96OknleImqWCa9GYwGHr53xgIjySEne'))\n\n//# sourceURL=webpack://auth-auth/./server/utils/password.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;