
module STGL {


  /** Startup options. */
  export interface Options {
    /** */


  }


  export class ShaderLoader {

    constructor(shaderpath:string){//path:string,names:string[]

      this.load(shaderpath).then(result =>{
        this.parseShader(result);
      })
    }

    async load(path:string){

      var shaderNames:string[] = [
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



      var shaderNameContent:any = {};
      shaderNames.map(async name => {
        shaderNameContent[name] = await $.get(path + name).catch(function (err){
          console.log(err);
        });//async  function () { return await $.get(path+name) }();
      });
      return shaderNameContent;

    }

    parseShader(shaderStrings:string){

      console.log(shaderStrings);
    }

    
  }
    
  
}
