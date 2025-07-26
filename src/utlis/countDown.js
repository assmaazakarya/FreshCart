export function countDown(targetDate){

    if(!targetDate) targetDate = new Date().setHours(23,59,59,999) 
    
    const ONE_HOUR_MS = 60 * 60 * 1000;
    const ONE_MINUTE_MS = 60 * 1000;
    const ONE_SECOND_MS = 1000;

    let leftTime = targetDate - new Date().getTime() 

  if(leftTime > 0){
    let hours = Math.trunc(leftTime/ONE_HOUR_MS) 
    let minutes = Math.trunc((leftTime % ONE_HOUR_MS)/ONE_MINUTE_MS) 
    let second = Math.trunc(((leftTime % ONE_HOUR_MS)%ONE_MINUTE_MS)/ONE_SECOND_MS)
    
    return {hours , minutes , second}    
  }else return {hours : 0 , minutes : 0 , second :0 }


}
