
async function windowActions() {
    console.log('window loaded');
  
    const form = document.querySelector('.wrapper');
    const search = document.querySelector('#zip');
    

    const endpoint ="https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json"
    const request = await fetch(endpoint);
    const data = await request.json();
  

    // this is for the submit 
    // and filters our data return to HTML

    search.addEventListener('submit', async(event) =>{
    event.preventDefault();
    console.log('submit fired', search.value);
    const filtered = data.filter((record) => record.searchs.toUpperCase() === search.value.toUpperCase());
       
    });


    // this listens for typing into your input box
    search.addEventListener('input', (event) => {

        console.log('input', event.target.value);
    

    });

    }
    





window.onload = windowActions;
