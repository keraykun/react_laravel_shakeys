
import axios from 'axios'
const axiosClient = axios.create({
//   baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
    baseURL:'http://localhost:8000/api'
})
axiosClient.interceptors.request.use((config)=>{
  const token = localStorage.getItem('ACCESS-TOKEN')
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';

  return config;
})
axiosClient.defaults.withCredentials=true
axiosClient.interceptors.response.use((response)=>{
  return response
},(error)=>{
  if(error.response.status===401){
    localStorage.clear()
    window.location.replace("/login")
  }
  if(error.response.status===403){
    window.location.replace("/404")
  }
  if(error.response.status===404){
    window.location.replace("/404")
  }
  return error
})
export default axiosClient
