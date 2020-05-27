/*
	DESCRIPTION:

		Function to check if a variable is a valid french phone number.

	DEPENDENCIES:

		none

	USAGE EXAMPLE:

		(function ($) {
			'use strict';
			$(function () {
				if (isValidFrenchPhoneNumber('0666666666')) {
					console.log('0666666666 is valid!');
				}
			});
		})(jQuery);

*/

function isValidPhoneNumber(value) {
    if (typeof value === 'string' || typeof value === 'number') {
        var regex = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/;
        return regex.test(String(value));
    } else {
        return false;
    }
}