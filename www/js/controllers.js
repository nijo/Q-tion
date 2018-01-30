angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$location', 'carryvar', '$state', '$ionicLoading', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, $http, $ionicPopup, $location, carryvar, $state, $ionicLoading, $timeout) {
    
    $scope.data = {
        email: '',
        password: '',
        error: '',
        login: function(){
            if(this.email === ""){
                $scope.showAlert("email");
            }
            else if(this.password === ""){
                $scope.showAlert("password");
            }
            else{
                $scope.showLoading();
                $http.post("https://nijojob.heliohost.org/NewApp/www/php/index.php",{email: this.email, password: this.password })
                    .then(function (response) {
                        $scope.hideLoading();
                        if(response.data.none == "email"){
                            $scope.showAlert("email2");
                        }
                        else if(response.data.none == "password"){
                            $scope.showAlert("password2");
                        }
                        else if(response.data.none == "none"){
                            carryvar.name = response.data.name;
                            carryvar.attempted = response.data.attempted;
                            carryvar.correct = response.data.correct;
                            carryvar.language = response.data.language;
                            localStorage.setItem("id", response.data.id);
                            if(response.data.attempted == "0"){
                                carryvar.flag = '1';
                            }
                            else{
                                carryvar.flag = '2';   
                            }
                            $scope.translate(response.data.language);
                            $state.go('home');
                        }
                        else if(response.data.none == "complete"){
                            carryvar.name = response.data.name;
                            carryvar.score = response.data.score;
                            carryvar.position = response.data.position;
                            carryvar.language = response.data.language;
                            localStorage.setItem("id", response.data.id);
                            carryvar.flag = '3';
                            $scope.translate(response.data.language);
                            $state.go('home');
                        }
                    });
                }
            }
    };
    $scope.translate = function(language){
        if(language == "English"){
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
            carryvar.cltemplate = 'To let the change take effect, proceed to log out and log back in.';
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
            carryvar.hi = 'Hai';
            carryvar.submit = 'Submit';
            carryvar.congrats1 = 'Congragulations!!!You have completed the quiz. Your score is ';
            carryvar.congrats2 = ' and your rank is ';
            carryvar.attempting1 = 'You have attempted ';
            carryvar.attempting2 = ' questions correctly out of ';
            carryvar.attempting3 = ' . Click below to continue.';
	    carryvar.oenglish = 'English';
	    carryvar.omalayalam = 'Malayalam';
	    carryvar.ohindi = 'Hindi';
        }
        else if(language == "Malayalam"){
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
            carryvar.cltemplate = 'മാറ്റം പ്രാബല്യത്തിൽ വരുത്തുന്നതിന്, പുറത്തുകടന്നതിനുശേഷം വീണ്ടും ലോഗ് ഇൻ ചെയ്യുക.';
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
            carryvar.hi = 'നമസ്കാരം ';
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
        else if(language == "Hindi"){
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
            carryvar.cltemplate = 'परिवर्तन प्रभावी होने देने के लिए, लॉग आउट और आगे चलकर लॉग इन करें।ग इन करें।';
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
            carryvar.hi = 'नमस्';
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
    };
    
    $scope.showAlert = function(input) {
        if(input == "email"){
            var alertPopup = $ionicPopup.alert({
                title: 'Empty Email!!!',
                template: 'Please enter your email address....'
            });
        }
        else if(input == "password"){
            var alertPopup = $ionicPopup.alert({
                title: 'Empty Password!!!',
                template: 'Please enter your password....'
            });
        }
        else if(input == "email2"){
            var alertPopup = $ionicPopup.alert({
                title: 'Wrong Email!!!',
                template: 'Please enter your correct email address....'
            });
        }
        else if(input == "password2"){
            var alertPopup = $ionicPopup.alert({
                title: 'Wrong Password!!!',
                template: 'Please enter your correct password....'
            });
        }
    };
    
    $scope.showLoading = function() {
        $ionicLoading.show({
            template: '<ion-spinner icon="dots"></ion-spinner>'
        });
    };

    $scope.hideLoading = function(){
        $ionicLoading.hide();
    };
    
    $scope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
            var conn = $timeout( function(){
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Error!!!',
                    template: 'Please connect to internet to proceed....'
                });
            }, 3000 );
            $http.post("https://nijojob.heliohost.org/NewApp/www/php/index.php",{Uid: "id"})
            .then(function (response) {
                $timeout.cancel(conn);
            });
            if(angular.isNumber(localStorage.getItem("id")) == "true"){
                $state.go('home');
            }
        });
        
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$ionicPopup', '$http', '$location', 'carryvar', '$state', '$ionicLoading', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $http, $location, carryvar, $state, $ionicLoading, $timeout) {
    $scope.data = {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        language: '',
        signup: function(){
            if($scope.data.name === ""){
                $scope.showAlert("name");
            }
            else if($scope.data.email === ""){
                $scope.showAlert("email");
            }
            else if($scope.data.password === ""){
                $scope.showAlert("password");
            }
            else if($scope.data.password != $scope.data.cpassword){
                $scope.showAlert("cpassword");
            }
            else{
                $scope.showLoading();
                $http.post("https://nijojob.heliohost.org/NewApp/www/php/index.php",{name: this.name, email: this.email, passwd: this.password, language: this.language})
                    .then(function (response) {
                        $scope.hideLoading();
                        if(response.data == "email"){
                            $scope.showAlert("email");
                        }
                        else if(response.data == "success"){
                            $state.go('login');
                        }
                    });
            }
        }
    };
    $scope.showAlert = function(input) {
        if(input == "name"){
            var alertPopup = $ionicPopup.alert({
                title: 'Empty Name!!!',
                template: 'Please enter your name....'
            });
        }
        else if(input == "email"){
            var alertPopup = $ionicPopup.alert({
                title: 'Empty Email!!!',
                template: 'Please enter your email address....'
            });
        }
        else if(input == "password"){
            var alertPopup = $ionicPopup.alert({
                title: 'Empty Password!!!',
                template: 'Please enter your password....'
            });
        }
        else if(input == "cpassword"){
            var alertPopup = $ionicPopup.alert({
                title: 'Password don\'t match!!!',
                template: 'Please re-enter your password....'
            });
        }
        else if(input == "email2"){
            var alertPopup = $ionicPopup.alert({
                title: 'Email address already used!!!',
                template: 'Please enter another email address....'
            });
        }
    };
    $scope.showLoading = function() {
        $ionicLoading.show({
            template: '<ion-spinner icon="dots"></ion-spinner>'
        });
    };

    $scope.hideLoading = function(){
        $ionicLoading.hide();
    };
    
    $scope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
            var conn = $timeout( function(){
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Error!!!',
                    template: 'Connection to internet/server has been lost. Please try after sometime...'
                });
            }, 3000 );
            $http.post("https://nijojob.heliohost.org/NewApp/www/php/index.php",{Uid: "id"})
            .then(function (response) {
                $timeout.cancel(conn);
            });
        });
}])
   
.controller('homeCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$timeout', 'carryvar', '$state', '$ionicLoading', '$interval', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup, $timeout, carryvar, $state, $ionicLoading, $interval) {
    $scope.data = {
        name: carryvar.name,
        attempted: carryvar.attempted,
        correct: carryvar.correct,
        score: carryvar.score,
        position: carryvar.position,
        flag: carryvar.flag,
        fquest: '0',
        language: carryvar.language,
        hi: carryvar.hi,
        welcome: carryvar.welcome,
        questions: carryvar.questions,
        message: '',
        conn: '',
        nlanguage: '',
        tlanguage: carryvar.tlanguage,
        change: carryvar.change,
        cplanguage: carryvar.cplanguage
    };
    
    $scope.question = function(){
            carryvar.language = $scope.data.language;
            if($scope.data.position !== ""){
                $scope.showLoading();
                $scope.data.conn = $timeout( function(){
                    var alertPopup = $ionicPopup.alert({
                        title: 'Connection Error!!!',
                        template: 'Connection to internet/server has been lost. Please try after sometime...'
                    });
                }, 3000 );
                $http.post("https://nijojob.heliohost.org/NewApp/www/php/index.php",{count: '0', language: carryvar.language, id: localStorage.getItem("id")} )
                .then(function (response) {
                    counter = Number(response.data.attempted) + 1;
                    $http.post( "https://nijojob.heliohost.org/NewApp/www/php/index.php", {counter: counter, language: carryvar.language, id: localStorage.getItem("id")} )
						.then(function( response ) {
                            $timeout.cancel($scope.data.conn);
                            $scope.hideLoading();
							if(response.data.none == "complete"){
                                var alertPopup = $ionicPopup.alert({
                                    title: carryvar.ctitle,
                                    template: carryvar.ctemplate
                                });
								$state.go('home');
							}
							else{
                                carryvar.num = response.data.none;
                                carryvar.question = response.data.question;
                                carryvar.option1 = response.data.a;
                                carryvar.option2 = response.data.b;
                                carryvar.option3 = response.data.c;
                                carryvar.option4 = response.data.d;
                                carryvar.ans = response.data.ans;
								$state.go('questions');
							}
						});
                });
            }
            else{
                $scope.data.fquest = '1';
            }
        };
    
    $scope.logout = function(){
        var alertPopup = $ionicPopup.alert({
            title: carryvar.ltitle,
            template: carryvar.ltemplate,
            buttons: [
                    { 
                        text: carryvar.no,
                        type: 'button-calm',
                        onTap: function(e) {
                            $state.go('home');
                        }
                    },
                    { 
                        text: carryvar.yes,
                        type: 'button-positive',
                        onTap: function(e) {
                            localStorage.removeItem("id");
                            $state.go('login'); 
                        }
                    }
                ]
        });
    };
    
    $scope.showLoading = function() {
        $ionicLoading.show({
            template: '<ion-spinner icon="dots"></ion-spinner>'
        });
    };

    $scope.hideLoading = function(){
        $ionicLoading.hide();
    };
    
    $scope.setmessage = function(){
        if(carryvar.flag == '1'){
            $scope.data.message = carryvar.hi + ' ' + $scope.data.name + ',<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;' + carryvar.welcome;
        }
        else if(carryvar.flag == '3'){
            $scope.data.message = carryvar.hi + ' ' + $scope.data.name + ',<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;' + carryvar.congrats1 + $scope.data.score + carryvar.congrats2 + $scope.data.position;
        }
        else if(carryvar.flag == '2'){
            $scope.data.message = carryvar.hi + ' ' + $scope.data.name + ',<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;' + carryvar.attempting1 + $scope.data.attempted + carryvar.attempting2 + $scope.data.correct +  carryvar.attempting3;
        }
    };
    
    $scope.chglanguage = function(){
        $http.post("https://nijojob.heliohost.org/NewApp/www/php/index.php",{nlanguage: $scope.data.nlanguage, id: localStorage.getItem("id")} )
            .then(function (response) {
                var alertPopup = $ionicPopup.alert({
                    title: carryvar.cltitle,
                    template: carryvar.cltemplate,
                    buttons: [
                            { 
                                text: carryvar.no,
                                type: 'button-calm',
                                onTap: function(e) {
                                    $state.go('home');
                                }
                            },
                            { 
                                text: carryvar.yes,
                                type: 'button-positive',
                                onTap: function(e) {
                                    localStorage.removeItem("id");
                                    $state.go('login'); 
                                }
                            }
                        ]
                });
            });
    };
    
    $scope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){ 
            $scope.setmessage();
            $scope.data.name = carryvar.name;
            $scope.data.attempted = carryvar.attempted;
            $scope.data.correct = carryvar.correct;
            $scope.data.score = carryvar.score;
            $scope.data.position = carryvar.position;
            $scope.data.flag = carryvar.flag;
            $scope.data.fquest = '0';
            $scope.data.language = carryvar.language;
            if(angular.isNumber(localStorage.getItem("id")) == "false"){
                $state.go('login');
            }
        });
}])
   
.controller('questionsCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$timeout', 'carryvar', '$state', '$interval', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup, $timeout, carryvar, $state, $interval, $ionicLoading) {
    $scope.data = {
        no: carryvar.num,
        question: carryvar.question,
        option1: carryvar.option1,
        option2: carryvar.option2,
        option3: carryvar.option3,
        option4: carryvar.option4,
        ans: carryvar.ans,
        option: '',
        timer: 30,
        promise: '',
        A: carryvar.A,
        B: carryvar.B,
        C: carryvar.C,
        D: carryvar.D,
        flag: '1',
        resp: '',
        pcount: '',
        submit: carryvar.submit,
        message: '',
        E: '',
        F: '',
        options1: '',
        options2: '',
        next: carryvar.next,
        cancel: carryvar.cancel,
        conn: ''
    };
    
    $scope.logout = function(){
        console.log("hai");
        var alertPopup = $ionicPopup.alert({
            title: carryvar.ltitle,
            template: carryvar.ltemplate,
            buttons: [
                    { 
                        text: carryvar.no,
                        type: 'button-calm',
                        onTap: function(e) {
                            $state.go('questions');
                        }
                    },
                    { 
                        text: carryvar.yes,
                        type: 'button-positive',
                        onTap: function(e) {
                            localStorage.removeItem("id");
                            $interval.cancel($scope.data.promise);
                            $scope.data.promise = '';
                            $scope.data.timer = 100000;
                            $state.go('login'); 
                        }
                    }
                ]
        });  
    };
        
    $scope.enter = function(){
        if($scope.data.option !== ""){
            $scope.showLoading();
            $scope.data.conn = $timeout( function(){
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Error!!!',
                    template: 'Connection to internet/server has been lost. Please try after sometime...'
                });
            }, 3000 );
            $http.post("https://nijojob.heliohost.org/NewApp/www/php/index.php",{question: $scope.data.no, language: carryvar.language, answer: $scope.data.option, id: localStorage.getItem("id")})
                .then(function (response) {
                    $timeout.cancel($scope.data.conn);
                    $scope.hideLoading();
                    if(response.data == "correct"){
                        $scope.data.pcount = '0';
                        $interval.cancel($scope.data.promise);
                        $scope.data.promise = '';
                        $scope.data.timer = 30;
                        $scope.submition("correct");
                    }
                    else if(response.data == "incorrect"){
                        $interval.cancel($scope.data.promise);
                        $scope.data.pcount = '0';
                        $scope.data.promise = '';
                        $scope.data.timer = 30;
                        $scope.submition("incorrect");
                    }
                });
        }
        else{
            var alertPopup = $ionicPopup.alert({
                title: carryvar.otitle,
                template: carryvar.otemplate
            });
        }
    };
        
    $scope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){ 
            $scope.finterval();
            if(angular.isNumber(localStorage.getItem("id")) == "false"){
                $state.go('login');
            }
        });
        
    $scope.showLoading = function() {
        $ionicLoading.show({
            template: '<ion-spinner icon="dots"></ion-spinner>'
        });
    };

    $scope.hideLoading = function(){
        $ionicLoading.hide();
    };
    
    $scope.finterval = function() {
        $scope.data.promise = $interval(function() {
                if ($scope.data.timer > 0) {
                    $scope.data.timer -= 1;
                } 
                else {
                    $interval.cancel($scope.data.promise);
                    $scope.data.promise = '';
                    $scope.data.pcount = '1';
                    $scope.submition("timeout");
                }
            }, 1000);
    };
    $scope.submition = function(action){
        if(action == "correct"){
            $scope.data.message1 = carryvar.success1;
            $scope.data.resp = '0';
        }
        else if(action == "incorrect"){
            $scope.data.message1 = carryvar.wrong1;
            $scope.data.resp = '1';
        }
        else if(action == "timeout"){
            $scope.data.message1 = carryvar.timeout1;
            $scope.data.resp = '0';
        }
        if($scope.data.option == 'A'){
            $scope.data.E = $scope.data.A;
            $scope.data.options1 = $scope.data.option1;
        }
        else if($scope.data.option == 'B'){
            $scope.data.E = $scope.data.B;
            $scope.data.options1 = $scope.data.option2;
        }
        else if($scope.data.option == 'C'){
            $scope.data.E = $scope.data.C;
            $scope.data.options1 = $scope.data.option3;
        }
        else if($scope.data.option == 'D'){
            $scope.data.E = $scope.data.D;
            $scope.data.options1 = $scope.data.option4;
        }
        if($scope.data.ans == 'A'){
            $scope.data.F = $scope.data.A;
            $scope.data.options2 = $scope.data.option1;
        }
        else if($scope.data.ans == 'B'){
            $scope.data.F = $scope.data.B;
            $scope.data.options2 = $scope.data.option2;
        }
        else if($scope.data.ans == 'C'){
            $scope.data.F = $scope.data.C;
            $scope.data.options2 = $scope.data.option3;
        }
        else if($scope.data.ans == 'D'){
            $scope.data.F = $scope.data.D;
            $scope.data.options2 = $scope.data.option4;
        }
        $scope.data.message2 = carryvar.forward;
        $scope.data.flag = '2';
    };
    
    $scope.next = function(){
        $scope.showLoading();
        $scope.data.conn = $timeout( function(){
            var alertPopup = $ionicPopup.alert({
                title: 'Connection Error!!!',
                template: 'Connection to internet/server has been lost. Please try after sometime...'
            });
        }, 3000 );
        $http.post( "https://nijojob.heliohost.org/NewApp/www/php/index.php", {count: $scope.data.pcount, language: carryvar.language, id: localStorage.getItem("id")})
			.then(function( response ) {
				counter = Number(response.data.attempted) + 1;
                $http.post( "https://nijojob.heliohost.org/NewApp/www/php/index.php", { counter: counter, language: carryvar.language, id: localStorage.getItem("id") } )
                    .then(function( response ) {
                        $timeout.cancel($scope.data.conn);
                        $scope.hideLoading();
                        if(response.data.none == "complete"){
                            carryvar.name = response.data.name;
                            carryvar.score = response.data.score;
                            carryvar.position = response.data.position;
                            carryvar.flag = '3';
                            $interval.cancel($scope.data.promise);
                            $scope.data.promise = '';
                            $scope.data.timer = 100000;
                            $state.go('home', $stateParams, {reload: true, inherit: false});
                        }
                        else{
                            $scope.data.no = response.data.none;
                            $scope.data.question = response.data.question;
                            $scope.data.option1 = response.data.a;
                            $scope.data.option2 = response.data.b;
                            $scope.data.option3 = response.data.c;
                            $scope.data.option4 = response.data.d;
                            $scope.data.ans = response.data.ans;
                            $scope.data.flag = '1';
                            $scope.data.option = '';
                            $scope.data.timer = 30;
                            $scope.finterval();
                        }
                    });
			});
    };
    
    $scope.cancel = function(){
        $scope.showLoading();
        $scope.data.conn = $timeout( function(){
            var alertPopup = $ionicPopup.alert({
                title: 'Connection Error!!!',
                template: 'Connection to internet/server has been lost. Please try after sometime...'
            });
        }, 3000 );
        $http.post( "https://nijojob.heliohost.org/NewApp/www/php/index.php", {count: $scope.data.pcount, language: carryvar.language, id: localStorage.getItem("id") })
            .then(function( response ) {
                $timeout.cancel($scope.data.conn);
                $scope.hideLoading();
                carryvar.name = response.data.name;
                carryvar.attempted = response.data.attempted;
                carryvar.correct = response.data.correct;
                carryvar.flag = '2';
                $interval.cancel($scope.data.promise);
                $scope.data.promise = '';
                $scope.data.timer = 100000;
                $state.go('home', $stateParams, {reload: true, inherit: false});
            });
    };
    
    $scope.alerting = function() {
        var myF = angular.element( document.querySelector( '.nijo' ) );
        myF.removeClass('nijo');
        if($scope.data.option == "A"){
            var baseElement = document.querySelector('.dataA');
            var myEl = angular.element( baseElement.querySelector( '.item-content' ) );
            myEl.addClass('nijo');
        }
        else if($scope.data.option == "B"){
            var baseElement = document.querySelector('.dataB');
            var myE2 = angular.element( baseElement.querySelector( '.item-content' ) );
            myE2.addClass('nijo');
        }
        else if($scope.data.option == "C"){
            var baseElement = document.querySelector('.dataC');
            var myE3 = angular.element( baseElement.querySelector( '.item-content' ) );
            myE3.addClass('nijo');
        }
        else if($scope.data.option == "D"){
            var baseElement = document.querySelector('.dataD');
            var myE4 = angular.element( baseElement.querySelector( '.item-content' ) );
            myE4.addClass('nijo');
        }
    };
}])
 
