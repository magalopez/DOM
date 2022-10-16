/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const appNode = document.querySelector('#app');
const baseUrl = "https://platzi-avo.vercel.app"
const url = "/api/avo";

//Intl
function formatPrice (price) {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return newPrice
}

//web api
//Connect to Server
//promise -> async/await
const getData = async (baseUrl, url) => {
  const response = await fetch(`${baseUrl}${url}`);
  const responseJson = await response.json();
  return responseJson.data;
}

const data = await getData(baseUrl, url);

const cards = [];

data.forEach(item => {
  //image
  const image = document.createElement('img');
  document.body.appendChild(image);
  image.setAttribute('src', `${baseUrl}${item.image}`);
  image.className = "w-24 rounded-full";

  //title
  const title = document.createElement('h2');
  document.body.appendChild(title);
  title.innerText = item.name;
  // title.style = "font-size: 2rem"
  // title.style.fontSize = "3rem"
  title.className = "text-base";

  //price
  const price = document.createElement('div')
  price.innerText = formatPrice(item.price);
  // price.className = "text-gray-600";

  const wrapperRight = document.createElement('div');
  wrapperRight.append(title, price);
  wrapperRight.className = "flex flex-col items-start justify-center p-4";

  const container = document.createElement('div');
  container.append(image, wrapperRight);
  container.className = "flex flex-row bg-gray-200 rounded-xl p-4 hover:bg-gray-500 hover:text-white cursor-pointer"
  cards.push(container);
})

appNode.className = "container mx-auto grid gap-4 grid-cols-3 grid-rows-3 mt-8";
appNode.append(...cards);

console.log('Happy ending :)');