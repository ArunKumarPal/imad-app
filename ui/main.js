console.log('Loaded!');
var element=document.getElementById('maintext');
element.innerHTML='New value';
//moving img
var img=document.getElementById('madi');
img.onClick = function(){
    img.style.marginLeft='500px';
};
