/************ SEARCH ************/
document.getElementById("searchBtn")?.addEventListener("click", () => {
  const location = document.getElementById("location").value;
  const type = document.getElementById("propertyType").value;
  const min = document.getElementById("minPrice").value;
  const max = document.getElementById("maxPrice").value;

  alert(`Searching:\nLocation: ${location}\nType: ${type}\nPrice: ${min} - ${max}`);
});


/************ PROPERTY MODAL ************/
const modal = document.getElementById("propertyModal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".property-card .btn")?.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.getElementById("modalTitle").innerText = "Property Details";
    document.getElementById("modalPrice").innerText = "Price: ₹50,00,000";
  });
});

closeBtn?.addEventListener("click", () => {
  modal.style.display = "none";
});


/************ STAR RATING (PROPERTY & AGENT) ************/
function starRating(starsId, valueId) {
  const stars = document.querySelectorAll(`#${starsId} span`);
  const valueText = document.getElementById(valueId);

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const value = star.getAttribute("data-value");
      valueText.innerText = `Rating: ${value} / 5`;

      stars.forEach(s => {
        s.classList.toggle("active", s.getAttribute("data-value") <= value);
      });
    });
  });
}

starRating("propertyStars", "ratingValue");
starRating("agentStars", "agentRatingValue");


/************ ADD REVIEW ************/
function addReview() {
  const name = document.getElementById("userName").value;
  const review = document.getElementById("userReview").value;

  if (!name || !review) {
    alert("Please fill all fields");
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `<b>${name}</b><p>${review}</p><hr>`;
  document.getElementById("reviewList").appendChild(div);

  document.getElementById("userName").value = "";
  document.getElementById("userReview").value = "";
}


/************ CHAT WITH AGENT ************/
function sendMessage() {
  const msg = document.getElementById("chatMessage").value;
  if (!msg) return;

  const box = document.getElementById("chatBox");
  const p = document.createElement("p");
  p.innerHTML = `<b>You:</b> ${msg}`;
  box.appendChild(p);

  document.getElementById("chatMessage").value = "";

  setTimeout(() => {
    const reply = document.createElement("p");
    reply.innerHTML = `<b>Agent:</b> Thanks for contacting us!`;
    box.appendChild(reply);
  }, 800);
}


/************ WISHLIST ************/
document.querySelector(".wishlist-btn")?.addEventListener("click", () => {
  alert("❤️ Property added to wishlist!");
});


/************ INQUIRY ************/
document.getElementById("inquiryForm")?.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("status").innerText = "Submitted";
  document.getElementById("status").style.color = "orange";
  alert("Inquiry submitted successfully!");
});


/************ SCHEDULE VISIT ************/
function scheduleVisit() {
  alert("Visit scheduled successfully!");
}


/************ APPROVE INQUIRY ************/
function approveInquiry() {
  document.getElementById("status").innerText = "Approved";
  document.getElementById("status").style.color = "green";
}


/************ PAYMENT ************/
function payToken() {
  alert("Token payment successful!");
}

function makePayment() {
  alert("Payment completed successfully!");
}


/************ INVOICE ************/
function downloadInvoice() {
  alert("Invoice downloaded!");
}


/************ SIMPLE SCROLL ANIMATION ************/
const boxes = document.querySelectorAll(".box, .cms-section");
window.addEventListener("scroll", () => {
  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      box.style.opacity = 1;
      box.style.transform = "translateY(0)";
    }
  });
});

const properties = {
    1: {
        name: "Luxury Villa",
        price: "₹ 75 Lakhs",
        desc: "4 BHK villa with garden & parking."
    },
    2: {
        name: "Modern Apartment",
        price: "₹ 45 Lakhs",
        desc: "2 BHK apartment near city center."
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (properties[id]) {
    document.getElementById("propertyName").innerText = properties[id].name;
    document.getElementById("propertyPrice").innerText = properties[id].price;
    document.getElementById("propertyDesc").innerText = properties[id].desc;
}