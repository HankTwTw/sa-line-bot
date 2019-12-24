
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
                myLiffId = jsonResponse.show_id;
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
function initializeApp() {
    
    // liff.scanCode().then(result => {
    //     // e.g. result = { value: "Hello LIFF app!" }
    //     const stringifiedResult = result;
    //     window.alert('result' + result.value);
    //     // liff.closeWindow();
    // }).catch(err => {
    //     // liff.closeWindow();
    // });

    liff.getProfile().then(function(profile) {
        new QRCode(document.getElementById("qrcode"),  {
            text: profile.userId,
            width: 256,
            height: 256,
            colorDark : '#000000',
            colorLight : '#ffffff',
            correctLevel : QRCode.CorrectLevel.H
          });
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


 





