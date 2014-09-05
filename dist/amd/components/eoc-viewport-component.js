define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Component = __dependency1__.Component;
    var get = __dependency1__.get;
    var set = __dependency1__.set;
    var computed = __dependency1__.computed;

    /**
      To use this component in your app, add this to a template:

      ```handlebars
      {{#eoc-viewport}}
        {{#on-canvas}}
          {{#off-canvas-opener}}
            <i class="fa fa-bars"></i>
          {{/off-canvas-opener}}
        {{/on-canvas}}

        {{#off-canvas}}
          {{#off-canvas-closer}}
            <i class="fa fa-times"></i>
          {{/off-canvas-closer}}
        {{/off-canvas}}
      {{/eoc-viewport}}
      ```
    */
    __exports__["default"] = Component.extend({
      /**
        The type of element to render this view into. By default, samples will appear
        as `<eoc-viewport/>` elements.

        @property tagName
        @type String
      */
      tagName: 'eoc-viewport',

      classNames: ['eoc-viewport-default'],

      classNameBindings: ['active:off-canvas-expanded'],

      active: false,

      // Custom events

      toggleOffCanvas: function (evt) {
        this.toggleProperty('active');
      },

      expandOffCanvas: function (evt) {
        this.set('active', true);
      },

      collapseOffCanvas: function (evt) {
        this.set('active', false);
      }
    });
  });