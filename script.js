function toggleMenu() {
    const menu = document.getElementById('menuDialog');
    menu.classList.toggle('open');
}

function openProfile() {
    const modal = document.getElementById('profileModal');
    modal.style.display = "flex";
}

function closeMenu() {
    const modal = document.getElementById('menuDialog');
    modal.style.display = "none";
} //TODO FIX THIS

function closeProfile() {
    const modal = document.getElementById('profileModal');
    modal.style.display = "none";
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Enter correct details!!');
});

function setProfileImage(imageUrl) {
    const profileImage = document.getElementById('profileImage');

    if (imageUrl) {
        profileImage.src = imageUrl;
    } else {
        profileImage.src = "/test draft/media/defaultprofile.png";
    }
}
setProfileImage("");