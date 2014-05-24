var express = require('express'),
	rss = require('rss');
 
var app = express();
 
app.get('/rss', function(req, res) {
	var announcements = [
		{"announcement": "Life Groups", "date":"Today", "description":"this is an announcement"}
		
		
	];


	var feed = new rss({
	title: 'title',
    description: 'description',
    feed_url: 'http://localhost:2000/rss',
    site_url: 'http://localhost:2000',
    author: 'Rocky Peak',
    language: 'en',
    
    ttl: '60'
	});

	feed.item({
		title:  'item title',
    description: 'Announcements',
    date: 'May 27, 2014', // any format that js Date can parse.
    
	});
	
	var xml = feed.xml();
	res.contentType('application/xml');
    res.send(xml);
});

 
app.listen(2000);
console.log('Listening on port 2000...');