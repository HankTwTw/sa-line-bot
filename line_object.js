
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

module.exports = {
    // get_search_opengroup_message: function () {
    //   let setmessage=JSON.parse(JSON.stringify(search_group_message))
    // },
    getting_business_setting:function(){return getting_business_setting}
}