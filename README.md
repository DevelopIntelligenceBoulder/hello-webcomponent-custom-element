# hello-webcomponent-custom-element
A simple example of Hello World written utilizing Web Component [Custom Elements and Extended Elements](http://w3c.github.io/webcomponents/spec/custom/) .

## Browser Support
Check out [Can I Use](http://caniuse.com/#feat=custom-elements) to see if/when [IE](https://status.modern.ie/customelements), [Firefox](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) and Safari will adopt the use of Web Component HTML imports. Custom and Extended elements are fully supported in Chrome and Opera.
  
## What is this?
This example shows how to utilize Custom and Extended Elements from the Web Component specification to create a Hello World element and extend an Anchor HTML Element.

### Within the js/main.js
The application namespace is created. It is a simple JavaScript namespace that the application architecture is attached too.

### Within the js/hello-element.js
A self contained JavaScript module handling the creation and registration of the Hello World Element. It creates a generic HTML element prototype, attaches the necessary attributes (i.e. the InnerHTML) and registers the created element with the DOM.

### Within the js/home-element.js
A self contained JavaScript module handling the creation and registration of the Extended Home Element. It creates an HTML Anchor element prototype, attaches the necessary attributes (i.e. the href and target) and registers the created extended element with the DOM.

### Within the index.html
Contains the references to the Custom Hello World Element and the Custom Extended Home Element.

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser

## Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on HTML5](http://www.developintelligence.com/catalog/web-development-training/html-html5) and [classes on JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript). Check out the [Introduction to JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript/introduction-to-javascript), the [Introduction to HTML5](http://www.developintelligence.com/catalog/web-development-training/html-html5/introduction-to-html5) or the [Mobile Web Development Bootcamp](http://www.developintelligence.com/catalog/web-development-training/mobile-web-development-boot-camp) to get your team up to speed.
