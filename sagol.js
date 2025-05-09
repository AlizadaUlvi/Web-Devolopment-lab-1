document.addEventListener("DOMContentLoaded", function () {
   
    const profile = {
      name: "Alizada Ulvi",
      title: "Web Developer",
      image: "images.jpg"
    };
  
    document.getElementById("profileText").innerHTML = `
      <div class="imgbx">
        <img src="${profile.image}" alt="Profile photo">
      </div>
      <h2>${profile.name}<br><span>${profile.title}</span></h2>
    `;
  
   
    const contacts = [
      { icon: "phone", text: "+994 70 864 81 80" },
      { icon: "envelope-o", text: "alizadaulvi04@gmail.com" },
      { icon: "globe", text: "sap.aztu.edu.az/telebe" },
      { icon: "linkedin", text: "www.linkedin.com/in/ulvi-alizada" },
      { icon: "map-marker", text: "Baku, Surakhani, Azerbaijan" }
    ];
  
    document.getElementById("contactInfo").innerHTML = contacts.map(c => `
      <li>
        <span class="icon"><i class="fa fa-${c.icon}"></i></span>
        <span class="text">${c.text}</span>
      </li>
    `).join("");
  
    
    const educations = [
      { year: "2024 - 2028", title: "Bachelor Degree in Information Security", school: "Azerbaijan Technical University" },
      { year: "2028 - 2030", title: "Master Degree in Programming", school: "Istanbul University" },
      { year: "2030 - 2034", title: "Doctoral Degree in Programming", school: "Complutense University of Madrid" }
    ];
  
    document.getElementById("educationInfo").innerHTML = educations.map(edu => `
      <li>
        <h5>${edu.year}</h5>
        <h4>${edu.title}</h4>
        <h4>${edu.school}</h4>
      </li>
    `).join("");
  
   
    const languages = [
      { name: "English", percent: 68 },
      { name: "Turkish", percent: 90 },
      { name: "Azerbaijani", percent: 95 }
    ];
  
    document.getElementById("languageInfo").innerHTML = languages.map(lang => `
      <li>
        <span class="text">${lang.name}</span>
        <span class="percent"><div style="width: ${lang.percent}%"></div></span>
      </li>
    `).join("");
      
const experiences = [
  {
    year: "2024 - present",
    company: "Unico",
    position: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    year: "2023 - 2024",
    company: "TechWorld",
    position: "Intern Developer",
    description: "Assisted in developing internal tools using HTML, CSS, and JavaScript."
  }
];

document.getElementById("experienceList").innerHTML = experiences.map(exp => `
  <div class="box">
    <div class="year_Company">
      <h5>${exp.year}</h5>
      <h5>${exp.company}</h5>
    </div>
    <div class="text">
      <h4>${exp.position}</h4>
      <p>${exp.description}</p>
    </div>
  </div>
`).join("");

const aboutText = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
`;

document.getElementById("aboutProfile").innerHTML = `
  <h2 class="title2">Profile</h2>
  <p>${aboutText}</p>
`;

    
    const skills = [
      { name: "HTML", percent: 76 },
      { name: "CSS", percent: 66 },
      { name: "JavaScript", percent: 48 },
      { name: "Photoshop", percent: 34 },
      { name: "Illustrator", percent: 84 },
      { name: "Adobe XD", percent: 92 }
    ];
  
    document.getElementById("skillsList").innerHTML = skills.map(skill => `
      <div class="box">
        <h4>${skill.name}</h4>
        <div class="percent"><div style="width: ${skill.percent}%"></div></div>
      </div>
    `).join("");

    const interests = ["Gaming", "Cycling", "Football", "Reading"];
    const icons = ["gamepad", "bicycle", "futbol-o", "book"];
  
    document.getElementById("interestList").innerHTML = interests.map((item, i) => `
      <li><i class="fa fa-${icons[i]}"></i>${item}</li>
    `).join("");
  });
  