// require.config({
//     baseUrl: "js",
//     paths: {
//       'jquery': 'libs/jquery.min',
//       'bluebird': 'libs/bluebird.min',
//       'shaderProcess': 'shaderProcess',
//     }
// });

// require(['jquery','shaderProcess'],function ($,shaderProcess) {

  $(document).ready(function() {

    var shaderProcess = new shaderProcess();
    shaderProcess.loadShader('shaders/').then(function (args) {
        console.log(args);

    });
  });


// });





