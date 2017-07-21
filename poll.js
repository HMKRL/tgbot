var request = require('request');

request.get('https://api.telegram.org/bot384866064:AAE25TOPViPH27Z4gWD-7O3KIwAjZYCDZLg/getUpdates?offset=766268790', 
        function(err, rsp, body) {
            var update = JSON.parse(body);
            console.log(update.result.length);
        });
