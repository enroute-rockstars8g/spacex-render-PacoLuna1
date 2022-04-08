export const getCompany = async () =>{
  try{
    const response = await fetch(`https://api.spacex.land/rest/company`);
    if(response.status !== 200) return;
  
    const company = await response.json();
    return company
  }catch(e){
    console.error(e)
  }
}