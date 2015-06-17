(function() {
    'use strict';

    /**
     * Hello Custom Element.
     *   - No need for this variable handle at this point
     *   - Simply specifying the custom element name
     */
    DI.App.HelloElement = (function() {

        //HTML Element name
        var CREATED_ELEMENT_NAME = 'di-hello';

        //Custom element properties
        var ELEMENT_PROPERTIES = {
            //Template for the Element
            innerHTML: '<h1>Hello World</h1>'
        };

        /**
         * Creating the custom element prototype to be utilized in the element creation.
         */
        var createElementPrototype = function createElement() {

            //Create a prototype for the custom element from the generic HTML Element
            var elementPrototype = Object.create(HTMLElement.prototype);

            /**
             * Life-cycle hook for the custom element.
             *  - Executes when the element is registered
             *  - Defines the HTML for the element
             *  - Defines where the models for the element will be placed
             */
            elementPrototype.createdCallback = function() {

                //Setting the innerHTML property for this element
                this.innerHTML = ELEMENT_PROPERTIES.innerHTML;
            };

            return elementPrototype;

        };

        /**
         * Registering the custom element with the DOM.
         */
        var registerElement = function(elementPrototype) {

            //Registering the element with the browser DOM
            document.registerElement(CREATED_ELEMENT_NAME, {
                prototype: elementPrototype
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