define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('CopyColorService', function() {

		ZeroClipboard.config({
			moviePath: 'libs/ZeroClipboard.swf'
		});

		var client = new ZeroClipboard($(".colorBox"));
		client.on( 'load', function(client) {
 
		  client.on( 'datarequested', function(client) {
		    var text = $('#copy_this_text').text();
		    client.setText(text);
		  });
		 
		  // callback triggered on successful copying
		  client.on( 'complete', function(client, args) {
		    console.log("Text copied to clipboard: \n" + args.text );
		  });
		});
		
		/*client.on( 'ready', function(event) {
	        console.log( 'movie is loaded' );

	        client.on( 'copy', function(event) {
	          event.clipboardData.setData('text/plain', event.target.innerHTML);
	        } );

	        client.on( 'aftercopy', function(event) {
	          console.log('Copied text to clipboard: ' + event.data['text/plain']);
	        } );
	      } );

	      client.on( 'error', function(event) {
	        console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	        ZeroClipboard.destroy();
	      } );	*/
		return client;
	});
});

