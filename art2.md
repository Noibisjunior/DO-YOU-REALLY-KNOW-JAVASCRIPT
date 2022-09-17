---
title: 'React Crash Course'
date: 'March 8, 2021'
excerpt: 'Crash course to learn the React JavaScript library. We will look at components, hooks and more'
cover_image: '/images/posts/noibisjunior.jpeg.jpeg'
---

Your Job Search: Top 10 JavaScript Interview Questions
You’ve made it through the screening process, and now you’re getting ready to interview for a position as a JavaScript developer. What kinds of questions can you expect? In this list, we break down 10 common questions asked of candidates for jobs involving JavaScript programming.

Even if your prospective job title isn’t “JavaScript developer”, many frontend and backend developers are expected to be familiar with the language. So before the big day, look over our list and be ready to answer these 10 JavaScript questions.

1. What’s the difference between Java and JavaScript?
This question can easily separate JavaScript pros from those who only have a passing familiarity with it. Even though they share a name, Java and JavaScript are two entirely different programming languages with separate histories and use cases.

Java was first developed by Sun Microsystems. Java programs are designed to be platform-independent, since they use a runtime called a Java Virtual Machine (JVM) to execute their code. Java isn’t a scripting language, however, so programs do need to be compiled into bytecode programs prior to execution.

JavaScript, on the other hand, is a scripting language. Its programs don’t need to be compiled — they can be run as-is by an interpreter on any platform with a supported implementation. 

JavaScript was developed by Netscape for use in its web browser, and was eventually adopted by virtually all web browsers to support dynamic web pages.

2. What are some key features of JavaScript?
Some of the key features of JavaScript you should know about include:

It is a lightweight interpreted language - JavaScript is designed to use little resources, and JavaScript programs don’t need to be compiled.

It is designed to be network-centric - JavaScript was created originally to provide a dynamic experience on web pages. Because of that, it has many features that make it ideal for creating programs that depend on communicating across a network.

It is an open language - JavaScript is based on the open-source ECMAScript standard, which is regularly updated to ensure that implementations across browsers and OSes have access to the latest language features.

It is cross-platform - Since JavaScript is a scripting language, most programs can be run without modification on any platform with a compatible JavaScript implementation. Frameworks like Node.js bring this interoperability to server-side applications as well.

“JavaScript3. How is JavaScript used in frontend web development?
With this question, you may be asked how you could improve a web page or create a better user experience by using JavaScript on the frontend.

For example, you could validate a form field as the user types, and only activate the submit button if the fields are correctly formatted. This could check that an email address is entered in the right field, or that a password is the correct length. This reduces the wait time for the user compared to if they had to submit the form all at once. 

JavaScript can also be used to create dynamic, interactive web interfaces. Using JavaScript and CSS, you can create drag and drop components, sliders, animations, and lots of other interface components that users have come to expect from their web experience.

4. Name some JavaScript frameworks and libraries.
JavaScript has been extended and adapted to make it even easier to create rich web applications. Even if you’re applying for more of a generalist position, you could come across some of these JavaScript frameworks in your work. So you should be familiar with what they are and what they’re used for, at least on a basic level.

Node.js is a powerful platform that allows backend applications to be written in JavaScript and executed on the server side. It is behind many of today’s scalable web applications.

Angular is a popular JavaScript frontend framework. It allows developers to create dynamic web interfaces easily.

Express is a web application framework for Node.js, used for backend development.

React is another frontend framework similar to Angular.

jQuery is a JavaScript library that simplifies access to the HTML DOM (document object model) for creating dynamic websites.

5. Is JavaScript case sensitive?
After you’ve aced the first few questions about JavaScript’s history and use cases, you may be asked some more detailed questions about JavaScript syntax and structure. These questions will gauge your experience with the language as well as your attention to detail. 

A simple question about syntax is “Is JavaScript case sensitive?” The short answer is yes, JavaScript functions, variables and objects are case sensitive.

For example, “myVariable”, “myvariable” and “MyVariable” are all different variables in JavaScript.

In addition, variable names must start with a letter or the underscore character “_” — they cannot start with a number. For example, “_Variable123” or “variable123” are valid, while “123Variable” is not.

6. What data types does JavaScript support?
JavaScript supports the following basic data types:

Boolean, e.g. True or False

String — a collection of non-numeric characters

Symbol — a new primitive type that returns a globally unique identifier.

Number — an integer

Object 

In addition, JavaScript has the following special data types:

Undefined — a variable or property that doesn’t exist or hasn’t been assigned yet.

Null — a value that can be assigned to a variable representing no value.

Additionally, it’s good to know that JavaScript is dynamically typed. This means that, if possible, these data types are automatically converted to each other when it makes sense. For example, the + operator will concatenate a string and a number, without needing to explicitly convert the number to a string., e.g. “Your number is: “ + 4 

7. What’s the purpose of the ‘This’ operator?
As an object-oriented programming language, JavaScript makes extensive use of objects. This is especially useful when traversing the HTML DOM.

The “this” keyword in JavaScript refers to the object it belongs to. For example, in a method inside an object, “this” refers to the owner object. So the function “returnProperty” could use “this.propertyName” to return the property “propertyName” belonging to the parent object.

In HTML event handlers, “this” means the HTML object that received the event. For example, the “onclick” event for a button could specify “this.style.display=’none’”. When the button is clicked, its display would be set to None, effectively removing the button from the page.

8. What is the difference between “==” and “===” comparison operators?
This is a more advanced syntax question, which also tests your attention to detail. You probably are familiar with the “==” comparison operator, meaning “equal to”. As we mentioned, JavaScript is dynamically typed, so it will automatically convert variables into types that can be compared, if possible.

The “===” operator compares variables without type conversion. So comparing a number variable to a string containing a number would work with ==, but not with ===.

For example:

3 == “3” //true

3 === “3” //false

9. Explain the difference between Null, Undefined, Undeclared, and NaN in JavaScript
Any of these values could result in errors in your program — either runtime errors, where your code refuses to run, or unexpected results in your program’s output. Understanding the difference between them can help you to debug your JavaScript code more quickly. 

Null is an assignment value. It can be assigned to a variable to represent a null, or no value.

Undefined means that a variable has been declared, but no value, and thus no type, has been assigned to it.

Undeclared means that a variable has not been declared in the program, and thus doesn’t exist. Attempting to call an undeclared variable will result in a runtime error.

NaN stands for “not a number”. If a variable of another type is not able to be converted into a number, NaN is returned instead. NaN always returns “false” when compared with a number variable, including itself, so it can be used in functions and methods where a number should be returned but isn’t due to an error.

10. What will this code output? 3 + 5 + “7”
During a JavaScript interview, you may be shown various snippets of code and be asked what should be the expected output. This tests both your attention to detail and your knowledge of the various quirks of the programming language.

One popular example of the “what does this output” question is this one — add three numbers together, but one of them is in quotation marks. If you guessed that this outputs “15”, then you’d be wrong! The correct answer is 87. This is because the + operator, when used with a string, means “concatenate”. So this code really says “add three and five, then concatenate the result with a string”. 

Of course in the real world, having code like this would be confusing, but as a knowledge test, it’s quite effective.

With these 10 top JavaScript interview questions and answers, you’ll be ready to take on the next phase in your coding job search. You can also spend some time brushing up on your JavaScript skills using the free SoloLearn app. The JavaScript course can help you to prepare for your next interview. Or use the Code Playground to experiment with writing and debugging different JavaScript programs. Take advantage of these free resources to get ready for your JavaScript interview.