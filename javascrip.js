$(document).ready(function () {
  
    var Phut = 0;
    var Phut1 = 0;
    var Giay = 0;
    var Giay1 = 0;
    var MiliGiay = 0;
    var MiliGiay1 = 0;

            var btn_star = document.getElementById('butplay');
            var btn_pause = document.getElementById('butpause');
            var btn_reset = document.getElementById('butreset');
            var time1 = document.getElementById('dong-ho');
        
            var time = document.getElementById('dong-ho').innerHTML = Phut+Phut1 + ":" + Giay1+Giay + ":" + MiliGiay1+MiliGiay ;
        
            function DemGio(){
               
                MiliGiay++;
                if(MiliGiay == 10){
                       MiliGiay1++;
                       MiliGiay = 0;
                }
                if(MiliGiay1 == 10){
                       Giay++;
                       MiliGiay1 = 0;
                }
                if(Giay == 10){
                    Giay1++;
                    Giay = 0;
                }
                if(Giay1 == 6){
                    Phut++;
                    Giay1 = 0;
                }
                document.getElementById('dong-ho').innerHTML = Phut+Phut1 + ":" + Giay1+Giay + ":" + MiliGiay1+MiliGiay ;
            }
        
            $('#btnplay').click(function () { 
                time = setInterval(DemGio,10);
            });
        
        
            $('#btnpause').click(function () { 
               time = clearInterval(time);    
            });
        
            $('#btnreset').click(function(){
                time = clearInterval(time);
                Phut = 0;
                Phut1 = 0;
                Giay = 0;
                Giay1 = 0;
                MiliGiay = 0;
                MiliGiay1 = 0;
                time1.innerHTML = "0:00:00";
            });

            $('#btnnext').click(function(){
                times = document.getElementById('dong-ho').innerHTML = Phut+Phut1 + ":" + Giay1+Giay + ":" + MiliGiay1+MiliGiay ;
                show = document.getElementById('time');
                var hang = document.createElement('tr');
                var cot = document.createElement('td');
                cot.textContent = times;
                show.appendChild(hang);
                hang.appendChild(cot);
            });
});
