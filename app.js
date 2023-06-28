const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.mobile-menu-contaner .close-icon');
const mobileMenuCont = document.querySelector('.mobile-menu-contaner');
const mainbar = document.querySelector('.main-bar');
const linksa = document.querySelector('.mobile-menu-contaner ul ');

menuIcon.addEventListener('click', () => {
  mobileMenuCont.classList.add('active');
  mainbar.classList.add('active');
});
closeIcon.addEventListener('click', () => {
  mobileMenuCont.classList.remove('active');
  mainbar.classList.remove('active');
});
/* add event for the links */
linksa.addEventListener('click', () => {
  mobileMenuCont.classList.remove('active');
  mainbar.classList.remove('active');
});

const cards = [
  {
    id: 0,
    name: 'Tonic ',
    techolgies: ['HTML', 'CSS', 'JAVAScript', 'Ruby'],
    Dtecholgies: ['CANOPY', 'Back End Dev', '2015'],
    description:
     [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
       " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text  of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960 "],
    imgSrc: './image/SnapshootPortfolio.png',
    linkstolv: 'See Lives ',
    linkstos: 'See Sources ',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    techolgies: ['HTML', 'Ruby on ralls', 'CSS', 'JAVAScript'],
    Dtecholgies: ['FACEBOOK', 'Back End Dev', '2015'],
    description:
    [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text  of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960 "],
    imgSrc: './image/SnapshootPortfoliop2.png',
    linkstolv: 'See Lives ',
    linkstos: 'See Sources ',
  },
  {
    id: 2,
    name: 'Facebook 360',
    techolgies: ['HTML', 'Ruby on ralls', 'CSS', 'JAVAScript'],
    Dtecholgies: ['FACEBOOK', 'Back End Dev', '2015'],
    description:
    [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text  of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960 "],
    imgSrc: './image/SnapshootPortfoliop3.png',
    linkstolv: 'See Lives ',
    linkstos: 'See Sources ',
  },
  {
    id: 3,
    name: 'Uber Navigation',
    techolgies: ['HTML', 'Ruby on ralls', 'CSS', 'JAVAScript'],
    Dtecholgies: ['Uber', 'Lead Dev', '2015'],
    description:
     [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
       " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text  of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960 "],
    imgSrc: './image/SnapshootPortfoliop4.png',
    linkstolv: 'See Lives ',
    linkstos: 'See Sources ',
  },
];

// SELECT ELEMENTS
const cardsE = document.querySelector('.popup2');

// RENDER PRODUCTS
function renderProdcuts(num) {
  const carde = Object.values(cards)[num];
  cardsE.innerHTML = `
  <div class="header">
  <div class="left">
      <h3>${carde.name}</h3>
      <ul>
          <li>${carde.Dtecholgies[0]}</li>
          <li>${carde.Dtecholgies[1]}</li>
          <li>${carde.Dtecholgies[2]}</li>
      </ul>
  </div>
  <div class="right">
  <a href="#"  onclick="togglee()" ><img src="./image/Icon2.png" alt=""></a>
      
  </div>
  </div>
  <div class="middle">
  
      <img src="${carde.imgSrc}" alt="">
  </div>

  <div class="contents">
      <div class="left">
          <p>
              ${carde.description[0]}
          </p>
          <div class="top">
              <p >
              ${carde.description[1]}
              </p>
           </div>
          
                  
      </div>
      <div class="right">
          <div class="links">
              <ul>
                  <li>${carde.techolgies[0]}</li>
                  <li>${carde.techolgies[1]}</li>
                  <li>${carde.techolgies[2]}</li>
                  <li>${carde.techolgies[3]}</li>
              </ul>
          </div>
          <div class="lines">
            <br>
             <hr>
          </div>
          <div>
              <img src="Vector 4.png" alt="">
          </div>
          <div class="buttons">
          <button class="links-live">${carde.linkstolv}<img src="./image/See-live-Icon.png" alt=""> </button>
          <button class="links-source">${carde.linkstos}<img src="./image/see-sourec-Vector.png" alt=""></button>
          </div>
      </div>
      
  </div>
          `;
}

const cardsEI = document.querySelector('.works');
// RENDER PRODUCTS
function rendercards() {
  let con = true;
  let cont = 0;
  let passvalue = 0;
  let x = 'one';
  let imgid = 'img1';

  cards.forEach((product) => {
    if (con === true) {
      x = 'one';
      con = false;
    } else {
      x = 'two';
      con = true;
    }
    if (cont === 0) {
      imgid = 'img1';
      cont += 1;
    } else if (cont === 1) {
      imgid = 'img2';
      cont += 1;
    } else if (cont === 2) {
      imgid = 'img3';
      cont += 1;
    } else if (cont === 3) {
      imgid = 'img4';
      cont += 1;
    }

    cardsEI.innerHTML += `
                  <nav class="card" id="${x}">
                  <div id="${imgid}"></div>
                  <div class="left-bloks" id="sub-left-block">
                    <div class="primary">
                      <h1>${product.name}</h1>
                      <div class="frame">
                        <p id="font">${product.Dtecholgies[0]}</p>
                        <img src="./image/Counter.png" alt="counter" />
                        <h6>${product.Dtecholgies[1]}</h6>
                        <img src="./image/Counter.png" alt="counter" />
                        <h6>${product.Dtecholgies[2]}</h6>
                      </div>
                    </div>
                    <p class="text">
                      A daily selection of privately personalized reads; no accounts or
                      sign-ups required.
                    </p>
                    <ul>
                        <li><a href="#">${product.techolgies[0]}</a></li> 
                        <li><a href="#">${product.techolgies[1]}</a></li> 
                        <li><a href="#">${product.techolgies[2]}</a></li> 
                        <li><a href="#">${product.techolgies[3]}</a></li> 
                    </ul>
                    <div class="action">
                      <button type="submit" class="btn" onclick="toggle(${passvalue})"><p>See project</p></button>
                    </div>
                  </div>
                </nav>
        `;
    passvalue += 1;
  });
}

rendercards();
renderProdcuts();