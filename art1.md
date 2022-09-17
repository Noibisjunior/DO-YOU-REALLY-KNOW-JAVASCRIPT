---
title: 'Python Book Review'
date: 'March 7, 2021'
excerpt: 'In this review, we will be looking at the new Python book from Oriley'
cover_image: '/images/posts/MISTAKE.jpg'
---

10 Basics of JavaScript
JavaScript is a powerful yet simple programming language, making it the language of choice for millions of beginning coders. If you’re thinking about diving into programming with JavaScript, what should you know? Here are 10 things all beginners should know about JavaScript.

1. JavaScript is not Java
   Despite their similar names, JavaScript and Java have no relation to each other. Java was developed by Sun Microsystems, while Netscape hired programmer Brendan Eich to develop a version of the Scheme programming language to embed in its Navigator web browser. The resulting language was called JavaScript, which has caused confusion ever since.

2. JavaScript Powers Active Web Content
   Before JavaScript was developed, HTML web pages were completely static – they couldn’t be changed on the client side without reloading the entire page. JavaScript was designed to overcome this by allowing changes to the HTML page structure and CSS style information in real time, without reloading the page. JavaScript code running in the browser can communicate back to the web server using Ajax (Asynchronous JavaScript and XML) or websockets.

Originally, this functionality allowed for simple interactive web apps; for example, a “like” button on a social media site that automatically updated the number of “likes” on a post in real time. But now, JavaScript is the key component in nearly all interactive web applications, including word processors and spreadsheets like Google Docs and Microsoft Office 365, full-featured mail clients like Gmail and Outlook, and even multiplayer in-browser games.

3. Not All Browsers Play Nice With JavaScript – But It’s Getting Better
   When JavaScript was first released, it was only available in Netscape Navigator, and it was a proprietary implementation. Microsoft soon reverse engineered JavaScript and included its own version, called JScript, in Internet Explorer. But this meant that there were significant differences between the two implementations, to the point that most code had to be written twice – once for each browser.

This continued for many years, even as Netscape and other (non-Microsoft) browsers pushed for standardization. Finally, by the late 2000’s, the rise of alternative browsers forced Microsoft to take JavaScript standardization seriously. Even still, new or advanced features may not work the same way in all browsers, so extensive testing must be done to make sure that a web app works the same way on all platforms.

4. Rich Web Apps Use JavaScript Frameworks and Libraries
   As you can imagine, a fully-featured JavaScript web application could take years of development and testing to get right. That’s where JavaScript libraries come in. The most popular is jQuery, used in an estimated 75% of websites. Other popular JavaScript frameworks for front-end web development include React, which was created by Facebook, and Angular, created by Google.

5. JavaScript Can Power Back-End Development Too
   While most known for its roots in client-side and front-end programming, JavaScript has evolved beyond the browser. Node.js is a popular back-end JavaScript runtime environment that allows developers to create scalable web applications entirely in JavaScript. It combines Google’s V8 JavaScript engine with an event loop and I/O API. Via its npm package repository, Node.js gives developers access to thousands of pre-made libraries.

6. Desktop Applications Can Be Written in JavaScript
   In addition to server-side applications, JavaScript can be used to create native desktop and mobile applications using application frameworks like Electron, Cordova, and React Native. These frameworks let developers break out of the browser and build applications that support desktop-native features and native user interfaces while using web technologies like JavaScript and CSS. Though not as fast as native apps, these hybrid apps can accelerate development time even when multiple platforms are required.

7. JavaScript is Weakly Typed
   One of the things about JavaScript that can be confusing for new developers is how it handles variable types in certain situations.

For example, the + (plus) operator is used for binary addition as well as string concatenation. This means that if you want to add two numbers, both operands must be numbers, not strings. For example, the expression “1” + 1 will output the string “11”, not 2. But “2” - 1 will output the expected 1. This behavior can be confusing if you’re not aware of it.

8. JavaScript Uses Prototypes, Not Classes
   Though JavaScript supports objects and object-oriented programming, it does so using prototypes, rather than classes used in other object-oriented languages. While a class is static, prototypes in JavaScript aren’t any different from other objects. This means that they can be changed on the fly. New objects are created by cloning the prototype, and the prototype can be extended by cloning it into a new object, which can then be used as a prototype for other objects.This gives JavaScript developers greater flexibility, at the expense of some efficiency and readability tradeoffs.

9. JavaScript is Dynamically Typed
   JavaScript’s flexibility is further enhanced by dynamic typing. Because all variables are essentially objects, an object of a different type can be assigned to one variable. The program can then determine the type of the object explicitly, or JavaScript can use duck typing (if it walks like a duck and quacks like a duck, it’s a duck!) to determine the type of a variable.

10. JSON is JavaScript Arrays
    JSON is a popular data interchange format that uses plain text to store data. It stands for JavaScript Object Notation, which accurately describes the file format of JSON. A JSON file can be directly imported into a JavaScript variable using eval(), because it is literally a JavaScript object representing a data array. Many other languages now include JSON parsers and generators that can be used to communicate with JavaScript programs.
