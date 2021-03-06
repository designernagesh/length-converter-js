let input = document.querySelector("#input"),
    fromLength = document.querySelector("#fromLength"),
    toLength = document.querySelector("#toLength");     

resultFunction = () => {      
  let fromLengthValue = fromLength.value,
      toLengthValue = toLength.value,
      result = document.querySelector("#result");

  // Convert from Feet to 
  if(fromLengthValue === "Feet" && toLengthValue === "Feet" ){
    result.value = input.value + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Feet" && toLengthValue === "Inches" ){
    result.value = input.value * 12 + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Feet" && toLengthValue === "Yards" ){
    result.value = (input.value / 3).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Feet" && toLengthValue === "Miles" ){
    result.value = (input.value / 5280).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Feet" && toLengthValue === "Meters" ){
    result.value = (input.value * 0.3048).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Feet" && toLengthValue === "Centimeters" ){
    result.value = (input.value * 30.48).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Feet" && toLengthValue === "Kilometers" ){
    result.value = (input.value * 0.0003048).toFixed(3) + " " + toLengthValue;                
  }

  // Convert from Inches to 
  if(fromLengthValue === "Inches" && toLengthValue === "Feet" ){
    result.value = (input.value / 12).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Inches" && toLengthValue === "Inches" ){
    result.value = input.value + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Inches" && toLengthValue === "Yards" ){
    result.value = (input.value / 36).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Inches" && toLengthValue === "Miles" ){
    result.value = (input.value / 63360 ).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Inches" && toLengthValue === "Meters" ){
    result.value = (input.value / 39.370 ).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Inches" && toLengthValue === "Centimeters" ){
    result.value = (input.value / 0.39370 ).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Inches" && toLengthValue === "Kilometers" ){
    result.value = (input.value / 39370 ).toFixed(3) + " " + toLengthValue;                
  }

  // Convert from Yards to 
  if(fromLengthValue === "Yards" && toLengthValue === "Feet" ){
    result.value = (input.value / 3).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Yards" && toLengthValue === "Inches" ){
    result.value = (input.value / 36).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Yards" && toLengthValue === "Yards" ){
    result.value = input.value + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Yards" && toLengthValue === "Miles" ){
    result.value = (input.value * 0.00056818).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Yards" && toLengthValue === "Meters" ){
    result.value = (input.value * 1.0936).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Yards" && toLengthValue === "Centimeters" ){
    result.value = (input.value / 0.010936).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Yards" && toLengthValue === "Kilometers" ){
    result.value = (input.value / 0.0010936).toFixed(3) + " " + toLengthValue;                
  }


  // Convert from Miles to 
  if(fromLengthValue === "Miles" && toLengthValue === "Feet" ){
    result.value = (input.value * 5280.0).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Miles" && toLengthValue === "Inches" ){
    result.value = (input.value * 63360).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Miles" && toLengthValue === "Yards" ){
    result.value = (input.value * 1760).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Miles" && toLengthValue === "Miles" ){
    result.value = input.value + " " + toLengthValue;    
  } 
  else if (fromLengthValue === "Miles" && toLengthValue === "Meters" ){
    result.value = (input.value / 0.00062137).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Miles" && toLengthValue === "Centimeters" ){
    result.value = (input.value / 0.0000062137).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Miles" && toLengthValue === "Kilometers" ){
    result.value = (input.value / 0.62137).toFixed(3) + " " + toLengthValue;                
  }


  // Convert from Meters to 
  if(fromLengthValue === "Meters" && toLengthValue === "Feet" ){
    result.value = (input.value * 3.2808).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Meters" && toLengthValue === "Inches" ){
    result.value = (input.value * 39.370).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Meters" && toLengthValue === "Yards" ){
    result.value = (input.value / 1.0936).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Meters" && toLengthValue === "Miles" ){
    result.value = (input.value * 0.00062137).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Meters" && toLengthValue === "Meters" ){
    result.value = input.value + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Meters" && toLengthValue === "Centimeters" ){
    result.value = (input.value / 0.010000).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Meters" && toLengthValue === "Kilometers" ){
    result.value = (input.value / 1000).toFixed(3) + " " + toLengthValue;                
  }


  // Convert from Centimeters to 
  if(fromLengthValue === "Centimeters" && toLengthValue === "Feet" ){
    result.value = (input.value * 0.032808).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Centimeters" && toLengthValue === "Inches" ){
    result.value = (input.value * 0.39370).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Centimeters" && toLengthValue === "Yards" ){
    result.value = (input.value * 0.010936).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Centimeters" && toLengthValue === "Miles" ){
    result.value = (input.value * 0.0000062137).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Centimeters" && toLengthValue === "Meters" ){
    result.value = (input.value / 100 ).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Centimeters" && toLengthValue === "Centimeters" ){
    result.value = input.value + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Centimeters" && toLengthValue === "Kilometers" ){
    result.value = (input.value / 0.000010000).toFixed(3) + " " + toLengthValue;                
  }


  // Convert from Kilometers to 
  if(fromLengthValue === "Kilometers" && toLengthValue === "Feet" ){
    result.value = (input.value * 3280.8).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Kilometers" && toLengthValue === "Inches" ){
    result.value = (input.value * 39370).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Kilometers" && toLengthValue === "Yards" ){
    result.value = (input.value * 1093.6).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Kilometers" && toLengthValue === "Miles" ){
    result.value = (input.value * 0.62137).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Kilometers" && toLengthValue === "Meters" ){
    result.value = (input.value / 0.0010000).toFixed(3) + " " + toLengthValue;        
  } 
  else if (fromLengthValue === "Kilometers" && toLengthValue === "Centimeters" ){
    result.value = (input.value / 0.000010000).toFixed(3) + " " + toLengthValue;
  } 
  else if (fromLengthValue === "Kilometers" && toLengthValue === "Kilometers" ){
    result.value = input.value + " " + toLengthValue;            
  }
}

input.addEventListener('keyup', resultFunction)
fromLength.addEventListener('change', resultFunction)
toLength.addEventListener('change', resultFunction)