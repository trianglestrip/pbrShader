// define(['bluebird'],function (P) {

    function shaderProcess(){

    }

    shaderProcess.prototype = {
        // body...
        constructor: shaderProcess,

        loadShader : function(path) {
            var shaderNames = [
                'math.glsl',
                'cubemapVertex.glsl',
                'cubemapFragment.glsl',
                'cubemapSampler.glsl',
                'panoramaVertex.glsl',
                'panoramaFragment.glsl',
                'panoramaSampler.glsl',
                'pbrReferenceFragment.glsl',
                'pbrReferenceVertex.glsl',
                'colorSpace.glsl',
                'pbr_ue4.glsl',
                'sphericalHarmonics.glsl',
                'sphericalHarmonicsVertex.glsl',
                'sphericalHarmonicsFragment.glsl'
            ];


            var shaderNameContent = {};
            return P.map(shaderNames, function(name) {
                return P.resolve($.get(path + name)).then(function (str) {
                    shaderNameContent[name] = str;
                });
            }).then(function (args) {
                return shaderNameContent;
            });
        },

        parseShader : function(shaderStr){
            
        }
        
    };

    

//     return {
//         shaderProcess:shaderProcess
//     };

// });
