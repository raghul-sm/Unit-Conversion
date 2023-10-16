let inputBox = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")
const s2Result = document.getElementById("s2-result") 
const s3Result = document.getElementById("s3-result") 
const s4Result = document.getElementById("s4-result") 



function unit(convert) {
    let result1 = ""
    let result2 = ""
    let result3 = ""
    result1 += `${convert} meters = ${(convert * 3.281).toFixed(3)} feet | ${convert} feet = ${(convert * 0.304).toFixed(3)} meters`
    s2Result.textContent = result1
    result2 = `${convert} liters = ${(convert * 0.264).toFixed(3)} gallons | ${convert} gallons = ${(convert * 3.785).toFixed(3)} liters`
    s3Result.textContent = result2
    result3 = `${convert} kilos = ${(convert * 2.204).toFixed(3)} pounds | ${convert} pounds = ${(convert * 0.453).toFixed(3)} kilos`
    s4Result.textContent = result3
    
}

convertBtn.addEventListener("click", function(){  
      const inputField = Number(inputBox.value)
      if(Number(inputField)){
          unit(inputField)
          
      }else {
          s2Result.textContent = "Enter a valid number"
          s3Result.textContent = "Enter a valid number"
          s4Result.textContent = "Enter a valid number"
      }
      inputBox.value = ""
      
})

inputBox.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        convertBtn.click()
    }
})

