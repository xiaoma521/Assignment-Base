async function windowActions(){
    console.log('window loaded');
    const form = document.querySelector('wrapper');
    const search = document.querySelector('search');
    

    const request = await fetch('/api');
    const data = await request.json();
    
    // This code fires when the app is submitted
    // The data list is then filtered and then returned to the HTML
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const filtered = data.filter((record) => record.search.toUpperCase() === search.value.toUpperCase());
    });
    // This section listens to any typing going on in the input box
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    })


}
   
window.onload = windowActions