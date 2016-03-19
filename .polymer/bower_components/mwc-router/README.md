# Router Mixin.


## What is mwc Router?

mwcRouter is a reactive meteor routing solution for polymer elements. Objective is to sync the reactive flowrouter params and queryparams from inside the polymer elements




## How to use it ?



Add `mwc:router` package to your Meteor App 


```sh
    $ meteor add mwc:router
```
Add mwcRouter behavior.

```js
Polymer({
    is: "custom-elements",
    // you can leave properties field empty if you dont want to set intial values.
    properties: {
        mwcRoute: {
            //name datatypes - string
            name: "custom-route",
            //params datatypes - string
            params: {
                p1: "p1value"
            },
            //queryParams datatypes - string/object
            queryParams: {
                qp1: "qp1value"
            }
        }
    },
    behaviors: [mwcRouter] //important
})
```

`this.mwcRoute` contains name (name of the current route), params and queryparams which are reactive. Use it as
`{{mwcRouter.queryParams.paramName}}`

### With FlowRouter and `mwc:layout`

```js
//Router
// Using mwc:layout is optional. Not a dependency. 
FlowRouter.route("/post/:_id", {
    name: 'post-view',
    action: function(params, queryParams) {
        mwcLayout.render('main', {
            "main": "post-view"
        });
    }
});

// Inside post-view element


Polymer({
    is: "post-view",
    behaviors: [mwcRouter],
    /***** IMPORTANT *****/
    properties: {
        mwcRoute: {
            queryParams: {
                "view": "home"
            } // initializing queryParam view = "home"
        }
    },
    changeView: function() {
        this.$.mainView.selected = "edit"; 
        // here we are changing the selected attribute of #mainView. Router will change accordingly.
    }
});

```

post-view element

```html
....

<paper-tabs attr-for-selected="name" selected="{{mwcRoute.queryParams.view}}">
    <paper-tab name="home">Home</paper-tab>
    <paper-tab name="edit">Edit</paper-tab>
</paper-tabs>

<iron-pages id="mainView" selected="{{mwcRoute.queryParams.view}}" attr-for-selected="name">

    <post-item name="home">
        [[mwcRoute.params._id]]
    </post-item>

    <post-item name="edit">
        [[mwcRoute.params._id]]
    </post-item>


</iron-pages>

<paper-button on-click="changeView">Edit post</paper-button>
....

```

Now go to the browser console and check FlowRouter.setQueryParams({"view":"home"});



## Todo


- [x] Support data types other than string also. ie polymer property A(datatype : Object) -> param string
- [ ] Option to add preprocessing functions for set and get. support for computations

##Related Projects

[mwc router demo](https://github.com/meteorwebcomponents/demo-router) - mwc:router demo

[MWC Compiler](https://github.com/meteorwebcomponents/compiler) - Compiler for polymer/webcomponents in meteor.

[MWC Mixin](https://github.com/meteorwebcomponents/mixin) - Mixin for polymer/webcomponents in meteor.

[MWC Layout](https://github.com/meteorwebcomponents/layout) - polymer layout renderer


