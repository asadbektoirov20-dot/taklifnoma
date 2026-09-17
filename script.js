// Shablonni tanlash funksiyasi
function selectTemplate(templateName) {
    document.getElementById('selectedTemplate').value = templateName;
    // Formaga silliq scroll qilish
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// Shaxsiy havola generatsiya qilish
function generateLink(event) {
    event.preventDefault();

    const names = document.getElementById('names').value.trim();
    const template = document.getElementById('selectedTemplate').value;
    
    // Ismdan URL uchun mos slug yasash (masalan: "Umar & Zuhra" -> "umar-zuhra")
    const slug = names.toLowerCase()
        .replace(/[^a-z0-9ğʻshchg'zh\s]/g, '')
        .replace(/\s+/g, '-');

    // Brauzerdagi domen nomiga qarab havola yasash
    const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    const personalLink = `${baseUrl}/invitation.html?to=${slug}&template=${encodeURIComponent(template)}`;

    // Natijani ko'rsatish
    document.getElementById('generatedLink').value = personalLink;
    document.getElementById('resultSection').classList.remove('hidden');
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}

// Havolani nusxalash
function copyLink() {
    const linkInput = document.getElementById('generatedLink');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // Mobil qurilmalar uchun
    navigator.clipboard.writeText(linkInput.value);
    alert("Havola nusxalandi: " + linkInput.value);
}