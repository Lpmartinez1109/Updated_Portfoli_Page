var WEBGL= "https://github.com/mrdoob/three.js/blob/master/examples/jsm/WebGL.js"
// var ext = gl.getExtension("OES_texture_float");

// console.log(ext);

// $(".banner").ripples({
//         dropRadius: 10,
//     perturbance: 0.03
// });
if ( WEBGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	var warning = WEBGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}