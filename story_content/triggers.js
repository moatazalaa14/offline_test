function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SSAObnTvGJ":
        Script1();
        break;
      case "6O9nc9w9cai":
        Script2();
        break;
      case "6e5ON6xHEPN":
        Script3();
        break;
      case "6rQC1DauYKQ":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('68S6OXsndCG');
const duration = 750;
const easing = 'ease-out';
const id = '5qaQsCrZqWF';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('68S6OXsndCG');
const duration = 750;
const easing = 'ease-out';
const id = '5qaQsCrZqWF';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
