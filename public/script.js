async function windowActions(){
    console.log('window loaded');
    const form = document.querySelector('wrapper');
    const search = document.querySelector('search');
    

    const request = await fetch('/api');
    const data = await request.json();
    

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const filtered = data.filter((record) => record.search.toUpperCase() === search.value.toUpperCase());
    });

    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    })


}
   
window.onload = windowActions