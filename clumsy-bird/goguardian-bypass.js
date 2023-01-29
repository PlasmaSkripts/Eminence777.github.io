//GGBypass using JS!
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "Are you sure you want to close?";

  e.returnValue = confirmationMessage;     //34+
  return confirmationMessage;              //<34
});
