var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content;

function start() {
    recognition.start();
    }
    
    recognition.onresult= function (event){
        console.log(event);
        Content = event.results[0][0].transcript.toLowerCase();
        console.log(Content);
        if (Content=="take my selfie") {  
        console.log("TAKING SELFIE-->");
        speak();
        }
        
    }

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach("#camera");
    speak_data = "TAKING UR SELFIE IN 5 SECONDS";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function() {    
        img_id = "s1";
        take_snapshot();
        speak_data = "TAKING UR SELFIE IN 10 SECONDS";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function() {
        img_id = "s2";
        take_snapshot();
        speak_data = "TAKING UR SELFIE IN 15 SECONDS";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000);

    setTimeout(function() {

        img_id = "s3"
        take_snapshot();
        
    }, 15000);
    

}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});

function take_snapshot() {

    Webcam.snap(function(data_uri){
        if (img_id == "s1"){

        document.getElementById("s1").innerHTML = "<img id='selfie1' src='"+data_uri+"'>";

        }

        if (img_id == "s2"){

            document.getElementById("s2").innerHTML = "<img id='selfie2' src='"+data_uri+"'>";
    
            }

            if (img_id == "s3"){

                document.getElementById("s3").innerHTML = "<img id='selfie3' src='"+data_uri+"'>";
        
                }
    });

}
