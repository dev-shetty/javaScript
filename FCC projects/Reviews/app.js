// local reviews data (was preset by the author)
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// set starting item
let currentItem = 0;

nextBtn.addEventListener("click", () => {
  currentItem++;
  if(currentItem > reviews.length - 1) {  // to loopback to first item at end
    currentItem = 0;
  } 
  showPerson(currentItem);
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if(currentItem < 0) {   // to loopback to last item at prev on beginning
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random()*reviews.length); // no -1 since it neglects last boundary number
  showPerson(currentItem);
});



// load initial item
// to show the initial item when document loads
window.addEventListener("DOMContentLoaded", (event) => {
  // It fires when the document is completely loaded and parsed
  showPerson(currentItem);
});

function showPerson(number) {
  const item = reviews[number];
  img.src = item.img; // Changing image according to the object
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

