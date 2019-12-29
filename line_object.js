
var weather_quckily_reply_message={"a":123}
var search_group_message = {"a":123}

module.exports = {
    get_search_opengroup_message: function () {
      let setmessage=JSON.parse(JSON.stringify(search_group_message))
    },
    get_weather_quckily_reply_message:function(){return weather_quckily_reply_message},
}