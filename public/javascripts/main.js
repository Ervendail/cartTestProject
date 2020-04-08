"use strict";

const baseUrl = 'http://localhost:3000';
const homepageUrl = `${baseUrl}/cart`;
const cartUrl = `${baseUrl}/home`;
const contentId = 'mainContent';

document.addEventListener('DOMContentLoaded', navigateToHomepage);


function navigateToCart() {
	const iframe = document.getElementById(contentId);

	if (iframe) {
		iframe.setAttribute('src', homepageUrl);
	}
}

function navigateToHomepage () {
	const iframe = document.getElementById(contentId);

	if (iframe) {
		iframe.setAttribute('src', cartUrl);
	}
}

