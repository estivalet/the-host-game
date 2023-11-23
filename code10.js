gdjs.Congrats_32por_32jogarCode = {};
gdjs.Congrats_32por_32jogarCode.GDObrigado_9595Por_9595Jogar_9595Objects1= [];
gdjs.Congrats_32por_32jogarCode.GDObrigado_9595Por_9595Jogar_9595Objects2= [];
gdjs.Congrats_32por_32jogarCode.GDLUAObjects1= [];
gdjs.Congrats_32por_32jogarCode.GDLUAObjects2= [];
gdjs.Congrats_32por_32jogarCode.GDBACKObjects1= [];
gdjs.Congrats_32por_32jogarCode.GDBACKObjects2= [];
gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.Congrats_32por_32jogarCode.GDtransitionObjects1= [];
gdjs.Congrats_32por_32jogarCode.GDtransitionObjects2= [];
gdjs.Congrats_32por_32jogarCode.GDStartbuttonObjects1= [];
gdjs.Congrats_32por_32jogarCode.GDStartbuttonObjects2= [];


gdjs.Congrats_32por_32jogarCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}}

}


};

gdjs.Congrats_32por_32jogarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Congrats_32por_32jogarCode.GDObrigado_9595Por_9595Jogar_9595Objects1.length = 0;
gdjs.Congrats_32por_32jogarCode.GDObrigado_9595Por_9595Jogar_9595Objects2.length = 0;
gdjs.Congrats_32por_32jogarCode.GDLUAObjects1.length = 0;
gdjs.Congrats_32por_32jogarCode.GDLUAObjects2.length = 0;
gdjs.Congrats_32por_32jogarCode.GDBACKObjects1.length = 0;
gdjs.Congrats_32por_32jogarCode.GDBACKObjects2.length = 0;
gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.Congrats_32por_32jogarCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.Congrats_32por_32jogarCode.GDtransitionObjects1.length = 0;
gdjs.Congrats_32por_32jogarCode.GDtransitionObjects2.length = 0;
gdjs.Congrats_32por_32jogarCode.GDStartbuttonObjects1.length = 0;
gdjs.Congrats_32por_32jogarCode.GDStartbuttonObjects2.length = 0;

gdjs.Congrats_32por_32jogarCode.eventsList0(runtimeScene);

return;

}

gdjs['Congrats_32por_32jogarCode'] = gdjs.Congrats_32por_32jogarCode;
