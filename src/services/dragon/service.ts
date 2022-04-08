export const getDragons = async () =>{
  try{
    const response = await fetch(`https://api.spacex.land/rest/dragons`);
    if(response.status !== 200) return;
  
    const dragons = await response.json();
    return dragons
  }catch(e){
    console.error(e)
  }
}