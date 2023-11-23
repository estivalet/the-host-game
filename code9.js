gdjs.introducao3Code = {};
gdjs.introducao3Code.GDImageObjects1= [];
gdjs.introducao3Code.GDImageObjects2= [];
gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.introducao3Code.GDtransitionObjects1= [];
gdjs.introducao3Code.GDtransitionObjects2= [];
gdjs.introducao3Code.GDStartbuttonObjects1= [];
gdjs.introducao3Code.GDStartbuttonObjects2= [];


gdjs.introducao3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.introducao3Code.GDtransitionObjects1);
{for(var i = 0, len = gdjs.introducao3Code.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.introducao3Code.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start game", false);
}}

}


};

gdjs.introducao3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introducao3Code.GDImageObjects1.length = 0;
gdjs.introducao3Code.GDImageObjects2.length = 0;
gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.introducao3Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.introducao3Code.GDtransitionObjects1.length = 0;
gdjs.introducao3Code.GDtransitionObjects2.length = 0;
gdjs.introducao3Code.GDStartbuttonObjects1.length = 0;
gdjs.introducao3Code.GDStartbuttonObjects2.length = 0;

gdjs.introducao3Code.eventsList0(runtimeScene);

return;

}

gdjs['introducao3Code'] = gdjs.introducao3Code;
