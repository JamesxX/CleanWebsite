'use strict';

class post{
	
	constructor(){
		
		this.m_Title = "#NO_TITLE_DEFINED";
		this.m_Author = "#NO_AUTHOR_DEFINED";
		this.m_Timestamp = 0;
		
		this.m_Media = "media/undefined.jpg";
		this.m_Content = "#NO_CONTENT_DEFINED";
		this.m_Comments = 0;
		
	}
	
	set Title(_newTitle) { this.m_Title = _newTitle; }
	set Author(_newAuthor) { this.m_Author = _newAuthor; }
	set Timestamp(_newTimestamp) { this.m_Timestamp = _newTimestamp; }
	set Media(_newMedia) { this.m_Media = _newMedia; }
	set Content(_newContent) { this.m_Content = _newContent; }
	set Comments(_newComments) { this.m_Comments = _newComments; }
	
	get output(){
		return {
			title: this.m_Title,
			author: this.m_Author,
			pubdate: this.m_Timestamp,
			
			media: this.m_Media,
			content: this.m_Content,
			comments: this.m_Comments
		};
	}
	
}

module.exports = post;
