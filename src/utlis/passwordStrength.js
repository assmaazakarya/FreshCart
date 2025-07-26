export function checkPasswordStrength(password){

let strength = 0 
const feedBack = {
    text :'',
    bg:'',
    width:''
}


if(/[A-Z]/.test(password)) strength++   
if(/[a-z]/.test(password)) strength++
if(password.length >= 8) strength++
if(password.length >= 12) strength++
if(/[!@#$%^&*]/.test(password)) strength++
if(/[0-9]/.test(password)) strength++


switch (strength){
   
    case 1 : {
        feedBack.text = 'Very Weak',
        feedBack.bg = 'bg-red-500',
        feedBack.width='w-1/6'
        break
    }
    case 2 :{
        feedBack.text= 'Weak',
        feedBack.bg="bg-orange-500",
        feedBack.width='w-2/6'
    break
}
    case 3 : {
    feedBack.text="Fair",
    feedBack.bg="bg-yellow-500"
    feedBack.width='w-3/6'
     break
    }
    case 4 :{
        feedBack.text = 'Good',
        feedBack.bg= "bg-lime-500"
        feedBack.width='w-4/6'
        break
    }
    case 5 :{
        feedBack.text = 'Strong',
        feedBack.bg= "bg-green-500"
        feedBack.width='w-5/6'
        break
    }
    case 6 :{
        feedBack.text ='Very Strong',
        feedBack.bg = "bg-green-700"
        feedBack.width='w-6/6'
        break
    }
}
 
return feedBack
}