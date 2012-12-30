chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('web/hello_world.html', {
    'width': 400,
    'height': 500
  });
});