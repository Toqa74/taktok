// Simulated data for each section
const eventsData = [
    { title: "Event 1", imageUrl: "events_image1.jpg" },
    { title: "Event 2", imageUrl: "events_image2.jpg" },
    { title: "Event 3", imageUrl: "events_image3.jpg" }
  ];
  
  const guestsData = [
    { name: "Guest 1", imageUrl: "guests_image1.jpg" },
    { name: "Guest 2", imageUrl: "guests_image2.jpg" },
    { name: "Guest 3", imageUrl: "guests_image3.jpg" }
  ];
  
  const activitiesData = [
    { name: "Activity 1", imageUrl: "activities_image1.jpg" },
    { name: "Activity 2", imageUrl: "activities_image2.jpg" },
    { name: "Activity 3", imageUrl: "activities_image3.jpg" }
  ];
  
  // Function to populate content for each section
  function populateContent(data, sectionId) {
    const sectionContent = document.getElementById(sectionId);
    sectionContent.innerHTML = ""; // Clear existing content
  
    data.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
  
      if (sectionId === "events-content") {
        itemDiv.innerHTML = `<h3>${item.title}</h3><img src="${item.imageUrl}" alt="${item.title}">`;
      } else if (sectionId === "guests-content") {
        itemDiv.innerHTML = `<h3>${item.name}</h3><img src="${item.imageUrl}" alt="${item.name}">`;
      } else if (sectionId === "activities-content") {
        itemDiv.innerHTML = `<h3>${item.name}</h3><img src="${item.imageUrl}" alt="${item.name}">`;
      }
  
      sectionContent.appendChild(itemDiv);
    });
  }
  
  // Populate content for each section
  populateContent(eventsData, "events-content");
  populateContent(guestsData, "guests-content");
  populateContent(activitiesData, "activities-content");
  