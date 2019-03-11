jQuery(document).ready( function() {
	jQuery('#nn_sepa_iban').on('keypress',function ( event ) {
		$(this).val().replace( /[^a-zA-Z 0-9]+/g, "" ).replace( /\s+/g, "" );
	});
});
