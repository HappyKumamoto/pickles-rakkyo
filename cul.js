'use strict';

function calc(rakkyo){

  let salt_value=document.getElementById('salt').value=Math.round(rakkyo * 0.2);
  console.log(`salt_value`);

  let vinegar_value=document.getElementById('vinegar').value=Math.round(rakkyo * 0.5);

  let sugar_value=document.getElementById('sugar').value=Math.round(rakkyo * 0.15);

  let chili_value=document.getElementById('chili').value="お好みで";

  let  volume_value=document.getElementById('volume').value=Math.round(rakkyo * 1.8);
}