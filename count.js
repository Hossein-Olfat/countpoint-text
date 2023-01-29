const textarea=document.querySelector('.textarea');
const result = document.querySelector('.result');
const btn = document.querySelector('.check-btn');
const point ={
    ب:1, پ:3,
    ت:2, ث:3,
    ج:1,چ:3,
    خ:1,ذ:1,
    ز:1,ژ:3,
    ش:3,ض:1,
    ظ:1,غ:1,
    ف:1,ق:2,
    ن:1,ی:2
};
function text(inp) {
  let total = 0;
  for (let i = 0; i < inp.length; i++) {
    if (point[inp[i]]) {
        if(inp[i]==='ی' && inp[i+1]===' '){
            total+=0;
          
        }       
        else{
            total += point[inp[i]];
        }
    }
}
if(inp[inp.length-1]==='ی'){
    
    return total-2;
}else{
    return total;
}
};
btn.addEventListener('click',()=>{
    const arr = textarea.value.split('');
    const spacearr = arr.find((v)=>{return v!==' '});
    if(textarea.value && spacearr){

        
        const numberto_string =''+ text(textarea.value);
        result.innerHTML=`تعداد نقطه ها در نوشته ${numberto_string} است `;
    }else{
        result.innerHTML='';
    }
});



        
    



