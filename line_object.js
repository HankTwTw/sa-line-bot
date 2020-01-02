
// var weather_quckily_reply_message={"a":123}
var getting_business_setting = {
    "type": "template",
    "altText": "商家訊息",
    "template": {
      "type": "confirm",
      "actions": [
        {
          "type": "message",
          "label": "使用者",
          "text": "使用者"
        },
        {
          "type": "uri",
          "label": "商家",
          "uri": "line://app/1653687101-RlWzmgmd"
        }
      ],
      "text": "請問您的身分?"
    }
  }
var profile_message=
{
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "歡迎 使用者",
        "weight": "bold",
        "color": "#1DB446",
        "size": "lg"
      },
      {
        "type": "text",
        "text": "吳俊毅",
        "weight": "bold",
        "size": "3xl",
        "margin": "md"
      },
      {
        "type": "separator",
        "margin": "xxl"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xxl",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "剩餘金額",
                "size": "xxl",
                "color": "#555555",
                "flex": 0
              },
              {
                "type": "text",
                "text": "$50000",
                "size": "xxl",
                "color": "#111111",
                "align": "end"
              }
            ]
          }
        ]
      }
    ]
  },
  "styles": {
    "footer": {
      "separator": true
    }
  }
}
}
module.exports = {
    // get_search_opengroup_message: function () {
    //   let setmessage=JSON.parse(JSON.stringify(search_group_message))
    // },
    getting_business_setting:function(){return getting_business_setting},
    getting_profile_message:function(is_user,name,money){
      let setmessage=JSON.parse(JSON.stringify(profile_message))
      setmessage.contents.body.contents[0].text="歡迎 "+is_user
      setmessage.contents.body.contents[1].text=name
      setmessage.contents.body.contents[3].contents[0].contents[1].text="$"+money
      return setmessage
    }
}