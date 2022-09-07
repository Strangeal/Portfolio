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
  full_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
  full_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
  full_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
  full_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
