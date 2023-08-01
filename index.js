let a;
let date;
let time;

setInterval(() => {
    a=new Date;
    const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
 time=a.getHours()+ ":" +a.getMinutes()+ ":"+a.getSeconds();
 
 date=a.toLocaleDateString(undefined,options);
 

 document.getElementById('time').innerHTML=time + "<br> On " + date ;
},1000);



