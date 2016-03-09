FlowRouter.wait();

document.addEventListener("WebComponentsReady", function() {
  FlowRouter.initialize({
  });
});

FlowRouter.route("/", {
  name:'landing',
  action:function(params,queryParams){
    mwcLayout.render('landing',{"main":"demo-element"});
  }
});

