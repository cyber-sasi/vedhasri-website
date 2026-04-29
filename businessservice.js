miPRTWebApp.service("businessService", ["$http", function ($http) {
    var scope = this;
    var version = 1.0;
   var webUrl = "https://miadmin.milifeindia.com";
//var webUrl = "http://admin.milifeindia.com";
    scope.setCookie = function (cname, cvalue, exdays) {
  
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
    };
    scope.getCookie = function (cname) {
   
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    };

    scope.ajaxGet = function (url, callback) {
        $(".lds-facebook").show();
        //var setHeader = { 'Authorization': 'Basic ' };
        $http.get(url, {
           // headers: setHeader
        })
            .then(function (data, status, headers, config) {
                callback(data.data);
                $(".lds-facebook").hide();
            }, function (data, status, headers, config) {
                    $(".lds-facebook").hide();
            });
    };
    scope.ajaxPost = function (url, data, header, callback) {
        $(".lds-ellipsis").show();
        var setHeader = '';
        if (header !== '')
            setHeader = { 'Authorization': header };
        else
            setHeader = { 'Authorization': 'Basic ' };
        $http.post(url, data, {
            headers: setHeader
        })
            .then(function (data, status, headers, config) {
                callback(data.data);
                $(".lds-ellipsis").hide();
            }, function (data, status, headers, config) {
                $(".lds-ellipsis").hide();
            });
    };

    scope.getCategory = function (refId,callback) {
        scope.ajaxGet(webUrl +"/api/Product/GetCategoryApi?refId=" +refId, function (response) { callback(response); });
    };
    scope.getProduct = function (productId,callback) {
        scope.ajaxGet(webUrl +"/api/Product/GetProductApi?productId=" + productId, function (response) { callback(response); });
    };
}]);