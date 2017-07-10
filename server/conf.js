'use strict';

const Config = {

	websiteTitle: "Website Test",
	websiteTagline: "The clean website look we all need but don't deserve",
	websiteFooter: "Copyright (C) James R Swift, 2016 - 2017",
	
	sass: {
		path: "sass/main.scss",
		out: "client/css/main.css",
		
		variables: {
			'font-stack': '\'Roboto\', sans-serif',
			'line-height': '161.8034%',
            
			'body-background': '#f1f1f1',
			'body-color': '#222',
			'body-wdith': '320px',
            
			'container-max-width': '1400px',
            
			'article-shadow': '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
			'article-background': '#FFF',
			'article-author-color': '#0079C4',
			'article-text-color': '#555',
			'article-button-shadow': '$article-shadow',
			'article-button-border': '#CCC',
			'article-badge-background': '#222',
			'article-badge-color': '#EEE',
            
			'footer-background': '#555',
			'footer-color': '#EEE'
		}
	},
	
	database: {
		host     : 'localhost',
		user     : 'cleanwebsite',
		password : '',
		database : 'cleanwebsite',
		connectionLimit: 50
	}
	
};

module.exports = Config;
