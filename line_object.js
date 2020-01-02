
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
          "text": "/使用者"
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
                "text": "擁有樂幣",
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
var getting_get_money_message={
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "歡迎參加活動，點擊領取獎金",
          "align": "center"
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "領取獎金",
            "text": "/活動流程",
            "data": "領錢"
          }
        }
      ]
    }
  }
}
var getting_activity_message={
  "type": "bubble",
  "size": "mega",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "2020出遊行",
            "size": "xl",
            "color": "#ffffff",
            "weight": "bold"
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "從",
            "color": "#ffffff66",
            "size": "sm"
          },
          {
            "type": "text",
            "text": "中壢",
            "color": "#ffffff",
            "size": "xl",
            "flex": 4,
            "weight": "bold"
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "到",
            "color": "#ffffff66",
            "size": "sm"
          },
          {
            "type": "text",
            "text": "大溪",
            "color": "#ffffff",
            "size": "xl",
            "flex": 4,
            "weight": "bold"
          }
        ]
      }
    ],
    "paddingAll": "20px",
    "backgroundColor": "#0367D3",
    "spacing": "md",
    "height": "180px",
    "paddingTop": "22px"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "08:30",
            "size": "sm",
            "gravity": "center"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "filler"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "filler"
                  }
                ],
                "cornerRadius": "30px",
                "height": "12px",
                "width": "12px",
                "borderColor": "#EF454D",
                "borderWidth": "2px"
              },
              {
                "type": "filler"
              }
            ],
            "flex": 0
          },
          {
            "type": "text",
            "text": "中壢火車站",
            "gravity": "center",
            "flex": 4,
            "size": "sm"
          }
        ],
        "spacing": "lg",
        "cornerRadius": "30px",
        "margin": "xl"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "filler"
              }
            ],
            "flex": 1
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "filler"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "filler"
                      }
                    ],
                    "width": "2px",
                    "backgroundColor": "#B7B7B7"
                  },
                  {
                    "type": "filler"
                  }
                ],
                "flex": 1
              }
            ],
            "width": "12px"
          },
          {
            "type": "text",
            "text": "搭公車 約40分鐘",
            "gravity": "center",
            "flex": 4,
            "size": "xs",
            "color": "#8c8c8c"
          }
        ],
        "spacing": "lg",
        "height": "64px"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "09:20",
                "gravity": "center",
                "size": "sm"
              }
            ],
            "flex": 1
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "filler"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "filler"
                  }
                ],
                "cornerRadius": "30px",
                "width": "12px",
                "height": "12px",
                "borderWidth": "2px",
                "borderColor": "#6486E3"
              },
              {
                "type": "filler"
              }
            ],
            "flex": 0
          },
          {
            "type": "text",
            "text": "大溪火車站",
            "gravity": "center",
            "flex": 4,
            "size": "sm"
          }
        ],
        "spacing": "lg",
        "cornerRadius": "30px"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "filler"
              }
            ],
            "flex": 1
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "filler"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "filler"
                      }
                    ],
                    "width": "2px",
                    "backgroundColor": "#6486E3"
                  },
                  {
                    "type": "filler"
                  }
                ],
                "flex": 1
              }
            ],
            "width": "12px"
          },
          {
            "type": "text",
            "text": "步行5分鐘",
            "gravity": "center",
            "flex": 4,
            "size": "xs",
            "color": "#8c8c8c"
          }
        ],
        "spacing": "lg",
        "height": "64px"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "09:30",
            "gravity": "center",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "filler"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "filler"
                  }
                ],
                "cornerRadius": "30px",
                "width": "12px",
                "height": "12px",
                "borderColor": "#6486E3",
                "borderWidth": "2px"
              },
              {
                "type": "filler"
              }
            ],
            "flex": 0
          },
          {
            "type": "text",
            "text": "大溪老街",
            "gravity": "center",
            "flex": 4,
            "size": "sm"
          }
        ],
        "spacing": "lg",
        "cornerRadius": "30px"
      }
    ]
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
    },
    getting_get_money_message:function(){return getting_get_money_message},
    getting_activity_message:function(){return getting_activity_message}
}