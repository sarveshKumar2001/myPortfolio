AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Web Development Bootcamp",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/certificate/UC-70182190-0912-4c67-9e19-10c8cec910f6/",
  },
  {
    title: "Data Visualization with Tableau",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/HT4G4XR3ECR3",
  },
  {
    title: "IBM Machine Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/verify/profession al-cert/SMYRWCCC3C45",
  },
  { 
    title: "Create Charts and Dashboards Using Microsoft Excel",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/verify/T7DH62P3XW45",
  },
  {
    title: "IBM Cloud Essentials",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://courses.edx.org/certificates/d9e84dc4b0dc4a71b8a6122e660555f7",
  },
  {
    title: "R Programming",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/L25L7TJGJYY6",
  },
  {
    title: "Introduction to Big Data",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/verify/H2PY7SLC7TAN",
  },
  {
    title: "DSA Self paced",
    cardImage: "assets/images/education-page/icons8-geeksforgeeks.svg",
    moocLink: "https://media.geeksforgeeks.org/courses/certificates/864182dc09f3c7bca89403a7aad58c7b.pdf",
  },
  {
    title: "Database Management System",
    cardImage: "assets/images/education-page/infosys-1.svg",
    moocLink:
      "https://drive.google.com/file/d/186ua27qSJT3Ww8T562LLNB15sBaTugTZ/view?usp=sharing",
  },
  {
    title: "FullStack Developer Intern",
    cardImage: "assets/images/education-page/Techplement.png",
    moocLink: "https://drive.google.com/file/d/15rE4jE5uhww9G4a2eRfRf7K_VjJImtf3/view",
  },
  {
    title: "VMware vSphere 7.0 BootCamp",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/certificate/UC-d40a9f30-6665-43db-ac4e-b58024cff8bb/",
  },
  {
    title: "Java FullStack",
    cardImage: "assets/images/education-page/ciper.png",
    moocLink:
      "https://drive.google.com/file/d/1aopCXMYJXIh_w5r_93ZqDLM5Dm3vUQxv/view",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
