document.addEventListener("DOMContentLoaded", function() {
    const donationForm = document.getElementById("donationForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const donationList = document.getElementById("donationList");

    // Handle form submission
    if (donationForm) {
        donationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const donorName = document.getElementById("donorName").value;
            const email = document.getElementById("email").value;
            const foodDescription = document.getElementById("foodDescription").value;
            const quantity = document.getElementById("quantity").value;
            const date = document.getElementById("date").value;
            const phone = document.getElementById("phone").value;

            const donation = {
                donorName,
                email,
                foodDescription,
                quantity,
                date,
                phone
            };

            // Save donation to localStorage
            let donations = JSON.parse(localStorage.getItem("donations")) || [];
            donations.push(donation);
            localStorage.setItem("donations", JSON.stringify(donations));

            // Show thank you message
            thankYouMessage.style.display = "block";
            donationForm.reset();
        });
    }

    // Load recent donations
    if (donationList) {
        const donations = JSON.parse(localStorage.getItem("donations")) || [];
        donations.forEach(donation => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-3";
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${donation.foodDescription}</h5>
                        <p class="card-text">Donor: ${donation.donorName}</p>
                        <p class="card-text">Quantity: ${donation.quantity}</p>
                        <p class="card-text">Date: ${donation.date}</p>
                        <p class="card-text">Contact: ${donation.phone}</p>
                    </div>
                </div>
            `;
            donationList.appendChild(card);
        });
    }
});

 