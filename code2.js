gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDtransitionObjects1= [];
gdjs.LeaderboardCode.GDtransitionObjects2= [];
gdjs.LeaderboardCode.GDStartbuttonObjects1= [];
gdjs.LeaderboardCode.GDStartbuttonObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDtransitionObjects1.length = 0;
gdjs.LeaderboardCode.GDtransitionObjects2.length = 0;
gdjs.LeaderboardCode.GDStartbuttonObjects1.length = 0;
gdjs.LeaderboardCode.GDStartbuttonObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
