var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  function fechaMenu(){
    menu.style.display='none'
  }

  function chamaMenu(){
    menu.style.display='block'
  }

  function chamaSms(){
    sms.style.display='block'
  }
  function fechaSms(){
    sms.style.display='none'
  }

  function enviarSms(){
    const sms = document.getElementById('exampleFormControlTextarea1').value
    const nome = document.getElementById('exampleFormControlInput1').value

    if(sms == '' || nome == ''){
        alert('Falta dados')
    } else{
      var my_text = `Mensagem do usuario Gage %0A %0A  ${sms} %0A %0A Nome: ${nome}`

  var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
  var chat_id = -1001247274051
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  alert('Mensagem enviada!')
  
  sms.style.display='block'
    }
  }