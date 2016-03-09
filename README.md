# Kickstart Meteor - Polymer

All your polymer components are inside .polymer directory. 



### Default Configuration

.polymer/bower.json

``` json
{
    "dependencies": {
        "iron-elements": "PolymerElements/iron-elements#^1.0.0",
        "neon-elements": "PolymerElements/neon-elements#^1.0.0",
        "paper-elements": "PolymerElements/paper-elements#^1.0.5",
        "mwc-layout": "*",
        "polymer": "Polymer/polymer#^1.0.0"
    },
    "name": "kickstart_mwc",
    "version": "0.0.1"
}
```

client/compiler.mwc.json

```  json
{
    "root": ".polymer",
    "append": [
        "index.html"
    ],
    "import": [
        "demo/demo.html",
        "bower_components/mwc-layout/mwc-layout.html",
        "bower_components/font-roboto/roboto.html",
        "bower_components/iron-elements/iron-elements.html",
        "bower_components/paper-elements/paper-elements.html",
        "bower_components/neon-animation/neon-animation.html",
        "bower_components/polymer/polymer.html"
    ],
    "extensions": {
        "mwc:ecmascript@1.0.11": {
            "compileFunction": "MWCEcmascript"
        }
    }
}
```

### MWC packages included.

[MWC Compiler](https://github.com/meteorwebcomponents/compiler) - Compiler for polymer/webcomponents in meteor.

[MWC Layout](https://github.com/meteorwebcomponents/layout) - polymer layout renderer

[MWC Mixin](https://github.com/meteorwebcomponents/mixin) - Mixin for polymer/webcomponents in meteor.

[MWC Router](https://github.com/meteorwebcomponents/router) - Two way bind FlowRouter to a polymer property.

### Other Packages

[Flow Router](https://github.com/kadirahq/flow-router) - Carefully Designed Client Side Router for Meteor
