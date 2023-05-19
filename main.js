/**
 * Get website from url, eg:
 * 
 * twitter.lucas.am -> twitter
 * youtube.lucas.am -> youtube
 */
const getWebsite = () => {
    const url = window.location.hostname;
    const website = url.split('.')[0];
    return website;
}

const getWebsiteName = (website) => {
    return website || 'this website';
}

const revealText = () => {
    document.getElementById('question').classList.remove('opacity-0');
    document.getElementById('question').classList.remove('opacity-0');
}

const updateWebsite = () => {
    const website = getWebsite();
    document.getElementById('site-name').innerHTML = getWebsiteName(website);

    // After 10 seconds, reveal the text
    setTimeout(revealText, 1000 * 10)
}

// on website load, set the background color
document.addEventListener('DOMContentLoaded', updateWebsite);
