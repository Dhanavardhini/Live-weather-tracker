async function weather() {
    let city=document.getElementById("a2").value;

    let  link=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99ed8109be9313a5cd83c79def0f7be2&units=metric)`);
    
    let l1= await link.json();
    console.log(l1);
    // let c1=document.createElement("p").innerText=city;    

    let c2=document.getElementById("b1").innerText=(`${city}`)
    let c3=document.getElementById("c1").innerText= (`${l1.sys.country}`);
    let c4=document.getElementById("c2").innerText=(`${l1.weather[0].description}`);
    let c5=document.getElementById("c3") .innerText=(`${l1.main.temp} °C`);
    let c6=document.getElementById("c4").innerText=(` ${l1.wind.speed}kmph`);
    let c7=document.getElementById("c11").innerText=(`${l1.main.pressure}hPa`);
    
}