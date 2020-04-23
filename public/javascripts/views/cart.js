const shippingInputs = [
	document.getElementById('user-name'),
	document.getElementById('phone-number'),
	document.getElementById('street-address'),
	document.getElementById('user-city'),
	document.getElementById('user-country'),
	document.getElementById('user-zipcode'),]

const billingInputs = [
	document.getElementById('full-name'),
	document.getElementById('user-email'),
	document.getElementById('billing-street-address'),
	document.getElementById('billing-user-city'),
	document.getElementById('billing-country'),
	document.getElementById('zipcode'),]

const paymentInputs = [
	document.getElementById('cardholder-name'),
	document.getElementById('card-number'),
	document.getElementById('expire-card-date'),
	document.getElementById('security-code'),];

const pages = [document.getElementById('shipping-page'),
document.getElementById('billing-page'),
document.getElementById('payment-page'),
document.getElementById('success-page'),];

const shippingSubmitButton = document.getElementById('submit-shipping-button');
const billingSubmitButton = document.getElementById('submit-billing-button');
const paymentSubmitButton = document.getElementById('pay-button');

const switchTooltip = (input, tooltip) => (event) => {
	const newTooltipDisplay = input.value.trim() === '' ? 'inline-block' : 'none';
	if (tooltip.style.display !== newTooltipDisplay) {
		tooltip.style.display = newTooltipDisplay;
	}
}

const createTooltips = (form) => {
	form.forEach(input => {
		const tooltip = document.createElement('div');

		tooltip.className = "tooltip";
		tooltip.textContent = input.getAttribute('data-label');

		input.insertAdjacentElement('beforebegin', tooltip);
		input.addEventListener('input', switchTooltip(input, tooltip));
		input.addEventListener('blur', switchTooltip(input, tooltip));
	})
}

createTooltips(shippingInputs);
createTooltips(billingInputs);
createTooltips(paymentInputs);

const makePhoneMask = (event) => {
	const input = event.target;
	let originalValue = input.value;
	let digitsOnly = originalValue.replace(/\D/g, "");
	let digits = digitsOnly.split("");

	if (digits.length > 3) {
		digits.splice(3, 0, "-");
	}

	if (digits.length > 7) {
		digits.splice(7, 0, "-");
	}

	input.value = digits.join("");
}

shippingInputs[1].addEventListener('input', makePhoneMask);

const switchPages = (pageNumber) => {
	pages.forEach(element => element.style.display = 'none');
	pages[pageNumber].style.display = 'flex';
}

const handleSubmit = (inputArray, pageNumber) => (event) => {
	event.preventDefault();
	inputArray.forEach(input => {
		if (!input.validity.valid) {
			input.focus();
			input.blur();
		}
	});
	let checkingValidity = inputArray.every(input => input.validity.valid);
	if (checkingValidity) {
		switchPages(pageNumber);
	}

}

shippingSubmitButton.addEventListener('click', handleSubmit(shippingInputs, 1));

billingSubmitButton.addEventListener('click', handleSubmit(billingInputs, 2));

paymentSubmitButton.addEventListener('click', handleSubmit(paymentInputs, 3));

const confirmedEmail = document.getElementById('contact-email');

const handleUserEmail = (event) => {
	const email = event.target.value;
	confirmedEmail.textContent = email;
	confirmedEmail.href = `mailto:${email}`;
}

billingInputs[1].addEventListener('input', handleUserEmail);









