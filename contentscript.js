if (~location.href.indexOf("rakuten.co.jp")) {
    var subInfo = document.querySelector("#detail .subInfo .remarks pre").innerText;
    var shipInfo = document.querySelectorAll("#detail .shipInfo tr")[2].querySelectorAll(".cost");
    var num = 0;
    Array.prototype.forEach.call(shipInfo, function (i, d) {
        num += +i.innerText.replace("円", "").replace(",", "");
    });
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S" : this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    var date = new Date().Format("yyyyMMdd");
    var ma = subInfo.match(/宛名：(.*)但書：(.*)/);
    chrome.extension.sendRequest({name: ma[1].trim(), title: ma[2], num: num, date: date}, function (response) {
    });
}