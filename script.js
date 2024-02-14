let usersWrap = document.querySelector('.users');
const userType = document.querySelectorAll('nav ul li');

userType.forEach((user) => { 
    user.addEventListener('click', (event) => {
        userType.forEach((user) => {
            user.classList.remove('active');
        });

        event.currentTarget.classList.add('active');
    });
});

let usersList = [
    {
        id: 1,
        name: 'Lelah Nichols',
        location: 'Troy, MI',
        image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
        tag: ['clothes', 'stem'],
    },
    {
        id: 2,
        name: 'Jesus Weiss',
        location: 'Fort Worth, TX',
        image: "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=600",
        tag: ['headset', 'gadget', 'speed', 'winter'],
    },
    {
        id: 3,
        name: 'Annie Rice',
        location: 'Austin, TX',
        image: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=600",
        tag: ['road', 'mountain', 'trip', 'earth', 'nature'],
    },
    {
        id: 4,
        name: 'Robert Brower',
        location: 'Cincinnati, CH',
        image: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=600",
        tag: ['Maintenance', 'gears', 'frames', 'repair'],
    },
    {
        id: 5,
        name: 'Amy Campbell',
        location: 'Warrior, AL',
        image: "https://images.vestiairecollective.com/cdn-cgi/image/w=1246,q=75,f=auto,/produit/green-cotton-free-people-jacket-26216227-8_2.jpg",
        tag: ['music', 'disks'],
    },
    {
        id: 6,
        name: 'Anthony S. Morin',
        location: 'Lyndhurst, NJ',
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
        tag: ['vintage', 'electgric'],
    },
];

let users = [];
function initApp() {
    usersList.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('user');
        if (key === 1) {
            newDiv.classList.add('active');
        }

        newDiv.innerHTML = `
        <img src="${value.image}" alt="user img">
        <div class="details">
            <h4 class="name">${value.name}</h4>
            <p class="location">${value.location}</p>
            <div class="tag">
                ${value.tag && value.tag.length ? value.tag.map(tagValue => `<span>${tagValue}</span>`).join('') : ''}
            </div>
        </div>
        `
        usersWrap.appendChild(newDiv);
    });
}

initApp();

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const users = document.querySelectorAll('.user');
    
    users.forEach(person => {
        person.addEventListener('click',  ()=> {
            users.forEach(u => u.classList.remove('active'));

            person.classList.add('active');
        })
    })

     searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        users.forEach(user => {
            const name = user.querySelector('.name').textContent.toLowerCase();

            if (name.includes(searchTerm)) {
                user.style.display = 'block';
            } else {
                user.style.display = 'none';
            }
        });
    });

});
