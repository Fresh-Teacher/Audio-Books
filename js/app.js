var nativeVoice = 1, voices, speechSpeed = 1, info;

var setInput = function() {
    var a = document.getElementById("ttsInput").value;
    if(a !== "") {
        info = a;
    }
    else {
        info = "Yo... Whazzzup ??? Paste anything here, and press the speak button to convert text into speech !!!";
    }
}

var setSpeed = function(x) {
    var b = document.getElementById("select-speed").value;
    speechSpeed = b;
    console.log(b);
}

var startSpeech = function() {
    setInput();
    voices = document.getElementById("select-voice");
    nativeVoice = voices.options[voices.selectedIndex].value;
    setSpeed();
    switch(nativeVoice){
        case "1":
            responsiveVoice.speak(info, "UK English Female",{rate: speechSpeed});
            break;
        case "2":
            responsiveVoice.speak(info, "UK English Male", {rate: speechSpeed});
            break;
        case "3":
            responsiveVoice.speak(info, "US English Female", {rate: speechSpeed});
            break;
        case "4":            
            responsiveVoice.speak(info, "US English Male", {rate: speechSpeed});
            break;
        case "5":
            responsiveVoice.speak(info, "Australian Female", {rate: speechSpeed});
            break;
        case "6":
            responsiveVoice.speak(info, "Dutch Female", {rate: speechSpeed});
            break;
//        case "7":
//          responsiveVoice.speak(info, "Hindi Female", {rate: speechSpeed});
//          break;
        case "8":
            responsiveVoice.speak(info, "Japanese Female", {rate: speechSpeed});
            break;
        case "9":
            responsiveVoice.speak(info, "Korean Female", {rate: speechSpeed});
            break;
    }
}

var stopSpeech = function() {
    responsiveVoice.cancel();
}

var checkSupport = function() {
    if(responsiveVoice.voiceSupport()) {
        responsiveVoice.speak("Congratulations! You can listen to the book of Jesse and Lillian online. Click on the Speak Button to start listening.");
    }
    else{
        alert("Congratulations! Your browser doesn't support Listening to the book of Jesse and Lillian online.");
    }    
}

var info = function() {
    alert("How to listen to the book: \n\n1. Click the 'SPEAK' button to access the book contents.\n\n2. Select your preferred voice and speech speed from the dropdown menus.\n\n3. The text will be read aloud using the selected voice.\n\n4. You can stop the speech at any time by clicking the 'STOP' button.\n\n5. Explore more features and information by clicking on the icon of Jesse and Lillian.\n\nEnjoy! 😊");
}
Mousetrap.bind('i', function() { 
    var x = document.getElementById("ttsInput");
    x.focus();
});

Mousetrap.bind(['command+enter', 'ctrl+enter'], function(e) {
    startSpeech();
});

Mousetrap.bind(['command+/', 'ctrl+/'], function(e) {
    stopSpeech();
});

/** 

// code to control the speech speed using keyboard combinations

Mousetrap.bind(['ctrl+,'], function(e) {
    if(speechSpeed >= 0){
        speechSpeed -= 0.2;    
        document.getElementById("select-speed").value = speechSpeed;
    } if(speechSpeed <= 0){
        speechSpeed = 0;
        alert("This is the minimum speed of speech available !");
    }
    console.log(speechSpeed);
});

Mousetrap.bind(['ctrl+.'], function(e) {
    if(speechSpeed !== 0 && speechSpeed <= 1.4){
        speechSpeed += 0.2;    
        document.getElementById("select-speed").value = speechSpeed;
    } if(speechSpeed > 1.4){
        speechSpeed = 1.5;
        alert("This is the maximum speed of speech available !");
    }
    console.log(speechSpeed);
});

**/
