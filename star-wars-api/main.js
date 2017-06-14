console.log("talking");



//get films

fetch('http://swapi.co/api/films')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data.results[0].title);
        let title = data.results[0].title;
        console.log(title);
        console.log(`The first Star Wars movie is ${title}`);

        //render characters

        let characters = data.results[0].characters;


        // console.log(characters == string);
        //
        // let id = characters.charAt(27);

        //get people
        //
        // fetch('http://swapi.co/api/people/' + id)
        //   .then(
        //     function(response) {
        //       if (response.status !== 200) {
        //         console.log('Looks like there was a problem. Status Code: ' +
        //           response.status);
        //         return;
        //       }
        //         response.json().then(function(data) {
        //           console.log(data.results[0].name);
        //         })
        //       }
        //   )

        function renderCharacters(){
          return `
            <ul>
              ${characters.map(character => `<li>${character}</li>`).join('')}
            </ul>
          `;
        }

        console.log(characters);


      //let's set up the HTML
      //characters as array then as li

         let markup = `
           <div class="title">
             <p>Title: ${title}</p>
             <p>Episode ID: ${data.results[0].episode_id}</p>

             <ul>Characters:
               <li>${data.results[0].characters}</li>
             </ul>

             ${renderCharacters(data.results.characters)}

           </div>
         `

         document.body.innerHTML = markup;

      });
    }
  )







// fetch('http://swapi.co/api/films', {
//     mode: 'cors'
// })
//     .then(status)
//     .then(json)
//     .then(result)
//     .then(function (films) {
//     var filmsInfos = films.map(displayFilm)
//         .reduce(function (a, b) {
//         return a + b;
//     }, '');
//     document.getElementById('films').innerHTML = filmsInfos;
//     return films;
// });
//
// function displayFilm(film) {
//     return '<div class="film">' + film.title + '</div>';
// }
//
// function status(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }
//
// function json(response) {
//     return response.json();
// }
//
// function result(json) {
//     return json.results;
// }
