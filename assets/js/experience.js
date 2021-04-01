//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Trainee",
    cardImage: "assets/images/experience-page/ssit.png",
    place: "SSIT Pvt. Ltd, Nagpur ",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Successfully completed a 30 days Training using PHP, HTML and CSS. Worked with both front end and the backend of a website.</li>",
  },
  {
    title: "Intern",
    cardImage: "assets/images/experience-page/tata.png",
    place: "Tata Cummins, Jamshedpur",
    time: "(June - July, 2019)",
    desp: "<li>Successfully completed a 1-month internship in Jamshedpur. Understood how the business works in large scale.</li><li> During this period, I worked on the project “BoE Life Cycle with ICEGATE Linkage” using MySQL, PLSQL and Oracle.</li>",
  },
  {
    title: "Jio Digital Champions Program",
    cardImage: "assets/images/experience-page/jio.jpg",
    place: "Jio",
    time: "(June, 18 - July, 18)",
    desp:"<li>Successfully completed the 5-week Jio program with Platinum Certificate awarded and received an appreciation Certificate for being in top 500 students of the program all over India.</li><li> It was an Action Oriented Program which made us to interact closely with multiple Small and Medium Businesses (SMBs) to get insights into their business and challenges.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "The Robin Hood Army",
    cardImage: "assets/images/experience-page/robin.png",
    description:
      "We collected lot of food packets from nearby bakeries and served them near the Marina Beach, Chennai to unfortunate people.",
  },
  {
    title: "AIESEC in Chennai",
    cardImage: "assets/images/experience-page/aiesec.png",
    description:
      "Worked as a team member in OGE (Outgoing Global Entrepreneur) department and raised 10 and completed our Quarterly target successfully.",
  },
  
  {
    title: "30DaysofKotlin",
    cardImage: "assets/images/experience-page/kotlin.png",
    description:
      "Worked on Kotlin for 30 days, a Google challenge. Also made a Calculator application from scratch using Kotlin for the successful submission of the app.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
