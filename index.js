// Hamburger menu
const hamburger = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link a').forEach((n) => (n).addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Cards Array
const projectList = [{
  id: '1',
  title: 'Tonic',
  feature: ['CANOPY', 'Back End Dev', 2015],
  short_desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  full_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://strangeal.github.io/Portfolio/',
  src_link: 'https://strangeal.github.io/Portfolio/',
  card_img: 'img/Snapshoot-Portfolio.svg',
  model_img: 'img/Snapshoot-Portfolio.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  model_tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  card_tags: ['html', 'css', 'javascript'],
},
{
  id: '2',
  title: 'Multi-Post Stories',
  feature: ['FACEBOOK', 'Full Stack Dev', 2015],
  short_desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  full_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://strangeal.github.io/Portfolio/',
  src_link: 'https://strangeal.github.io/Portfolio/',
  card_img: 'img/Snapshoot-Portfolio1.svg',
  model_img: 'img/Snapshoot-Portfolio1.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  model_tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  card_tags: ['html', 'Ruby on rails', 'css', 'javascript'],
  classNm: 'card-reverse',
},
{
  id: '3',
  title: 'Facebook 360',
  feature: ['FACEBOOK', 'Full Stack Dev', 2015],
  short_desc: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  full_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://strangeal.github.io/Portfolio/',
  src_link: 'https://strangeal.github.io/Portfolio/',
  card_img: 'img/Snapshoot-Portfolio2.svg',
  model_img: 'img/Snapshoot-Portfolio2.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  model_tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  card_tags: ['html', 'Ruby on rails', 'css', 'javascript'],
},
{
  id: '4',
  title: 'Uber Navigation',
  feature: ['Uber', 'Lead Developer', 2018],
  short_desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  full_desc: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  live_link: 'https://strangeal.github.io/Portfolio/',
  src_link: 'https://strangeal.github.io/Portfolio/',
  card_img: 'img/Snapshoot-Portfolio3.svg',
  model_img: 'img/Snapshoot-Portfolio3.svg',
  live_img: 'img/liveicon.svg',
  src_Img: 'img/githubsrcicon.svg',
  model_tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
  card_tags: ['html', 'Ruby on rails', 'css', 'javascript'],
  classNm: 'card-reverse',
},
];
// Cards inner
const cardEl = document.querySelector('.cards');
projectList.forEach((project, id) => {
  cardEl.innerHTML += `<section class="card ${project.classNm}">  
  <img src="${project.card_img}" alt="Snapshoot-Portfolio">
      <div class="card-block" id="arti-${id + 1}">
          <h2>${project.title}</h2>
          <ul class="card-frame">
              <li class="no-count">${project.feature[0]}</li>
              <li>${project.feature[1]}</li>
              <li>${project.feature[2]}</li>
          </ul>
          <p>${project.short_desc}</p>
          <ul class="card-tags">
              <li>${project.card_tags[0]}</li>
              <li>${project.card_tags[1]}</li>
              <li>${project.card_tags[2]}</li>
          </ul>
          <button class="card-button" type="submit" >See Project</button>
</div></section>`;
});

// PopUp
const popUpHandler = ((obj) => {
  const template = `
  <div class="overlay-content">
    <div class="feature">
      <div class="model-top">
        <h3>${obj.title}</h3>
        <button class="close-overlay">&times</button>
      </div>
      <ul class="card-frame featureList">
        <li class="no-count">${obj.feature[0]}</li>
        <li>${obj.feature[1]}</li>
        <li>${obj.feature[2]}</li>
      </ul>
      <img class="model_img" src="${obj.model_img}" alt="" />
       <div class="popBottomContent">
          <p>${obj.full_desc}</p>
          <ul class="card-tags model-tags">
            <li>${obj.model_tags[0]}</li>
            <li>${obj.model_tags[1]}</li>
            <li>${obj.model_tags[2]}</li>
            <li>${obj.model_tags[3]}</li>
            <li>${obj.model_tags[4]}</li>
            <li>${obj.model_tags[5]}</li>
            <div class="popButtoms">
              <a href="${obj.live_link}" type="submit">See live <img src="${obj.live_img}" alt="" /></a>
              <a href="${obj.src_link}" type="sumbit" class="secondchild">See Source <img src="${obj.src_Img}" alt="" /></a>
            </div>
          </ul>
      </div>
    </div>
  </div>`;
  return template;
});

const overlay = document.querySelector('.overlay');
const cardButton = document.querySelectorAll('.card-button');

cardButton.forEach((each) => each.addEventListener('click', function OpenPopUp() {
  overlay.classList.remove('disable');
  const ids = this.parentNode.id.split('-')[1];

  const fetchObj = projectList.filter((each) => each.id === ids);
  const dynamicTemplate = popUpHandler(fetchObj[0]);
  overlay.innerHTML = '';
  overlay.innerHTML += dynamicTemplate;

  const closeOverlay = document.querySelector('.close-overlay');
  closeOverlay.addEventListener('click', () => {
    overlay.classList.add('disable');
  });
}));

// Form Validation
const form = document.querySelector('.form-input');
const email = document.getElementById('email');

// Error Mesaage for Invalid email
const setError = (message) => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = message;
};

// Success Mesaage for Valid email
const setSuccess = () => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = '';
};

const validateInputs = (e) => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError('Email is required');
    e.preventDefault();
  } else if (emailValue.toLowerCase() !== emailValue) {
    setError('Provide a valid email address');
    e.preventDefault();
  } else {
    setSuccess();
  }
};

form.addEventListener('submit', (e) => {
  validateInputs(e);
});
