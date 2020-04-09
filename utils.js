var path = require('path');

module.exports = {
	getHtmlViewPath: function(htmlFileName) {
		return path.join(__dirname, `/public/views/pages/${htmlFileName}.html`);
	}
};