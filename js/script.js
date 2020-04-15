const membersTrigger = document.querySelector(".grid-container").children;

const allMembers = document.querySelector(".member-description").children;

// Toggle functionality

for (let i = 0; i < membersTrigger.length; i++) {
  membersTrigger[i].onclick = () => {
    const index = [...membersTrigger[i].parentElement.children].indexOf(
      membersTrigger[i]
    );

    for (element of allMembers) {
      // to hide current element if another gets clicked
      if (!element.classList.contains("hide")) element.classList.add("hide");
    }

    for (element of membersTrigger) {
      // to remove cut corners if another element gets clicked
      if (element.classList.contains("active-member"))
        element.classList.remove("active-member");
    }

    // Adding class for cut corners on active element
    membersTrigger[index].classList.add("active-member");

    allMembers[index].classList.remove("hide");
  };
}

// Tilt effect

$(".trigger-img").tilt({
  glare: true,
  maxGlare: 0.1,
  scale: 1.1
});
