(function() {
    'use strict';

    /**
     * Home Custom Element.
     *   - No need for this variable handle at this point
     *   - Simply specifying the custom element name
     *
     *   Home element extends an HTML Anchor element "<a>"
     */
    DI.App.HomeElement = (function() {

        //HTML Element name
        var CREATED_ELEMENT_NAME = 'di-home-href';

        //Extended element Properties
        var ELEMENT_PROPERTIES = {
            //Link to Develop Intelligence
            href: 'http://www.developintelligence.com',
            //Open in a new window
            target: '_blank'
        };

        /**
         * Creating the custom element prototype to be utilized in the element creation.
         */
        var createElementPrototype = function createElement() {

            //Create a prototype for the custom element from the HTML Anchor Element
            var extendedElementPrototype = Object.create(HTMLAnchorElement.prototype);

            /**
             * Life-cycle hook for the custom element.
             *  - Executes when the element is registered
             *  - Defines the HTML for the element
             *  - Defines where the models for the element will be placed
             */
            extendedElementPrototype.createdCallback = function() {

                //Set the link location
                this.href = ELEMENT_PROPERTIES.href;

                //Set the page to open a new tab
                this.target = ELEMENT_PROPERTIES.target;

            };

            return extendedElementPrototype;

        };

        /**
         * Registering the custom element with the DOM.
         */
        var registerElement = function(elementPrototype) {

            //Registering the element with the DOM
            document.registerElement(CREATED_ELEMENT_NAME, {
                prototype: elementPrototype,
                extends: 'a'
            });

        };

        //"Main" functionality
        (function() {
            //Create the element prototype
            var elementPrototype = createElementPrototype();

            //Register the element
            registerElement(elementPrototype);
        })();

    })();

})();