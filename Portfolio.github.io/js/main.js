       /*===== Resize Navbar on Scroll =====*/
       var navbar = document.querySelector(".navbar");
       // when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
       window.onscroll = () =>{
       this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
     }





// Get references to the login section and admin panel
const adminLogin = document.querySelector('.admin-login');
const adminPanel = document.querySelector('.admin-panel');

// Hide the admin panel initially
adminPanel.style.display = 'none';

// Add event listener to the login button
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', () => {
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  // Check if entered credentials match the hardcoded values
  if (enteredUsername === 'admin' && enteredPassword === 'password') {
    // Show the admin panel and hide the login section
    adminLogin.style.display = 'none';
    adminPanel.style.display = 'block';
  } else {
    // Display an error message or take appropriate action
    alert('Invalid credentials. Please try again.');
  }
});









     // Update Hero Section
// Update Hero Section
// Update Hero Section
const heroImageInput = document.getElementById('hero-image');
const heroTextInput = document.getElementById('hero-text');
const heroSubtextInput = document.getElementById('hero-subtext');
const updateHeroButton = document.getElementById('update-hero');
const heroImage = document.querySelector('.home-image img');
const heroText = document.querySelector('.home-text h1');
const heroSubtext = document.querySelector('.home-text span');

// Retrieve saved data from Local Storage
const savedHeroImage = localStorage.getItem('heroImage');
const savedHeroText = localStorage.getItem('heroText');
const savedHeroSubtext = localStorage.getItem('heroSubtext');

// Set initial values from saved data (if available)
if (savedHeroImage) {
  heroImage.src = savedHeroImage;
}

if (savedHeroText) {
  heroText.textContent = savedHeroText;
}

if (savedHeroSubtext) {
  heroSubtext.textContent = savedHeroSubtext;
}

updateHeroButton.addEventListener('click', () => {
  const file = heroImageInput.files[0];
  const text = heroTextInput.value;
  const subtext = heroSubtextInput.value;

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      heroImage.src = reader.result;
      // Save the updated hero image in Local Storage
      localStorage.setItem('heroImage', reader.result);
    };
  }

  if (text) {
    heroText.textContent = text;
    // Save the updated hero text in Local Storage
    localStorage.setItem('heroText', text);
  }

  if (subtext) {
    heroSubtext.textContent = subtext;
    // Save the updated hero subtext in Local Storage
    localStorage.setItem('heroSubtext', subtext);
  }
});



















// Update About Section
const aboutImageInput = document.getElementById('about-image');
const aboutTextInput = document.getElementById('about-text');
const skillUIUXInput = document.getElementById('skill-uiux');
const skillMobileInput = document.getElementById('skill-mobile');
const skillJavaInput = document.getElementById('skill-java');
const skillAPIInput = document.getElementById('skill-api');
const updateAboutButton = document.getElementById('update-about');
const aboutImage = document.querySelector('.about-image img');
const aboutText = document.querySelector('.about-content p');
const skillUIUX = document.querySelector('.skill-item:nth-child(1) .counter');
const skillMobile = document.querySelector('.skill-item:nth-child(2) .counter');
const skillJava = document.querySelector('.skill-item:nth-child(3) .counter');
const skillAPI = document.querySelector('.skill-item:nth-child(4) .counter');

// Retrieve saved data from Local Storage
const savedAboutImage = localStorage.getItem('aboutImage');
const savedAboutText = localStorage.getItem('aboutText');
const savedSkillUIUX = localStorage.getItem('skillUIUX');
const savedSkillMobile = localStorage.getItem('skillMobile');
const savedSkillJava = localStorage.getItem('skillJava');
const savedSkillAPI = localStorage.getItem('skillAPI');

// Set initial values from saved data (if available)
if (savedAboutImage) {
  aboutImage.src = savedAboutImage;
}

if (savedAboutText) {
  aboutText.textContent = savedAboutText;
}

if (savedSkillUIUX) {
  skillUIUX.textContent = savedSkillUIUX;
}

if (savedSkillMobile) {
  skillMobile.textContent = savedSkillMobile;
}

if (savedSkillJava) {
  skillJava.textContent = savedSkillJava;
}

if (savedSkillAPI) {
  skillAPI.textContent = savedSkillAPI;
}

updateAboutButton.addEventListener('click', () => {
  const file = aboutImageInput.files[0];
  const text = aboutTextInput.value;
  const skillUIUXValue = skillUIUXInput.value;
  const skillMobileValue = skillMobileInput.value;
  const skillJavaValue = skillJavaInput.value;
  const skillAPIValue = skillAPIInput.value;

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      aboutImage.src = reader.result;
      // Save the updated about image in Local Storage
      localStorage.setItem('aboutImage', reader.result);
    };
  }

  if (text) {
    aboutText.textContent = text;
    // Save the updated about text in Local Storage
    localStorage.setItem('aboutText', text);
  }

  if (skillUIUXValue) {
    skillUIUX.textContent = skillUIUXValue;
    // Save the updated UI/UX skill percentage in Local Storage
    localStorage.setItem('skillUIUX', skillUIUXValue);
  }

  if (skillMobileValue) {
    skillMobile.textContent = skillMobileValue;
    // Save the updated Mobile App Development skill percentage in Local Storage
    localStorage.setItem('skillMobile', skillMobileValue);
  }

  if (skillJavaValue) {
    skillJava.textContent = skillJavaValue;
    // Save the updated Java/Kotlin skill percentage in Local Storage
    localStorage.setItem('skillJava', skillJavaValue);
  }

  if (skillAPIValue) {
    skillAPI.textContent = skillAPIValue;
    // Save the updated API's skill percentage in Local Storage
    localStorage.setItem('skillAPI', skillAPIValue);
  }
});











// // Get references to the login form and admin panel
// const loginForm = document.querySelector('.admin-login');
// const adminPanel = document.querySelector('.admin-panel');

// // Add event listener to the login button
// const loginButton = document.getElementById('login');
// loginButton.addEventListener('click', () => {
//   // Get the entered username and password
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Perform authentication and authorization
//   if (isAdmin(username, password)) {
//     // Display the admin panel
//     loginForm.style.display = 'none';
//     adminPanel.style.display = 'block';
//   } else {
//     // Show an error message or take appropriate action
//     alert('Invalid username or password');
//   }
// });

// // Function to verify if a user is an admin
// function isAdmin(username, password) {
//   // Implement your authentication and authorization logic here
//   // You can use a database, JWT, session-based authentication, etc.
//   // Return true if the user is an admin, otherwise return false
//   // Example:
//   return username === 'admin' && password === 'password';
// }
















// Admin Panel
const serviceIconInput = document.getElementById('service-icon');
const serviceTitleInput = document.getElementById('service-title');
const serviceDescriptionInput = document.getElementById('service-description');
const addServiceButton = document.getElementById('add-service');
const deleteServiceSelect = document.getElementById('delete-service');
const deleteButton = document.getElementById('delete-button');

// Services
const servicesContainer = document.querySelector('.service-section .row');

// Populate delete service select options
populateDeleteServiceSelect();

// Add event listener to add/edit service button
addServiceButton.addEventListener('click', () => {
  const icon = serviceIconInput.value;
  const title = serviceTitleInput.value;
  const description = serviceDescriptionInput.value;

  if (icon && title && description) {
    // Check if we are editing an existing service or adding a new one
    const existingService = servicesContainer.querySelector(`.service-item[data-title="${title}"]`);
    if (existingService) {
      // Edit existing service
      const serviceIcon = existingService.querySelector('.icon i');
      const serviceTitle = existingService.querySelector('h3');
      const serviceDescription = existingService.querySelector('p');

      serviceIcon.className = icon;
      serviceTitle.textContent = title;
      serviceDescription.textContent = description;
    } else {
      // Add new service
      const serviceItem = document.createElement('div');
      serviceItem.classList.add('service-item');
      serviceItem.dataset.title = title;
      serviceItem.innerHTML = `
        <div class="service-item-inner">
            <div class="icon">
                <i class="${icon}"></i>
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
      `;
      servicesContainer.appendChild(serviceItem);

      // Update delete service select options
      populateDeleteServiceSelect();
    }

    // Clear input fields
    clearServiceInputs();

    // Save the service items to local storage
    saveServiceItems();
  }
});

// Add event listener to delete button
deleteButton.addEventListener('click', () => {
  const selectedServiceTitle = deleteServiceSelect.value;
  const serviceItemsToDelete = servicesContainer.querySelectorAll(`.service-item[data-title="${selectedServiceTitle}"]`);

  if (serviceItemsToDelete.length > 0) {
    serviceItemsToDelete.forEach((serviceItem) => {
      servicesContainer.removeChild(serviceItem);
    });

    // Update delete service select options
    populateDeleteServiceSelect();

    // Save the service items to local storage
    saveServiceItems();
  }
});

// Function to populate delete service select options
function populateDeleteServiceSelect() {
  // Clear previous options
  deleteServiceSelect.innerHTML = '';

  // Get all existing service titles
  const serviceTitles = Array.from(servicesContainer.querySelectorAll('.service-item')).map(
    (serviceItem) => serviceItem.dataset.title
  );

  // Add options to the select element
  serviceTitles.forEach((title) => {
    const option = document.createElement('option');
    option.value = title;
    option.textContent = title;
    deleteServiceSelect.appendChild(option);
  });
}

// Function to clear input fields
function clearServiceInputs() {
  serviceIconInput.value = '';
  serviceTitleInput.value = '';
  serviceDescriptionInput.value = '';
}

// Function to save the service items to local storage
function saveServiceItems() {
  const serviceItems = Array.from(servicesContainer.querySelectorAll('.service-item')).map((serviceItem) => ({
    title: serviceItem.dataset.title,
    icon: serviceItem.querySelector('.icon i').className,
    description: serviceItem.querySelector('p').textContent,
  }));

  localStorage.setItem('serviceItems', JSON.stringify(serviceItems));
}

// Function to load the service items from local storage
function loadServiceItems() {
  const serviceItems = JSON.parse(localStorage.getItem('serviceItems'));

  if (serviceItems && serviceItems.length > 0) {
    serviceItems.forEach((item) => {
      const serviceItem = document.createElement('div');
      serviceItem.classList.add('service-item');
      serviceItem.dataset.title = item.title;
      serviceItem.innerHTML = `
        <div class="service-item-inner">
            <div class="icon">
                <i class="${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
      `;
      servicesContainer.appendChild(serviceItem);
    });
  }
}

// Load the service items on page load
window.addEventListener('load', () => {
  loadServiceItems();
});














// const portfolioContainer = document.querySelector('.portfolio-items');
// const portfolioFilterButtons = document.querySelectorAll('.portfolio-filter button');
// const portfolioImageInput = document.getElementById('portfolio-image');
// const portfolioCategoryInput = document.getElementById('portfolio-category');
// const addPortfolioButton = document.getElementById('add-portfolio');
// const deletePortfolioSelect = document.getElementById('delete-portfolio');
// const deletePortfolioButton = document.getElementById('delete-portfolio-button');

// // Populate delete portfolio select options
// populateDeletePortfolioSelect();

// // Add event listener to add portfolio button
// addPortfolioButton.addEventListener('click', () => {
//   const file = portfolioImageInput.files[0];
//   const category = portfolioCategoryInput.value;

//   if (file && category) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       // Create the new portfolio item
//       const portfolioItem = createPortfolioItem(category, reader.result);

//       // Insert the new portfolio item at the end of the portfolio container
//       portfolioContainer.appendChild(portfolioItem);

//       // Update delete portfolio select options
//       populateDeletePortfolioSelect();

//       // Clear input fields
//       clearPortfolioInputs();

//       // Save the portfolio items to local storage
//       savePortfolioItems();

//       // Add event listener to new portfolio item for filtering
//       const newFilterButton = portfolioItem.querySelector('.icon');
//       newFilterButton.addEventListener('click', () => {
//         filterPortfolioItems(category);
//       });
//     };
//   }
// });

// // Add event listener to delete portfolio button
// deletePortfolioButton.addEventListener('click', () => {
//   const selectedPortfolioCategory = deletePortfolioSelect.value;

//   // Remove portfolio items based on category (heading)
//   const portfolioItemsToDelete = Array.from(portfolioContainer.children).filter(
//     (item) => item.querySelector('.portfolio-info h4').textContent === selectedPortfolioCategory
//   );

//   portfolioItemsToDelete.forEach((item) => {
//     portfolioContainer.removeChild(item);
//   });

//   // Update delete portfolio select options
//   populateDeletePortfolioSelect();

//   // Save the portfolio items to local storage
//   savePortfolioItems();
// });

// // Function to create a portfolio item
// function createPortfolioItem(category, imageSrc) {
//   const portfolioItem = document.createElement('div');
//   portfolioItem.classList.add('portfolio-item');
//   portfolioItem.dataset.category = category.toLowerCase();
//   portfolioItem.innerHTML = `
//     <div class="portfolio-item-inner">
//       <div class="portfolio-img">
//         <img src="${imageSrc}" alt="">
//       </div>
//       <div class="portfolio-info">
//         <h4>${category}</h4>
//         <div class="icon">
//           <i class="fa fa-search"></i>
//         </div>
//       </div>
//     </div>
//   `;
//   return portfolioItem;
// }

// // Function to populate delete portfolio select options
// function populateDeletePortfolioSelect() {
//   // Clear previous options
//   deletePortfolioSelect.innerHTML = '';

//   // Get unique portfolio categories (headings)
//   const portfolioCategories = Array.from(portfolioContainer.children).reduce((categories, item) => {
//     const category = item.querySelector('.portfolio-info h4').textContent;
//     if (!categories.includes(category)) {
//       categories.push(category);
//     }
//     return categories;
//   }, []);

//   // Add options to the select element
//   portfolioCategories.forEach((category) => {
//     const option = document.createElement('option');
//     option.value = category;
//     option.textContent = category;
//     deletePortfolioSelect.appendChild(option);
//   });
// }

// // Function to clear input fields
// function clearPortfolioInputs() {
//   portfolioImageInput.value = '';
//   portfolioCategoryInput.value = '';
// }

// // Function to save portfolio items to local storage
// function savePortfolioItems() {
//   const portfolioHTML = portfolioContainer.innerHTML;
//   localStorage.setItem('portfolioItems', portfolioHTML);
// }

// // Function to load portfolio items from local storage
// function loadPortfolioItems() {
//   const portfolioHTML = localStorage.getItem('portfolioItems');
//   if (portfolioHTML) {
//     portfolioContainer.innerHTML = portfolioHTML;
//   }
// }

// // Load portfolio items on page load
// window.addEventListener('load', () => {
//   loadPortfolioItems();
// });

// // Function to filter portfolio items
// function filterPortfolioItems(category) {
//   portfolioContainer.childNodes.forEach((item) => {
//     if (item.dataset.category === category || category === 'all') {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

// // Add event listeners to filter buttons
// portfolioFilterButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const category = button.getAttribute('data-filter');
//     filterPortfolioItems(category);
//   });
// });














      /*===== Nav Toggler =====*/
      const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle)
      {
          navToggle.addEventListener("click", () =>
          {
              navMenu.classList.toggle("active");
          })
      }
      // closing menu when link is clicked
      const navLink = document.querySelectorAll(".nav-link");
      function linkAction()
      {
          const navMenu = document.querySelector(".menu");
          navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))
      /*===== Scroll Section Active Link =====*/

      const Section=document.querySelectorAll('section[id]')
      function scrollActive()
      {
          const scrollY = window.pageYOffset
          Section.forEach(current => {
              const sectionHeight = current.offsetHeight
              const sectionTop = current.offsetTop - 50;
              sectionId = current.getAttribute('id')
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
              }
              else
              {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
              }
          })
      }
      window.addEventListener('scroll', scrollActive)
      /*===== Skills Animation =====*/
      const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () => {
          skillsEffect();
      })
      // every time we scroll checking, we exceeded the about-skills or not
      function checkScroll(el)
      {
          //getting the top position of about-skills relative to view port, in other words we need to get
          // amount of pixels between about-skills and the top edge of the window.
          let rect = el.getBoundingClientRect();
          // after knowing the amount of pixels between the top edge of about skills and the top edge of window
          // now we will check we exceeded the bottom edge of about skills or not
          if(window.innerHeight >= rect.top + el.offsetHeight) return true;
          return false;
      }
      function skillsEffect()
      {
          if(!checkScroll(skills_wrap)) return;
          skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
      }








/*===== Portfolio Item Filter =====*/
const FilterContainer = document.querySelector(".portfolio-filter");
const filterBtns = FilterContainer.children;
const totalFilterBtn = filterBtns.length;
const PortfolioItems = document.querySelectorAll(".portfolio-item");
const totalportfolioItem = PortfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    FilterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalportfolioItem; k++) {
      if (
        filterValue === PortfolioItems[k].getAttribute("data-category") ||
        filterValue === "all"
      ) {
        PortfolioItems[k].classList.remove("hide");
        PortfolioItems[k].classList.add("show");
      } else {
        PortfolioItems[k].classList.remove("show");
        PortfolioItems[k].classList.add("hide");
      }
    }
  });
}

/*===== Lightbox =====*/
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const lightboxText = lightbox.querySelector(".caption-text");
const lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalportfolioItem; i++) {
  PortfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function nextItem() {
  if (itemIndex === totalportfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalportfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle("open");

  // Close lightbox when clicking on the cross icon
  lightboxClose.addEventListener("click", function () {
    toggleLightbox();
  });
}


function changeItem() {
  const imgSrc = PortfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = PortfolioItems[itemIndex]
    .querySelector("h4")
    .innerHTML;
  lightboxCounter.innerHTML = `${itemIndex + 1} of ${totalportfolioItem}`;

  // Open different websites based on item index
  lightboxImg.addEventListener("click", function () {
    let websiteUrl;
    switch (itemIndex) {
      case 0:
        websiteUrl = "https://www.youtube.com/";
        break;
      case 1:
        websiteUrl = "https://www.facebook.com/";
        break;
      case 2:
        websiteUrl = "https://www.instagram.com/";
        break;
      case 0:
        websiteUrl = "https://www.youtube.com/";
        break;
      default:
        websiteUrl = "";
    }
    if (websiteUrl !== "") {
      window.open(websiteUrl, "_blank");
    }
  });
}
























      // /*===== Portfolio Item Filter =====*/
      // const FilterContainer = document.querySelector(".portfolio-filter"),
      //       filterBtns = FilterContainer.children;
      //       totalFilterBtn = filterBtns.length;
      //       PortfolioItems = document.querySelectorAll(".portfolio-item"),
      //       totalportfolioItem = PortfolioItems.length;
      //       for(let i=0; i < totalFilterBtn; i++)
      //       {
      //           filterBtns[i].addEventListener("click", function()
      //           {
      //               FilterContainer.querySelector(".active").classList.remove("active");
      //               this.classList.add("active");
      //               const filterValue = this.getAttribute("data-filter")
      //               for( let k=0; k<totalportfolioItem; k++)
      //               {
      //                   if(filterValue === PortfolioItems[k].getAttribute("data-category"))
      //                   {
      //                       PortfolioItems[k].classList.remove("hide");
      //                       PortfolioItems[k].classList.add("show");
      //                   }
      //                   else
      //                   {
      //                       PortfolioItems[k].classList.remove("show");
      //                       PortfolioItems[k].classList.add("hide");
      //                   }
      //                   if(filterValue === "all")
      //                   {
      //                       PortfolioItems[k].classList.remove("hide");
      //                       PortfolioItems[k].classList.add("show");
      //                   }
      //               }
      //           })
      //       }
      //   /*===== Lightbox =====*/
      //   const lightbox = document.querySelector(".lightbox"),
      //             lightboxImg = lightbox.querySelector(".lightbox-img"),
      //             lightboxClose = lightbox.querySelector(".lightbox-close"),
      //             lightboxText = lightbox.querySelector(".caption-text"),
      //             lightboxCounter = lightbox.querySelector(".caption-counter");
      //             let itemIndex = 0;
      //             for(let i=0; i<totalportfolioItem; i++)
      //             {
      //                PortfolioItems[i].addEventListener("click", function()
      //                {
      //                    itemIndex=i;
      //                    changeItem();
      //                    toggleLightbox();
      //                })
      //             }
      //             function nextItem()
      //             {
      //                 if(itemIndex == totalportfolioItem-1)
      //                 {
      //                     itemIndex=0;
      //                 }
      //                 else
      //                 {
      //                     itemIndex++
      //                 }
      //                 changeItem();
      //             }
      //             function prevItem()
      //             {
      //                 if(itemIndex == 0)
      //                 {
      //                     itemIndex=totalportfolioItem-1;
      //                 }
      //                 else
      //                 {
      //                     itemIndex--
      //                 }
      //                 changeItem();
      //             }
      //             function toggleLightbox()
      //             {
      //                 lightbox.classList.toggle("open");
      //             }
      //             function changeItem()
      //             {
      //                 imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
      //                 lightboxImg.src=imgSrc;
      //                 lightboxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML;
      //                 lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
      //             }
      //             // close lightbox
      //             lightbox.addEventListener("click",function(event)
      //             {
      //                if(event.target === lightboxClose || event.target === lightbox)
      //                {
      //                   toggleLightbox()
      //                }
      //             })



  