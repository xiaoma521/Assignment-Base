async function windowActions(){
    console.log('window loaded');
    const form = document.querySelector('wrapper');
    const search = document.querySelector('search');

    const request = await fetch('/api');
    const data = await request.json();
    const filtered = data.filter((record) => record.search.toUpperCase() === search.value.toUpperCase());

    .then((data) => )
    .then((data2) => {
        const originalData = data2;
        const filtered = 
        return {originalData, filter};
     })
    .then((data3) => {

     
    })
    .catch((err) => console.error(err));


   

}
   
window.onload = windowActions