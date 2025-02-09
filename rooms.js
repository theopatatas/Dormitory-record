document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const roomsContainer = document.querySelector('.rooms-container');
    const modal = document.getElementById('roomModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const closeModal = document.querySelector('.close');
    const rentButton = document.getElementById('rentButton');

    // Login and signup form handlers
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Login attempt', { email, password });
            alert(`Logged in with Email: ${email}`);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Signup attempt', { username, email, password });
            alert(`Signed up with Username: ${username}, Email: ${email}`);
        });
    }

    // Sample room data (10 rooms)
    const rooms = [
        { id: 1, name: "Cozy Studio", image: "https://media.designcafe.com/wp-content/uploads/2021/11/08175139/living-cum-bedroom-cozy-apartment-ideas.jpg", description: "A comfortable studio apartment in the heart of the city. Perfect for young professionals or students.", price: "$800/month" },
        { id: 2, name: "Spacious 2BR", image: "https://source.unsplash.com/random/800x600?apartment", description: "A large 2-bedroom apartment with a beautiful view. Ideal for small families or roommates.", price: "$1200/month" },
        { id: 3, name: "Luxury Penthouse", image: "https://source.unsplash.com/random/800x600?penthouse", description: "An exquisite penthouse with panoramic city views. Experience luxury living at its finest.", price: "$2500/month" },
        { id: 4, name: "Charming 1BR", image: "https://source.unsplash.com/random/800x600?bedroom", description: "A charming 1-bedroom apartment in a quiet neighborhood. Perfect for those seeking a peaceful home.", price: "$900/month" },
        { id: 5, name: "Modern Loft", image: "https://source.unsplash.com/random/800x600?loft", description: "A stylish loft apartment with high ceilings and modern amenities. Great for creative professionals.", price: "$1500/month" },
        { id: 6, name: "Cozy Cottage", image: "https://source.unsplash.com/random/800x600?cottage", description: "A quaint cottage perfect for a peaceful getaway. Enjoy the charm of a traditional home.", price: "$1000/month" },
        { id: 7, name: "Urban Studio", image: "https://source.unsplash.com/random/800x600?urban", description: "A compact studio in the bustling downtown area. Ideal for city lovers and busy professionals.", price: "$750/month" },
        { id: 8, name: "Family House", image: "https://source.unsplash.com/random/800x600?house", description: "A spacious 3-bedroom house with a backyard. Perfect for families looking for a comfortable home.", price: "$1800/month" },
        { id: 9, name: "Seaside Apartment", image: "https://source.unsplash.com/random/800x600?beach", description: "A beautiful apartment with ocean views. Wake up to the sound of waves every morning.", price: "$1300/month" },
        { id: 10, name: "Mountain Retreat", image: "https://source.unsplash.com/random/800x600?mountain", description: "A cozy cabin in the mountains. Ideal for nature lovers and those seeking tranquility.", price: "$1100/month" }
    ];

    // Populate rooms grid
    if (roomsContainer) {
        rooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.className = 'room-card';
            roomCard.innerHTML = `
                <img src="${room.image}" alt="${room.name}" class="room-image">
                <div class="room-info">
                    <h3>${room.name}</h3>
                    <p class="room-price">${room.price}</p>
                </div>
            `;
            roomCard.addEventListener('click', () => openModal(room));
            roomsContainer.appendChild(roomCard);
        });
    }

    // Modal functionality
    function openModal(room) {
        modalTitle.textContent = room.name;
        modalImage.src = room.image;
        modalImage.alt = room.name;
        modalDescription.textContent = room.description;
        modalPrice.textContent = room.price;
        modal.style.display = "block";
    }

    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = "none";
        }
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Rent button functionality
    if (rentButton) {
        rentButton.addEventListener('click', () => {
            const roomName = modalTitle.textContent;
            alert(`You've requested to rent: ${roomName}. Our team will contact you shortly to complete the booking process.`);
            modal.style.display = "none";
        });
    }
});