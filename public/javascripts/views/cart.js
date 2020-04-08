// tooltip variables
const writtingText = document.getElementById('name');
const nameTooltip = document.getElementById('name-tooltip');

const userPhone = document.getElementById('phoneNumber');
const phoneTooltip = document.getElementById('phone-tooltip');

const userStreet = document.getElementById('address');
const streetTooltip = document.getElementById('address-tooltip');

const userCity = document.getElementById('city');
const cityTooltip = document.getElementById('city-tooltip');

const userZipcode = document.getElementById('zipCode');
const zipTooltip = document.getElementById('zip-tooltip');

const userCountry = document.getElementById('country');
const countryTooltip = document.getElementById('country-tooltip');


const showTooltip = (input, tooltip) => {
	tooltip.style.display = (input.value === '' && tooltip.style.display === 'none') ?
	'inline-block' : 'none';	
}


const showNameTooltip = () => { 
showTooltip(writtingText, nameTooltip)
}

writtingText.addEventListener('input', showNameTooltip); 

 const showPhoneTooltip = () => {
	 showTooltip(userPhone, phoneTooltip)
 }

 userPhone.addEventListener('input', showPhoneTooltip);


 const showStreetTooltip = () => {
	showTooltip(userStreet, streetTooltip);	
}

userStreet.addEventListener('input', showStreetTooltip);



const showCityTooltip = () => {
	showTooltip(userCity, cityTooltip);
}

userCity.addEventListener('input', showCityTooltip);


const showZipTooltip = () => {
	showTooltip(userZipcode, zipTooltip);
}

userZipcode.addEventListener('input', showZipTooltip);

const showCountryTooltip = () => {
	showTooltip(userCountry, countryTooltip);
}

userCountry.addEventListener('focus', showCountryTooltip);


const shippingSubmitButton = document.getElementById('submit-shipping-button'); 
const billingSubmitButton = document.getElementById('submit-billing-button');
const paymentSubmitButton = document.getElementById('pay-button');

const shippingPage = document.getElementById('shipping-page');
const billingPage = document.getElementById('billing-page');
const paymentPage = document.getElementById('payment-page');
const successPage = document.getElementById('success-page');

const pages = [shippingPage, billingPage, paymentPage, successPage];

const switchPages = (pageNumber) => {
    pages.forEach(element => element.style.display = 'none'); 
	pages[pageNumber].style.display = 'flex';
	console.log('hi');
}

const handleShippingSubmit = () => switchPages(1);

shippingSubmitButton.addEventListener('click', handleShippingSubmit);

const handleBillingSubmit = () => switchPages(2);

billingSubmitButton.addEventListener('click', handleBillingSubmit);

const handlePaymentSubmit = () => switchPages(3);

paymentSubmitButton.addEventListener('click',  handlePaymentSubmit);

const userEmail = document.getElementById('email');

const confirmedEmail = document.getElementById('contact-email');

const takeInput = (emailInput) => {
	const email = emailInput.target.value;

	confirmedEmail.textContent = email;
	confirmedEmail.href = `mailto:${email}`;
}

userEmail.oninput = takeInput;



// validation






	