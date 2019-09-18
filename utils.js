var path = require('path');

module.exports = {
	getHtmlPath: function(htmlFileName) {
		return path.join(__dirname, `/public/views/${htmlFileName}.html`);
	}
};