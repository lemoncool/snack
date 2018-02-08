 var version = 1;
        (function goPAGE() {
            if ((navigator.userAgent.match(
                    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                ))) {
            } else {
                //window.location.href = 'pc.html';
            }
        })();

        (function () {
           // console.log("屏幕宽度" + window.screen.width)
            var defaultW = 375 * 3;
            if (/Android (d+.d+)/.test(navigator.userAgent)) {
                var version = parseFloat(RegExp.$1);
                if (version > 2.3) {
                    var phoneScale = parseInt(window.screen.width) / defaultW;
                    document.write('<meta name="viewport" content="width=' + defaultW + '", minimum-scale = ' + phoneScale +
                        ", maximum-scale = " + phoneScale + ', target-densitydpi=device-dpi">')
                } else {
                    document.write('<meta name="viewport" content="width=' + defaultW + '">')
                }
            } else {
                document.write('<meta name="viewport" content="width=' + defaultW + ', user-scalable=no">')
            }
            ;
        })();
        var _czc = [];