'use strict'
var line = require("@line/bot-sdk")
var express = require("express")
var admin = require("firebase-admin")
var line_message = require("./line_object.js")

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
  };

var firebaseConfig = {
  "type": "service_account",
  "project_id": "sasa-ec240",
  "private_key_id": "e08e64597e863f2647a7530fe69045e88928d5a0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDxT4CKemo9qU3X\ntuCu9C+KvvB6JpzpHEXPU2csYXWZmW6Diadk6CLeD/ZtCSqvVusmz3CXELFG/TZa\n+d/vHZ8gAvY32FHHDdnrf6nA3gNlU85RBAzKnZgcNXx8Jz5iZY/y1NSSJN+wKTvh\nTt9fyzIbTlgBIrYhaEYIVO9LKQdF8Z5wi9Qge670VAGlVyJQ7L2fQuRX5SVsp/Hh\nOUDaIrUS16prI0481Ljl+sAEbV9j2AbR8MZqosvxVSm8zzoxVN/ii1RZJrjqF5uB\n6B9kndQkk84YALoTH4q+woY9ZOGFgs/xuUF2hRNx1uUFTjip14DSZ2Ax2JwqHr7k\nCqbpHZenAgMBAAECggEADGRWSAY4TXlTx4ebKzDb/iaHB+bSuP/cL+TrD/LjTKN9\n8uBPSdXH8JpmP7wwRnfStJgDgqZ3TBt1vp9FWiytvsGYLk78CBpUfgz8xSxBhWMT\n3cI0+/Sy2oP+pAuJ3xizFzfJwMWG/S9o5U2dF/jB1ngj+c70Bmwp6ISgEz6EoplH\nzdil2I6vfYAblCrx3DVJk0Gx7lWngdYMERaw6uFQkMx7iC4hQjF55dpbUXm0xyWI\nsWnzVAzw9+wkwkX8RYuMjppCZElxl4E/wArwApx4djlRFCD9mWUlpSSIys/AeGlR\n4aILs8UXCNeFGSnSjrvQmCopCg7HKzXvnz7BAm2QgQKBgQD/LUYlhAk69rzr27H+\nJWvEdg+Nn8bvtSP6RGpqjNYf59G7rBfXig7aORiluHV6k/KP6HkPneEONTI6SNRs\n5UYAt2dR8D+O2ohbYVqnnsEN5v/sYbkeNyQExaBu1xsZS/1hN5I8w+u9kE+OuaLX\n2p9hvZjA5Vm1jmgGZvqG9bNIgQKBgQDyFsb6xowVbSvm8rgKo19eXQTZIc4f2T8i\nipvL4CB38zmh3oYWLx939hPMfnlqNHhItLR464sCn302PR4X1uRhknPD142uklQ9\n7+Tm01PZn2CXGHAFQeRlbtTjr7n++tIfbpYgDrFPphQ3Pymhf9DpuPnjZjhLW8W3\n530bo6eMJwKBgQCT8j7iT2w+mIGuScEn9bBGxqB73zArGJ3UY0hDoIYhF3ndUoi8\nOdokocfthUXvnMmcsA9Ig6PRZfxKGKG4xTFSBwPLWPywqXk3aflyh7OsiMrG1V3L\n6/JhJee/e83FW+57KAoMWxdZ38qQmIaWmbWgqJlg9ViO0BL160zDZL7egQKBgGL3\nvNC4anw37UK051gyAcLp9BlwIHwUrCLK13Y5YgynemAaQGbBTPQVvXJUIf6xBJt0\nhHMKmAGygdWylqLYTvU0ke72KA299IJ9l+5lZloJNcuPSfxcO6rb7FxIcpkyoMQI\nyYbBeus80fbj83j6b8WcwUuddlYYZnQQRq0N8mjxAoGAbd4jWsrxe1PAE953Uz8X\nzMrvYaLihc5Q8pTGCY7KE8SK10d1KddapdJaKeVcQ61SO0fj0U1+xl+7Rjq6c4Bh\n2LEG0QMe3fDN9ZOFAo54EhmZgvH09tNBnecWmge+FV9+qFsZlJvMP2Km1VTNNDuz\nEH7NgsoufcwdcvS6hJnrevc=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-886gs@sasa-ec240.iam.gserviceaccount.com",
  "client_id": "108408223298447431988",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-886gs%40sasa-ec240.iam.gserviceaccount.com"
}
;
  admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: "https://sasa-ec240.firebaseio.com"
  });

  const client = new line.Client(config);
  const app = express();
  
  // register a webhook handler with middleware
  // about the middleware, please refer to doc
  app.post('/', line.middleware(config), (req, res) => {
        Promise.all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
  });
app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({show_id: process.env.myLiffId_show,scan_id: process.env.myLiffId_scan,business_register:process.env.business_register,business_show_goods:process.env.business_show_goods,buy_goods:process.env.buy_goods,show_record:process.env.show_record,show_activity:process.env.show_activity});
});
  

  async function handleEvent(event) {
    console.log(event);
    
    var userId=event.source.userId
    var userName;
    var userImg;
    var is_user = false;
    var have_money;
    var is_user_message;
    var user_check;
    admin.database().ref("/user/"+userId).on("value",function(snapshot){
      user_check=snapshot.hasChild("name")
      is_user = snapshot.hasChild("isbusiness")
      have_money = user_check ? snapshot.val().cash :0
      is_user_message = is_user ? "管理者" : "使用者"
    })
    await client.getProfile(userId).then((profile) =>
    {
      userName = profile.displayName
      userImg = profile.pictureUrl
      if(userImg===undefined){userImg="https://firebasestorage.googleapis.com/v0/b/golf-67815.appspot.com/o/0hynwh2knsJkFKEQ2Zs9BZFnZUKCw9PyAJMnNgc2kXenNgImZFJXJtJWgYeyE3dWEednNoJjgRfHM1.jpg?alt=media&token=68212aef-ef5a-433a-894e-77db9e47d75f"}
    });
    switch (event.type){
      case "message":
        var orginal_text =  event.message.text
        if(orginal_text=="/申請成為商家")
        {
          client.replyMessage(event.replyToken,line_message.getting_business_setting())
        }
        else if (orginal_text == "/我是商家")
        {
          client.linkRichMenuToUser(userId,"richmenu-0242f368349fa13f1cc35b49ff22f14b")
        }
        else if (orginal_text == "/個人資料"){
          client.replyMessage(event.replyToken,line_message.getting_profile_message(is_user_message,userName,have_money))
        }
        else if (orginal_text == "/使用者"){
          client.replyMessage(event.replyToken,{"type":"text","text":"歡迎"+userName+"使用我們的機器人，可以透過下方選單選擇您的功能，透過參加活動與拿紅包可以拿到樂幣，樂幣可以兌換商品。"})
        }
        break;
      case "follow":
        client.replyMessage(event.replyToken,line_message.getting_business_setting())
        if(!user_check)
        {
          admin.database().ref("user/"+userId).set({"name":userName,"userId":userId,"userImg":userImg,"cash":100})
        }
        
        break;
      case "postback":
        if(event.postback.data=="main_page_next"){client.linkRichMenuToUser(userId,"richmenu-2fcea0b029a3f47117862f8298a2aa04")}
        else if(event.postback.data=="main_page_return"){client.linkRichMenuToUser(userId,"richmenu-55542ba438c0e60c746c24edc4da87b7")}
        else if(event.postback.data=="business_main_page_next"){client.linkRichMenuToUser(userId,"richmenu-d62d715409c73447326dad5dd5113b82")}
        else if(event.postback.data=="business_main_page_return"){client.linkRichMenuToUser(userId,"richmenu-0242f368349fa13f1cc35b49ff22f14b")}
      case "beacon":
        break;
    }

    // if (event.type !== 'message' || event.message.type !== 'text') {
    //   return Promise.resolve(null);
    // }
    // const echo = { type: 'text', text: event.message.text };

    // return client.replyMessage(event.replyToken, echo);
  }
  

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
