import { apiClient } from "../axiosInstance/api-client";

export async function sendDataToSignup(values){

try {
     const options = {
      url : `/auth/signup`,
      method: "POST",
      data: {
      name : values.name,
      email : values.email,
      password: values.password,
      rePassword : values.rePassword,
      phone: values.phone
    }
  }
  const response = await apiClient.request(options)
  return  response 
} catch (error) {
    throw error
}  

}
export async function sendDataToLogin(values){

try {
     const options = {
      url : `/auth/signin`,
      method: "POST",
      data: {
      email : values.email,
      password: values.password,
    }
  }
    const response = await apiClient.request(options)
    return  response
} catch (error) {
    throw error
}  

}

export async function forgetPassword(email) {

  try {
   const options = {
     url :'/auth/forgotPasswords',
     method : "POST",
     data : {
      email : email
     }
    }    
    const response = await apiClient.request(options)
    return response
  } catch (error) {
    throw error 
  }
}

export async function verifyResetCode(values) {
 try {
   const options = {
     url :'/auth/verifyResetCode',
     method : "POST",
     data:{
      resetCode: values
     }
    }    
    const response = await apiClient.request(options)    
    return response
  } catch (error) {    
    throw error 
  }
}

export async function resetPassword(values) {

 
  try {
   const options = {
     url :'/auth/resetPassword',
     method : "PUT",
     data:{
      email: values.email,
      newPassword : values.newPassword
     }
    }    
    const response = await apiClient.request(options)
    return response
  } catch (error) {    
    throw error 
  }
}