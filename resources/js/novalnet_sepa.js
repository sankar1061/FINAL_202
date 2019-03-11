jQuery(document).ready( function() {
	jQuery('#nn_sepa_iban').on('input',function ( event ) {
		let iban = jQuery(this).val().replace( /[^a-zA-Z0-9]+/g, "" ).replace( /\s+/g, "" );
    		jQuery(this).val(iban);  
		console.log(iban);
	});
});
