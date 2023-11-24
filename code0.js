gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDReset_9595TimerObjects1= [];
gdjs.StartMenuCode.GDReset_9595TimerObjects2= [];
gdjs.StartMenuCode.GDReset_9595TimerObjects3= [];
gdjs.StartMenuCode.GDReset_9595TimerObjects4= [];
gdjs.StartMenuCode.GDReset_9595TimerObjects5= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects1= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects2= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects3= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects4= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects5= [];
gdjs.StartMenuCode.GDNewSpriteObjects1= [];
gdjs.StartMenuCode.GDNewSpriteObjects2= [];
gdjs.StartMenuCode.GDNewSpriteObjects3= [];
gdjs.StartMenuCode.GDNewSpriteObjects4= [];
gdjs.StartMenuCode.GDNewSpriteObjects5= [];
gdjs.StartMenuCode.GDNewSprite2Objects1= [];
gdjs.StartMenuCode.GDNewSprite2Objects2= [];
gdjs.StartMenuCode.GDNewSprite2Objects3= [];
gdjs.StartMenuCode.GDNewSprite2Objects4= [];
gdjs.StartMenuCode.GDNewSprite2Objects5= [];
gdjs.StartMenuCode.GDGreyButtonObjects1= [];
gdjs.StartMenuCode.GDGreyButtonObjects2= [];
gdjs.StartMenuCode.GDGreyButtonObjects3= [];
gdjs.StartMenuCode.GDGreyButtonObjects4= [];
gdjs.StartMenuCode.GDGreyButtonObjects5= [];
gdjs.StartMenuCode.GDControlsObjects1= [];
gdjs.StartMenuCode.GDControlsObjects2= [];
gdjs.StartMenuCode.GDControlsObjects3= [];
gdjs.StartMenuCode.GDControlsObjects4= [];
gdjs.StartMenuCode.GDControlsObjects5= [];
gdjs.StartMenuCode.GDtransitionObjects1= [];
gdjs.StartMenuCode.GDtransitionObjects2= [];
gdjs.StartMenuCode.GDtransitionObjects3= [];
gdjs.StartMenuCode.GDtransitionObjects4= [];
gdjs.StartMenuCode.GDtransitionObjects5= [];
gdjs.StartMenuCode.GDStartbuttonObjects1= [];
gdjs.StartMenuCode.GDStartbuttonObjects2= [];
gdjs.StartMenuCode.GDStartbuttonObjects3= [];
gdjs.StartMenuCode.GDStartbuttonObjects4= [];
gdjs.StartMenuCode.GDStartbuttonObjects5= [];


gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects2);
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.StartMenuCode.GDtransitionObjects2);
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDtransitionObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDtransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Outdated Time.mp3", true, 50, 1);
}}

}


};gdjs.StartMenuCode.eventsList1 = function(runtimeScene) {

};gdjs.StartMenuCode.eventsList2 = function(runtimeScene) {

{



}


{



}


};gdjs.StartMenuCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.StartMenuCode.asyncCallback44186956 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.StartMenuCode.GDtransitionObjects4);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "introducao1");
}{for(var i = 0, len = gdjs.StartMenuCode.GDtransitionObjects4.length ;i < len;++i) {
    gdjs.StartMenuCode.GDtransitionObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenuCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback44186956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback44186220 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects3);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects3[i].setString("1");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 50, 1.2);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3, 3, 3, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenuCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.StartMenuCode.GDReset_9595TimerObjects2) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback44186220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback44185700 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects2);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects2[i].setString("2");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 40, 1);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StartMenuCode.GDReset_9595TimerObjects1) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback44185700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.StartMenuCode.eventsList0(runtimeScene);
}


{


gdjs.StartMenuCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.StartMenuCode.GDControlsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDControlsObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDControlsObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDControlsObjects1[k] = gdjs.StartMenuCode.GDControlsObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDControlsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controls scene", false);
}}

}


{


gdjs.StartMenuCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Startbutton"), gdjs.StartMenuCode.GDStartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartMenuCode.GDStartbuttonObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDStartbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartMenuCode.GDStartbuttonObjects1[k] = gdjs.StartMenuCode.GDStartbuttonObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDStartbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44183916);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects1);
/* Reuse gdjs.StartMenuCode.GDStartbuttonObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDStartbuttonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartbuttonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuButtomPress.wav", false, 30, 1);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].setString("3");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 30, 0.8);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 1, 1, 1, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDReset_9595TimerObjects1.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects2.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects3.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects4.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects5.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects1.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects2.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects3.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects4.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects5.length = 0;
gdjs.StartMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.StartMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.StartMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.StartMenuCode.GDNewSpriteObjects4.length = 0;
gdjs.StartMenuCode.GDNewSpriteObjects5.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects3.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects4.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects5.length = 0;
gdjs.StartMenuCode.GDGreyButtonObjects1.length = 0;
gdjs.StartMenuCode.GDGreyButtonObjects2.length = 0;
gdjs.StartMenuCode.GDGreyButtonObjects3.length = 0;
gdjs.StartMenuCode.GDGreyButtonObjects4.length = 0;
gdjs.StartMenuCode.GDGreyButtonObjects5.length = 0;
gdjs.StartMenuCode.GDControlsObjects1.length = 0;
gdjs.StartMenuCode.GDControlsObjects2.length = 0;
gdjs.StartMenuCode.GDControlsObjects3.length = 0;
gdjs.StartMenuCode.GDControlsObjects4.length = 0;
gdjs.StartMenuCode.GDControlsObjects5.length = 0;
gdjs.StartMenuCode.GDtransitionObjects1.length = 0;
gdjs.StartMenuCode.GDtransitionObjects2.length = 0;
gdjs.StartMenuCode.GDtransitionObjects3.length = 0;
gdjs.StartMenuCode.GDtransitionObjects4.length = 0;
gdjs.StartMenuCode.GDtransitionObjects5.length = 0;
gdjs.StartMenuCode.GDStartbuttonObjects1.length = 0;
gdjs.StartMenuCode.GDStartbuttonObjects2.length = 0;
gdjs.StartMenuCode.GDStartbuttonObjects3.length = 0;
gdjs.StartMenuCode.GDStartbuttonObjects4.length = 0;
gdjs.StartMenuCode.GDStartbuttonObjects5.length = 0;

gdjs.StartMenuCode.eventsList7(runtimeScene);

return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
