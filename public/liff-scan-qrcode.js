
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
var have_money,scan_user_Id,name,user_Id,user_name;

function initializeApp() {
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
    // document.getElementById("button_scan").innerHTML="請點選我掃描QRCODE";
    
    scan()

    
   
    liff.getProfile().then(function(profile) {
        user_name = profile.displayName
        user_Id=profile.userId
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
    console.log("hi")
    liff.scanCode().then(result => {
        // e.g. result = { value: "Hello LIFF app!" }
        const stringifiedResult = result.value;
        scan_user_Id = stringifiedResult;
        firebase.database().ref("wine/"+scan_user_Id).once("value",function(snap){
            document.getElementById("wind_pic").setAttribute("src",snap.val().img);
            // name = snap.val().name;
            // document.getElementById("button_scan").innerHTML="送給"+name;
        })
        
    }).catch(err => {
    //    console.log(err)
        
    });
}
// function send_money(){
//     console.log(document.getElementById("typing_dollar").value)
//     if(document.getElementById("typing_dollar").value==""){
//         window.alert("請輸入金額")
//         return
//     }
//     var dollar = parseInt(document.getElementById("typing_dollar").value)
//     if(dollar>have_money){window.alert("您的錢只有"+have_money+"哦，請先參加活動賺取樂幣")}
//     else if(confirm("確定要給?"+name+dollar+"元嗎? 你有"+have_money+"元")){
//        firebase.database().ref("user/"+scan_user_Id).once("value",function(snap){
//            firebase.database().ref("user/"+scan_user_Id+"/cash").set(snap.val().cash+dollar)
//            firebase.database().ref("user/"+user_Id+"/cash").set(have_money-dollar)
//            var key = firebase.database().ref("record").push({tran_amount:dollar,type:"tran_cash",pay_name:user_name,get_name:name}).key
//            firebase.database().ref("record/"+key+"/"+user_Id).set("pay")
//            firebase.database().ref("record/"+key+"/"+scan_user_Id).set("get")
//            window.alert("發送成功")
//            liff.closeWindow();
//            fetch('https://sa-line-bot.herokuapp.com/notify?message='+user_name+"付給了"+name+"$"+dollar+"元紅包")
//        })
//     }
// }


 





