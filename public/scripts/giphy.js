var myApp = angular.module("myApp", []);

myApp.controller('GyphyController', function(GiphyService) {
    var vm = this;
    vm.history = [];
    vm.resultsRandom = false;
    vm.favDiv = false;
    vm.favDivArray = [];
    vm.giphySearch = function giphySearch() {

        console.log('inside');
        var url = "http://api.giphy.com/v1/gifs/search?q=" + vm.searchInput + "&api_key=dc6zaTOxFJmzC";



        if (vm.searchInput === undefined || vm.searchInput === '') {
            vm.history.push({
                history: 'Random'
            });
            url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";
            GiphyService.getGiphy(url).then(function(res) {
                console.log('back with:', res);
                vm.resultsRandom = res;
            });
        } else {
            vm.history.push({
                history: vm.searchInput
            });
            GiphyService.getGiphy(url).then(function(res) {
                console.log('back with:', res);
                vm.results = res;
                vm.searchInput = '';
            });
        }
    }; //end giphySearch



    vm.toggleFavs = function() {
        vm.favDiv = !vm.favDiv;
    };


    vm.addFav = function(index) {
        console.log(index);
        if (index === undefined) {
            console.log('inside unfined');
            vm.favDivArray.push(vm.resultsRandom.image_url);
        } else {
            vm.favDivArray.push(vm.results[index].images.downsized.url);
        }
        console.log(vm.favDivArray);
    };




});
