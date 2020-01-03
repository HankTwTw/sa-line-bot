
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
var getting_activity_message=
{
  "type": "flex",
  "altText": "Flex Message",
  "contents": 
{
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
}
var intro_message={
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "direction": "ltr",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "紅包功能介紹",
              "size": "xxl",
              "align": "center",
              "weight": "bold",
              "color": "#0035F8"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/sasa-ec240.appspot.com/o/member%20image%2Fgive_red_envelope.png?alt=media&token=4543eb71-0e9e-4d5a-a077-515168c78931",
          "size": "full",
          "aspectRatio": "1.51:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "點擊收紅包顯示QRCODE   ↓",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "color": "#000000",
              "wrap": true
            },
            {
              "type": "text",
              "text": "點擊送紅包掃描  QRCODE ↓",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "wrap": true
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
                "type": "uri",
                "label": "收紅包",
                "uri": "line://app/1653687101-Aq2Ogxg9"
              },
              "color": "#000000",
              "gravity": "center"
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "送紅包",
                "uri": "line://app/1653687101-G4dbmPmY"
              },
              "color": "#000000"
            }
          ]
        },
        "styles": {
          "header": {
            "backgroundColor": "#E1FE91"
          },
          "hero": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "body": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "footer": {
            "backgroundColor": "#E1FE91",
            "separator": true,
            "separatorColor": "#000000"
          }
        }
      },
      {
        "type": "bubble",
        "direction": "ltr",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "活動功能介紹",
              "size": "xxl",
              "align": "center",
              "weight": "bold",
              "color": "#0035F8"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/sasa-ec240.appspot.com/o/member%20image%2Fevent.png?alt=media&token=be6a7178-2432-431b-b279-4eabeecb8150",
          "size": "full",
          "aspectRatio": "1.51:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "點擊最新活動，報名您喜歡的內容。",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "color": "#000000",
              "wrap": true
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
                "type": "uri",
                "label": "參加活動",
                "uri": "line://app/1653687101-vXzkyLy5"
              },
              "color": "#000000",
              "gravity": "center"
            }
          ]
        },
        "styles": {
          "header": {
            "backgroundColor": "#E1FE91"
          },
          "hero": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "body": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "footer": {
            "backgroundColor": "#E1FE91",
            "separator": true,
            "separatorColor": "#000000"
          }
        }
      },
      {
        "type": "bubble",
        "direction": "ltr",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "兌換商品介紹",
              "size": "xxl",
              "align": "center",
              "weight": "bold",
              "color": "#0035F8"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/sasa-ec240.appspot.com/o/member%20image%2Fexchange_product.png?alt=media&token=a5cec880-5701-42bd-991e-51db9fc78695",
          "size": "full",
          "aspectRatio": "1.51:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "蒐集樂幣來兌換商品",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "wrap": true
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
                "type": "uri",
                "label": "兌換商品",
                "uri": "line://app/1653687101-ZMvXzVz5"
              },
              "color": "#000000"
            }
          ]
        },
        "styles": {
          "header": {
            "backgroundColor": "#E1FE91"
          },
          "hero": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "body": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "footer": {
            "backgroundColor": "#E1FE91",
            "separator": true,
            "separatorColor": "#000000"
          }
        }
      },
      {
        "type": "bubble",
        "direction": "ltr",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "分享好友介紹",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "color": "#0035F8"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/sasa-ec240.appspot.com/o/member%20image%2Fshare_friend.png?alt=media&token=0f30fab1-3da1-4720-899d-72eec2598746",
          "size": "full",
          "aspectRatio": "1.51:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "一鍵分享，介紹給您的親朋好友使用",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "wrap": true
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
                "type": "uri",
                "label": "分享好友",
                "uri": "line://nv/recommendOA/@296eyduj"
              },
              "color": "#000000"
            }
          ]
        },
        "styles": {
          "header": {
            "backgroundColor": "#E1FE91"
          },
          "hero": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "body": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "footer": {
            "backgroundColor": "#E1FE91",
            "separator": true,
            "separatorColor": "#000000"
          }
        }
      },
      {
        "type": "bubble",
        "direction": "ltr",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "個人資料介紹",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "color": "#0035F8"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/sasa-ec240.appspot.com/o/member%20image%2Fpersonal%20information.png?alt=media&token=456506ae-a4bd-4cef-bb61-a0acdf42be77",
          "size": "full",
          "aspectRatio": "1.51:1",
          "aspectMode": "fit"
        },
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "查看自己的樂幣餘額",
              "size": "xl",
              "align": "center",
              "weight": "bold",
              "color": "#000000",
              "wrap": true
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
                "type": "message",
                "label": "個人資料",
                "text": "/個人資料"
              },
              "color": "#000000",
              "gravity": "center"
            }
          ]
        },
        "styles": {
          "header": {
            "backgroundColor": "#E1FE91"
          },
          "hero": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "body": {
            "backgroundColor": "#E1FE91",
            "separatorColor": "#000000"
          },
          "footer": {
            "backgroundColor": "#E1FE91",
            "separator": true,
            "separatorColor": "#000000"
          }
        }
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
    getting_activity_message:function(){return getting_activity_message},
    getting_intro_message:function(){return intro_message}
}