var request = require('request');
var cheerio = require('cheerio');

request('https://translate.google.com/#en/es/Hello World', function (error, response, html) {
  if (!error && response.statusCode == 200) {
  	
  	var delay = 2;//1 seconds
    setTimeout(function(){

    //your code to be executed after 1 seconds
    },2000);

    var $ = cheerio.load(html);
    $('#result_box .hps').each(

    	function() {
    		console.log("function ran");
    		console.log($(this).text());
    	}
    	
  	);

  }

});


