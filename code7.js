gdjs.introducao1Code = {};
gdjs.introducao1Code.GDNewTiledSpriteObjects1= [];
gdjs.introducao1Code.GDNewTiledSpriteObjects2= [];
gdjs.introducao1Code.GDNewSpriteObjects1= [];
gdjs.introducao1Code.GDNewSpriteObjects2= [];
gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.introducao1Code.GDtransitionObjects1= [];
gdjs.introducao1Code.GDtransitionObjects2= [];
gdjs.introducao1Code.GDStartbuttonObjects1= [];
gdjs.introducao1Code.GDStartbuttonObjects2= [];


gdjs.introducao1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start game", false);
}}

}


};

gdjs.introducao1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introducao1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.introducao1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.introducao1Code.GDNewSpriteObjects1.length = 0;
gdjs.introducao1Code.GDNewSpriteObjects2.length = 0;
gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.introducao1Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.introducao1Code.GDtransitionObjects1.length = 0;
gdjs.introducao1Code.GDtransitionObjects2.length = 0;
gdjs.introducao1Code.GDStartbuttonObjects1.length = 0;
gdjs.introducao1Code.GDStartbuttonObjects2.length = 0;

gdjs.introducao1Code.eventsList0(runtimeScene);

return;

}

gdjs['introducao1Code'] = gdjs.introducao1Code;
