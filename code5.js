gdjs.introducao2Code = {};
gdjs.introducao2Code.GDterrac9ngeladaObjects1= [];
gdjs.introducao2Code.GDterrac9ngeladaObjects2= [];
gdjs.introducao2Code.GDRedFlameObjects1= [];
gdjs.introducao2Code.GDRedFlameObjects2= [];
gdjs.introducao2Code.GDespaco_9595navesObjects1= [];
gdjs.introducao2Code.GDespaco_9595navesObjects2= [];
gdjs.introducao2Code.GDtext1Objects1= [];
gdjs.introducao2Code.GDtext1Objects2= [];
gdjs.introducao2Code.GDaObjects1= [];
gdjs.introducao2Code.GDaObjects2= [];
gdjs.introducao2Code.GDNewSpriteObjects1= [];
gdjs.introducao2Code.GDNewSpriteObjects2= [];
gdjs.introducao2Code.GDNewSprite2Objects1= [];
gdjs.introducao2Code.GDNewSprite2Objects2= [];
gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.introducao2Code.GDtransitionObjects1= [];
gdjs.introducao2Code.GDtransitionObjects2= [];
gdjs.introducao2Code.GDStartbuttonObjects1= [];
gdjs.introducao2Code.GDStartbuttonObjects2= [];


gdjs.introducao2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Congrats por jogar", false);
}}

}


};

gdjs.introducao2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introducao2Code.GDterrac9ngeladaObjects1.length = 0;
gdjs.introducao2Code.GDterrac9ngeladaObjects2.length = 0;
gdjs.introducao2Code.GDRedFlameObjects1.length = 0;
gdjs.introducao2Code.GDRedFlameObjects2.length = 0;
gdjs.introducao2Code.GDespaco_9595navesObjects1.length = 0;
gdjs.introducao2Code.GDespaco_9595navesObjects2.length = 0;
gdjs.introducao2Code.GDtext1Objects1.length = 0;
gdjs.introducao2Code.GDtext1Objects2.length = 0;
gdjs.introducao2Code.GDaObjects1.length = 0;
gdjs.introducao2Code.GDaObjects2.length = 0;
gdjs.introducao2Code.GDNewSpriteObjects1.length = 0;
gdjs.introducao2Code.GDNewSpriteObjects2.length = 0;
gdjs.introducao2Code.GDNewSprite2Objects1.length = 0;
gdjs.introducao2Code.GDNewSprite2Objects2.length = 0;
gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.introducao2Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.introducao2Code.GDtransitionObjects1.length = 0;
gdjs.introducao2Code.GDtransitionObjects2.length = 0;
gdjs.introducao2Code.GDStartbuttonObjects1.length = 0;
gdjs.introducao2Code.GDStartbuttonObjects2.length = 0;

gdjs.introducao2Code.eventsList0(runtimeScene);

return;

}

gdjs['introducao2Code'] = gdjs.introducao2Code;
