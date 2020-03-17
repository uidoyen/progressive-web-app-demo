const card = document.querySelector('.card');
const spinner = document.querySelector('.spinner');

const url = 'https://node-express-cart-api.herokuapp.com/api/products';
getBusiness = async url => {
  spinner.removeAttribute('hidden');
  try {
    const settings = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let response = await fetch(url, settings);
    if (response.ok) {
      spinner.setAttribute('hidden', '');
      return response;
    } else {
      //
    }
  } catch (error) {
    console.log(error);
  }
};

getBusiness(url)
  .then(response => response.json())
  .then(data => {
    let jsx = '';
    if (data.length !== 0) {
      data.forEach(
        ({ name, images }) =>
          (jsx += `
            <div class="card__item">
                <img class="card__avatar" src=images/products/${images[0]} alt="${name}" />
                <h1 class="card__title">${name}</h1>
            </div>
        `)
      );
    }
    card.innerHTML = jsx;
    console.log('Success:', data);
  });
