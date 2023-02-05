export const handleReg=async (data)=>{
    // console.log(data)
   let res=await fetch('/api/auth/auth',{
    method:'POST',
    body:JSON.stringify(data),
   })
   let result=await res.json();
   
}