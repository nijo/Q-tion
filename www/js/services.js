angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('carryvar', [function() {

}])

.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        if( ionic.Platform.isAndroid() )  { 
                admobid = { // for Android
                banner: 'ca-app-pub-3940256099942544/6300978111' // Change this to your Ad Unit Id for banner...
            };
            if(AdMob) 
                AdMob.createBanner( {
                    adId:admobid.banner, 
                    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
                    autoShow:true
                } );
        }
    })
    
    $ionicPlatform.registerBackButtonAction(function (event) {
        event.preventDefault();
    }, 100);
    
})