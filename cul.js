function calc(){
  let rakkyo_value = document.getElementById('rakkyo');

  const salt_value=document.getElementById('salt').value=
  Math.round(rakkyo_value * 0.2);

  const vinegar_value=document.getElementById('vinegar').value=
  Math.round(rakkyo_value * 0.5);

  const sugar_value=document.getElementById('sugar').value=
  Math.round(rakkyo_value * 0.15);

  const  volume_value=document.getElementById('volume').value=
  Math.round(rakkyo_value * 1.8);
}