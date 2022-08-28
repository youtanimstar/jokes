const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const jenerateJokes = async() =>{
    try{
        const setHeader ={
        headers:{
            Accept: "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', setHeader);
    const data = await res.json();
    joke.innerHTML = await data.joke;
}
catch(err)
{
    joke.innerHTML = err;
}
        .then((res) =>res.json())
        .then((data) =>{
            joke.innerHTML = data.joke;
        })
        .catch((err)=>{
            joke.innerHTML = err;
        })
}

jokeBtn.addEventListener('click', jenerateJokes);
jenerateJokes();