var nut= document.querySelectorAll('.nut1');
var slt=document.querySelectorAll('.sl');
for(i=0;i<nut.length;i++){
    nut[i].onclick=function(){
        for(k=0;k<nut.length;k++){
            nut[k].classList.remove('xam')
        }
        this.classList.add('xam')
        for(m=0;m<slt.length;m++){
            slt[m].classList.remove('active')
            console.log('jgh')
        }
    var idnut=this.getAttribute('data-tb');
    var nutsl=document.getElementById(idnut);
    nutsl.classList.add('active')

    }
}
for(i=0;i<200;i++){
console.log(i+'. xin chao')
}