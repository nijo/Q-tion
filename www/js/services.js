angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('carryvar', [function() {
    uuid = '';
}])

.run(function($ionicPlatform, carryvar, $http, $state, $stateParams,){
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
        
        $http.post("https://nijojob.heliohost.org/php/index.php",{password: this.device.uuid })
            .then(function (response) {
                localStorage.setItem("id", response.data.id);
            });
        if(localStorage.getItem("language") == null){
            carryvar.A = 'A';
            carryvar.B = 'B';
            carryvar.C = 'C';
            carryvar.D = 'D';
            carryvar.success1 = 'Your answer is correct.';
            carryvar.wrong1 = 'Your answer is incorrect.';
            carryvar.timeout1 = 'You have exceeded your time limit.';
            carryvar.forward = 'Proceed to next question';
            carryvar.otitle = 'No option selected!!!';
            carryvar.otemplate = 'Please select an answer    ';
            carryvar.ltitle = 'Confirm Log Out';
            carryvar.ltemplate = 'Do you want to log out?';
            carryvar.cplanguage = 'Want to change your preferred language?';
            carryvar.cltitle = 'Change successful!!!';
            carryvar.cltemplate = 'Click below to continue.';
            carryvar.tlanguage = 'New language';
            carryvar.change = 'Proceed to change';
            carryvar.cancel = 'Cancel';
            carryvar.next = 'Next';
            carryvar.yes = 'Yes';
            carryvar.no = 'No';
            carryvar.ctitle = 'Quiz Complete!!!';
            carryvar.ctemplate = 'Congragulations!!! You have completed all the questions ';
            carryvar.questions = 'Go to Questions';
            carryvar.welcome = 'Welcome to Quizzy!!! Click below to start answering the questions ';
            carryvar.submit = 'Submit';
            carryvar.congrats1 = 'Congragulations!!!You have completed the quiz. Your score is ';
            carryvar.congrats2 = ' and your rank is ';
            carryvar.attempting1 = 'Out of ';
            carryvar.attempting2 = ' questions, you have attempted ';
            carryvar.attempting3 = ' correctly. Click below to continue.';
            carryvar.oenglish = 'English';
            carryvar.omalayalam = 'Malayalam';
            carryvar.ohindi = 'Hindi';
            localStorage.setItem("language", "English");
            localStorage.setItem("attempted", "0");
            localStorage.setItem("correct", "0");
            localStorage.setItem("position", "0");
            localStorage.setItem("score", "0");
            localStorage.setItem("flag", '1');
        }
        else if(localStorage.getItem("language") == "English"){
            carryvar.A = 'A';
            carryvar.B = 'B';
            carryvar.C = 'C';
            carryvar.D = 'D';
            carryvar.success1 = 'Your answer is correct.';
            carryvar.wrong1 = 'Your answer is incorrect.';
            carryvar.timeout1 = 'You have exceeded your time limit.';
            carryvar.forward = 'Proceed to next question';
            carryvar.otitle = 'No option selected!!!';
            carryvar.otemplate = 'Please select an answer    ';
            carryvar.ltitle = 'Confirm Log Out';
            carryvar.ltemplate = 'Do you want to log out?';
            carryvar.cplanguage = 'Want to change your preferred language?';
            carryvar.cltitle = 'Change successful!!!';
            carryvar.cltemplate = 'Click below to continue.';
            carryvar.tlanguage = 'New language';
            carryvar.change = 'Proceed to change';
            carryvar.cancel = 'Cancel';
            carryvar.next = 'Next';
            carryvar.yes = 'Yes';
            carryvar.no = 'No';
            carryvar.ctitle = 'Quiz Complete!!!';
            carryvar.ctemplate = 'Congragulations!!! You have completed all the questions ';
            carryvar.questions = 'Go to Questions';
            carryvar.welcome = 'Welcome to Quizzy!!! Click below to start answering the questions ';
            carryvar.submit = 'Submit';
            carryvar.congrats1 = 'Congragulations!!!You have completed the quiz. Your score is ';
            carryvar.congrats2 = ' and your rank is ';
            carryvar.attempting1 = 'Out of ';
            carryvar.attempting2 = ' questions, you have attempted ';
            carryvar.attempting3 = ' correctly. Click below to continue.';
            carryvar.oenglish = 'English';
            carryvar.omalayalam = 'Malayalam';
            carryvar.ohindi = 'Hindi';
        }
        else if(localStorage.getItem("language") == "Malayalam"){
            carryvar.A = 'എ';
            carryvar.B = 'ബി';
            carryvar.C = 'സി';
            carryvar.D = 'ഡി';
            carryvar.success1 = 'നിങ്ങളുടെ ഉത്തരം ശരിയാണ്.';
            carryvar.wrong1 = 'നിങ്ങളുടെ ഉത്തരം തെറ്റാണ്.';
            carryvar.timeout1 = 'നിങ്ങളുടെ സമയപരിധി കവിഞ്ഞു.';
            carryvar.forward = 'അടുത്ത ചോദ്യത്തിലേക്ക് പോവുക.';
            carryvar.otitle = 'ഓപ്ഷൻ തിരഞ്ഞെടുത്തില്ല !!!';
            carryvar.otemplate = 'ഒരു ഉത്തരം ദയവായി തിരഞ്ഞെടുക്കുക     ';
            carryvar.ltitle = 'ലോഗ് ഔട്ട് സ്ഥിരീകരിക്കുക';
            carryvar.ltemplate = 'ലോഗ് ഔട്ട് ചെയ്യണോ?';
            carryvar.cplanguage = 'നിങ്ങളുടെ ഇഷ്ട ഭാഷ മാറ്റണോ?';
            carryvar.cltitle = 'മാറ്റം വിജയകരമായി!';
            carryvar.cltemplate = 'തുടരുന്നതിന് ചുവടെ ക്ലിക്കുചെയ്യുക.';
            carryvar.tlanguage = 'പുതിയ ഭാഷ';
            carryvar.change = 'മാറ്റാൻ മുന്നോട്ട് പോവുക';
            carryvar.cancel = 'റദ്ദാക്കുക';
            carryvar.next = 'അടുത്തത്';
            carryvar.yes = 'അതെ';
            carryvar.no = 'ഇല്ല';
            carryvar.ctitle = 'ക്വിസ് പൂർത്തിയാക്കുക !!!';
            carryvar.ctemplate = 'അഭിനന്ദനങ്ങൾ !!! നിങ്ങൾ എല്ലാ ചോദ്യങ്ങളും പൂർത്തിയാക്കി ';
            carryvar.questions = 'ചോദ്യങ്ങളിലേയ്ക്ക് പോകുക';
            carryvar.welcome = 'ക്വിസ്ജിയിലേക്ക് സ്വാഗതം !!! ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകാനായി ചുവടെ ക്ലിക്കുചെയ്യുക';
            carryvar.submit = 'സമർപ്പിക്കുക';
            carryvar.congrats1 = 'അഭിനന്ദനങ്ങൾ! നിങ്ങൾ ക്വിസ് പൂർത്തിയാക്കി. നിങ്ങളുടെ സ്കോർ ';
            carryvar.congrats2 = ' , നിങ്ങളുടെ റാങ്ക് ';
            carryvar.attempting1 = 'നിങ്ങൾ ';
            carryvar.attempting2 = ' ചോദ്യങ്ങളിൽ നിന്ന്  ';
            carryvar.attempting3 = ' ചോദ്യങ്ങൾ ശരിയായി ശ്രമിച്ചു. തുടരുന്നതിന് ചുവടെ ക്ലിക്കുചെയ്യുക.';
            carryvar.oenglish = 'ഇംഗ്ലീഷ്';
            carryvar.omalayalam = 'മലയാളം';
    		carryvar.ohindi = 'ഹിന്ദി';
        }
        else if(localStorage.getItem("language") == "Hindi"){
            carryvar.A = 'ए';
            carryvar.B = 'बी';
            carryvar.C = 'सी';
            carryvar.D = 'डी';
            carryvar.success1 = 'आपका उत्तर सही है।';
            carryvar.wrong1 = 'आपका जवाब गलत है।';
            carryvar.timeout1 = 'आपने अपनी समय सीमा पार कर ली है।';
            carryvar.forward = 'अगले प्रश्न आगे बढ़ें';
            carryvar.otitle = 'कोई विकल्प नहीं चुना !!!';
            carryvar.otemplate = 'कृपया एक उत्तर चुनें     ';
            carryvar.ltitle = 'लॉग आउट की पुष्टि करें';
            carryvar.ltemplate = 'क्या आप लॉग आउट करना चाहते हैं?';
            carryvar.cplanguage = 'अपनी पसंदीदा भाषा बदलना चाहते हैं?';
            carryvar.cltitle = 'सफल बदलाव !!!';
            carryvar.cltemplate = 'जारी रखने के लिए नीचे क्लिक करें।';
            carryvar.tlanguage = 'नई भाषा';
            carryvar.change = 'बदलने के लिए आगे बढ़ें';
            carryvar.cancel = 'रद्द करना';
            carryvar.next = 'आगामी';
            carryvar.yes = 'हाँ';
            carryvar.no = 'नहीं';
            carryvar.ctitle = 'प्रश्नोत्तरी पूर्ण !!!';
            carryvar.ctemplate = 'बधाई हो !!! आपने सभी प्रश्न पूरे किए हैं।';
            carryvar.questions = 'प्रश्नों पर जाएं';
            carryvar.welcome = 'क्विज में आपका स्वागत है !!! सवालों के जवाब देने के लिए नीचे क्लिक कर';
            carryvar.submit = 'जमा करें';
            carryvar.congrats1 = 'बधाई हो! आपने प्रश्नोत्तरी पूरी कर ली है आपका स्क ';
            carryvar.congrats2 = ' है और आपकी रैंक है ';
            carryvar.attempting1 = 'आपने ';
            carryvar.attempting2 = ' में से ';
            carryvar.attempting3 = ' प्रश्न सही तरीके से करने का प्रयास किया है। जारी रखने के लिए नीचे क्लिक करें।';
    		carryvar.oenglish = 'अंग्रेज़ी';
    		carryvar.omalayalam = 'मलयालम';
    		carryvar.ohindi = 'हिंदी';
        }
        $state.go($state.current, $stateParams, {reload: true, inherit: false});
    })
    
    $ionicPlatform.registerBackButtonAction(function (event) {
        event.preventDefault();
    }, 100);
    
})