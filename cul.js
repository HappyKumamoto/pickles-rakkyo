'use strict';

function calc(rakkyo){

  let salt_value=document.getElementById('salt').value=`${Math.round(rakkyo * 0.2)}g`;

  let vinegar_value=document.getElementById('vinegar').value=`${Math.round(rakkyo * 0.5)}ml`;

  let sugar_value=document.getElementById('sugar').value=`${Math.round(rakkyo * 0.15)}g 
  〜 ${Math.round(rakkyo * 0.3)}g(甘め)`;

  let chili_value=document.getElementById('chili').value="お好みで";

  let  volume_value=document.getElementById('volume').value=`約 ${Math.round(rakkyo * 1.8)}ml`;
 
}

