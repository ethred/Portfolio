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
    techolgies: ['HTML', 'CSS', 'JAVAScript', 'Ruby', 'BootStrap'],
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
    techolgies: ['HTML', 'CSS', 'JAVAScript', 'Ruby', 'BootStrap'],
    Dtecholgies: ['FACEBOOK', 'Back End Dev', '2015'],
    description:
    [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text  of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960 "],
    imgSrc: './image/SnapshootPortfoliop2.png',
    linkstolv: 'See Lives ',
    linkstos: 'See Sources ',
  },
  {
    id: 1,
    name: 'Facebook 360',
    techolgies: ['HTML', 'CSS', 'JAVAScript', 'Ruby', 'BootStrap'],
    Dtecholgies: ['FACEBOOK', 'Back End Dev', '2015'],
    description:
    [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text  of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960 "],
    imgSrc: './image/SnapshootPortfoliop3.png',
    linkstolv: 'See Lives ',
    linkstos: 'See Sources ',
  },
  {
    id: 1,
    name: 'Uber Navigation',
    techolgies: ['HTML', 'CSS', 'JAVAScript', 'Ruby', 'BootStrap'],
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
  <a href="#" onclick="toggle()"><img src="./image/Icon2.png" alt=""></a>
      
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
                  <li>${carde.techolgies[4]}</li>
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

renderProdcuts();
