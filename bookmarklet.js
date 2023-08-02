var currentversion = "b-3";

// Checks if page isn't already 'https://google.com/Booklix/'
if (location.host !== "google.com" || !location.pathname.startsWith("/Bookmarklets")) {
    location.href = "https://google.com/Bookmarklets";
    alert("Re-run this bookmarklet")
}

// Checks for updates
const url = 'https://raw.githubusercontent.com/MythicalTrashcan/Myths-Bookmarklets/main/Version%20ID';
const version = await fetch(url);
const data = (await version.text()).replace(/\n+/g, '');

if (currentversion != data) {
    alert("Outated Bookmarklet!");
}

// The actual bookmarklet

// Creates blank page
window.document.write(
    "<html>\n <body>\n <h1></h1>"
)

// Just some text
let title = document.createElement('h1');
title.id = 'title';
title.innerHTML = '<p>Bookmarklets</p>';
title.style = 'text-align: center; color: orange; font-size: 80px; margin-bottom: -80px;';
document.body.appendChild(title);

let p = document.createElement('p');
p.id = 'patience';
p.innerHTML = '<p>Patience. This is not ready yet.</p>';
p.style = 'text-align: center; color: blue; font-size: 40px;';
document.body.appendChild(p);

// Inspect Element #1
let inspect = document.createElement('h3');
inspect.id = 'inspect';
inspect.innerHTML = '<h3>Inspect Element</h3>';
inspect.style = 'font-size: 35px; text-align: center';
document.body.appendChild(inspect);

// Goofy
let goofy = document.createElement('p');
goofy.id = 'goofy';
goofy.innerHTML = '<p>Mr. Raychouni is a very bussin teacher';
goofy.style = 'text-align: center; font-size: 3px; margin-top: 575px;';
document.body.appendChild(goofy);