// Click Tab show tab content
function openProjectTab(event, projectName) {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(projectName).style.display = "block";
  event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// messenger chat
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "111992678600571");
chatbox.setAttribute("attribution", "biz_inbox");
// Your SDK code
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v17.0'
  });
};
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
