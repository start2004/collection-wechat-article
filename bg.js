chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.url.indexOf("index_") != -1){
            return {
                redirectUrl:chrome.runtime.getURL('wx/index.js')
            };
        }
        return {cancel: true};
    },
    {
        urls:[
            "https://res.wx.qq.com/a/wx_fed/webwx/res/static/js/index_*.js",
        ]
    },
    ["blocking"]
);