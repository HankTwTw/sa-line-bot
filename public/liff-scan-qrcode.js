
window.onload = function() {
    
    const useNodeJS = true;   // if you are not using a node server, set this value to false
    const defaultLiffId = "";   // change the default LIFF value if you are not using a node server

    // DO NOT CHANGE THIS
    let myLiffId = "";

    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    if (useNodeJS) {
        fetch('/send-id')
            .then(function(reqResponse) {
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                myLiffId = jsonResponse.scan_id;
                initializeLiff(myLiffId);
            })
            .catch(function(error) {
                document.getElementById("liffAppContent").classList.add('hidden');
                document.getElementById("nodeLiffIdErrorMessage").classList.remove('hidden');
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiff(myLiffId);
    }
};
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            initializeApp();
        })
        .catch((err) => {
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
}

/**
 * Initialize the app by calling functions handling individual app components
 */
async function initializeApp() {
    var firebaseConfig = {
        apiKey: "AIzaSyB_v9rhe7uhubTFT8_-rNlCagL_QzSRxS8",
        authDomain: "sasa-ec240.firebaseapp.com",
        databaseURL: "https://sasa-ec240.firebaseio.com",
        projectId: "sasa-ec240",
        storageBucket: "sasa-ec240.appspot.com",
        messagingSenderId: "673434458765",
        appId: "1:673434458765:web:0090d396b25000aa10e0c4",
        measurementId: "G-HDTQ10VYRJ"
      };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    document.getElementById("button_scan").innerHTML="請點選我掃描QRCODE";
    
    scan()

    var user_Id = value[0];
    var name = value[1];
    var have_money=0
    liff.getProfile().then(function(profile) {
        // profile.displayName
        firebase.database().ref("user/"+profile.userId).once("value",function(snap){
            console.log(snap.val().name)
            have_money=snap.val().cash;
    })
    }).catch(function(error) {
        window.alert('Error getting profile: ' + error);
    });


    


    // liff.closeWindow();
    // liff.sendMessages([{
    //     'type': 'text',
    //     'text': "You've successfully sent a message! Hooray!"
    // }]).then(function() {
    //     window.alert('Message sent');
    // }).catch(function(error) {
    //     window.alert('Error sending message: ' + error);
    // });
}
function scan(){
    liff.scanCode().then(result => {
        // e.g. result = { value: "Hello LIFF app!" }
        const stringifiedResult = result.value;
        console.log(result.value)
        var value = stringifiedResult.split("&");
        user_Id = value[0];
        name = value[1];
        document.getElementById("button_scan").innerHTML="送給"+name;
    }).catch(err => {
       console.log(err)
        
    });
}
function send_money(){
    var dollar = document.getElementById("typing_dollar").value
    
    if(dollar==null){dollar=0}
    if(confirm("確定要給?"+name+dollar+"元嗎? 你有"+have_money+"元")){
       // firebase.database().ref("user/"+value).once("value",function(snap){
   
       //     console.log(snap.val().name)
       //     window.alert("value"+value+"val"+name)
           
       // })
    }
}


 





