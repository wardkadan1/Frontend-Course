const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  const answer = item.querySelector(".faq-answer");

  item.addEventListener("click", () => {
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.querySelector(".faq-answer");
        otherAnswer.style.display = "none";
      }
    });

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
