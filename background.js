var req;
function onRequest(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    req = request;
    // Return nothing to let the connection be cleaned up.
    sendResponse({});
}
function onClick(tabs) {
//    var time = /(..)(:..)/.exec(new Date()); // The prettyprinted time.
//    var hour = time[1] % 12 || 12; // The prettyprinted hour.
//    var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
//    var notification = window.webkitNotifications.createNotification(
//        '48.png', // The image.
//        hour + time[2] + ' ' + period, // The title.
//        req.name + '' + req.title + '' + req.num + '' + req.date// The body.
//    );
//    notification.show();
    var url = encodeURI("http://localhost:8888?name=" + req.name + "&title=" + req.title + "&num=" + req.num + "&date=" + req.date);
    window.open(url);
}
// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
chrome.pageAction.onClicked.addListener(onClick);