define(["require", "exports", "bluebird"], function (require, exports, P) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var STGL;
    (function (STGL) {
        class ShaderLoader {
            constructor(path, names) {
            }
            load(path) {
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
                shaderNames.forEach(function (name) {
                    shaderNameContent[name] = P.resolve($.get(path + name));
                });
                return P.resolve(shaderNameContent).then(function (args) {
                    console.log(args);
                });
            }
        }
        STGL.ShaderLoader = ShaderLoader;
    })(STGL || (STGL = {}));
});
