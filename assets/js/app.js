const baseEndpoint = 'https://api.github.com'; //Se necesita una solicitud http y actualizar el DOM

fetch(`${baseEndpoint}/users`) // remplaze por fetch
const $n = document.querySelector('.name'); //No está especificado el selector para el querySelector, se escribe un punto 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


async function displayUser(username) { //Se agrega el async para usar await
  $n.textContent = 'cargando...';
  try {   //Agrego try y catch
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Uso JSON
  console.log(data);
    $n.textContent = data.name; //Se accedia antes
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (error) {
    console.error(error);
  }
}
//Era innecesario tanto espacio
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //Se corrige para poder acceder al DOM, agregandole el signo $
}

displayUser('stolinski').catch(handleError);




