myApp.service("GiphyService", function($http) {
    var sv = this;
    console.log('inside of services');
    sv.getGiphy = function(url) {
        console.log('inside getGiphy');
        return $http.get(url).then(function(res) {
            console.log('back from the server with', res);

                console.log(res.data.data);

                return res.data.data;

            });
    };
});
