window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "Are you sure you want to close?";

  e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
  return confirmationMessage;              // Gecko, WebKit, Chrome <34
});
