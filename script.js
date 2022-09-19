const changemode=()=>{
    document.body.classList.toggle("mydark")
    
}

  const loadcoupon = () =>{
     document.getElementById("coupon").style.display="block";
     document.getElementById("op").style.opacity=0.4;
  }

  const closecoupon = () =>{
     document.getElementById("coupon").style.display="none";
     document.getElementById("op").style.opacity=1;
  }

  let x=document.getElementById("out");
  let y=document.getElementById("location");
  let z=document.getElementById("weather");
    function geolocation(){ 
   
         if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition)
         }else{
                   x.innerText=" GEO not supported"
         }
        
         }
        
          function showPosition(data){
             console.log(data)
            let lag= data.coords.latitude;
            let long= data.coords.longitude;
            // x.innerText = `lat is ${lag} long is ${long}`
             const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lag}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
             fetch(url,{method:'GET'})
             .then((res)=> res.json())
             .then((data)=>{
               //   y.innerText=` ur city is${data.city.name}`
                 z.innerText=`${data.list[0].temp.day}°C`
             })

            


          }
