async function windowActions(){
    console.log('window loaded');
    const form = document.querySelector('wrapper');
    const search = document.querySelector('search');

    fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
    .then((data) => data.json())
    .then((data2) => {

    })
    .catch((err) => console.error(err));

    const request = await fetch('/api')
    const data = await request.json();


    form.addEventListener('submit', async(event) =>{
     event.preventDefault();
     console.log('submit fired', search.value);
     const display = data.filter((record) => record.search.toUpperCase() === search.value.toUpperCase());

});

    search.addEventListener('input',(event)=>{

        console.log('input', event.target.value);





    });

}
   
window.onload = windowActions