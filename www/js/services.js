angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('carryvar', [function() {

}])

.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        if( ionic.Platform.isAndroid() )  { 
                admobid = { // for Android
                banner: 'ca-app-pub-8486592971726155/2296307113' // Change this to your Ad Unit Id for banner...
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