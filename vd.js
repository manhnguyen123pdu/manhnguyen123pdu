
  var nut= document.getElementsByClassName('layer1');
  for(i=0;i<nut.length;i++){
    nut[i].onclick=function(){
      for(k=0;k<nut.length;k++){
        nut[k].classList.remove('trang');
        console.log(nut[k])
      }
      this.classList.toggle('trang');
      var hienra=this.getAttribute('data-thongbao');
      var hien_ra=document.getElementById(hienra);
      hien_ra.classList.toggle('hienra');
    }
    
  }