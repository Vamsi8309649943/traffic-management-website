// Create and append elements dynamically
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.lineHeight = "1.6";
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.color = "#333";
document.body.style.margin = "0";

// Header
const header = document.createElement("header");
header.style.backgroundColor = "#4CAF50";
header.style.color = "white";
header.style.padding = "1em 0";
header.style.textAlign = "center";

const h1 = document.createElement("h1");
h1.textContent = "Traffic Management System";
header.appendChild(h1);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.justifyContent = "center";
["Dashboard", "Routes", "Alerts", "Contact"].forEach(text => {
    const li = document.createElement("li");
    li.style.margin = "0 15px";
    const a = document.createElement("a");
    a.href = `#${text.toLowerCase()}`;
    a.textContent = text;
    a.style.color = "white";
    a.style.textDecoration = "none";
    a.style.fontWeight = "bold";
    li.appendChild(a);
    ul.appendChild(li);
});
nav.appendChild(ul);
header.appendChild(nav);
document.body.appendChild(header);

// Section: Dashboard
const dashboard = document.createElement("section");
dashboard.id = "dashboard";
dashboard.style.padding = "20px";
dashboard.style.margin = "20px 0";

const h2Dashboard = document.createElement("h2");
h2Dashboard.textContent = "Traffic Dashboard";
h2Dashboard.style.marginBottom = "15px";
h2Dashboard.style.color = "#4CAF50";
dashboard.appendChild(h2Dashboard);

const pDashboard = document.createElement("p");
pDashboard.textContent = "Real-time traffic updates and alerts.";
dashboard.appendChild(pDashboard);

const trafficMap = document.createElement("div");
trafficMap.className = "traffic-map";
trafficMap.style.backgroundColor = "#e2e2e2";
trafficMap.style.padding = "50px";
trafficMap.style.textAlign = "center";
trafficMap.style.border = "1px solid #ccc";
trafficMap.style.marginTop = "10px";
trafficMap.textContent = "Map will be displayed here.";
dashboard.appendChild(trafficMap);

document.body.appendChild(dashboard);

// Section: Routes
const routes = document.createElement("section");
routes.id = "routes";
routes.style.padding = "20px";
routes.style.margin = "20px 0";

const h2Routes = document.createElement("h2");
h2Routes.textContent = "Plan Your Route";
h2Routes.style.marginBottom = "15px";
h2Routes.style.color = "#4CAF50";
routes.appendChild(h2Routes);

const form = document.createElement("form");
form.id = "routeForm";

const labelStart = document.createElement("label");
labelStart.htmlFor = "start";
labelStart.textContent = "Start:";
form.appendChild(labelStart);

const inputStart = document.createElement("input");
inputStart.type = "text";
inputStart.id = "start";
inputStart.name = "start";
inputStart.placeholder = "Enter starting location";
inputStart.style.marginBottom = "10px";
inputStart.style.padding = "10px";
inputStart.style.border = "1px solid #ccc";
inputStart.style.borderRadius = "5px";
form.appendChild(inputStart);

const labelDestination = document.createElement("label");
labelDestination.htmlFor = "destination";
labelDestination.textContent = "Destination:";
form.appendChild(labelDestination);

const inputDestination = document.createElement("input");
inputDestination.type = "text";
inputDestination.id = "destination";
inputDestination.name = "destination";
inputDestination.placeholder = "Enter destination";
inputDestination.style.marginBottom = "10px";
inputDestination.style.padding = "10px";
inputDestination.style.border = "1px solid #ccc";
inputDestination.style.borderRadius = "5px";
form.appendChild(inputDestination);

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Find Route";
button.style.padding = "10px";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.cursor = "pointer";
button.style.fontSize = "16px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#45a049";
});
button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#4CAF50";
});
form.appendChild(button);

routes.appendChild(form);

const routeResult = document.createElement("div");
routeResult.id = "routeResult";
routeResult.style.marginTop = "20px";
routeResult.style.color = "#4CAF50";
routeResult.style.fontWeight = "bold";
routes.appendChild(routeResult);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const start = inputStart.value;
    const destination = inputDestination.value;

    if (start && destination) {
        routeResult.textContent = `Finding the best route from ${start} to ${destination}...`;
    } else {
        routeResult.textContent = 'Please enter both start and destination locations.';
    }
});

document.body.appendChild(routes);

// Section: Alerts
const alerts = document.createElement("section");
alerts.id = "alerts";
alerts.style.padding = "20px";
alerts.style.margin = "20px 0";

const h2Alerts = document.createElement("h2");
h2Alerts.textContent = "Traffic Alerts";
h2Alerts.style.marginBottom = "15px";
h2Alerts.style.color = "#4CAF50";
alerts.appendChild(h2Alerts);

const ulAlerts = document.createElement("ul");

["Road closure on XYZ street until 6 PM.", "Heavy traffic on ABC avenue due to an accident."].forEach(alertText => {
    const liAlert = document.createElement("li");
    liAlert.textContent = alertText;
    ulAlerts.appendChild(liAlert);
});
alerts.appendChild(ulAlerts);

document.body.appendChild(alerts);

// Footer
const footer = document.createElement("footer");
footer.id = "contact";
footer.style.backgroundColor = "#333";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "10px 0";
footer.style.marginTop = "20px";

const pContact = document.createElement("p");
pContact.textContent = "Contact us at traffic@management.com";
footer.appendChild(pContact);

const pCopyright = document.createElement("p");
pCopyright.textContent = "© 2024 Traffic Management";
footer.appendChild(pCopyright);

document.body.appendChild(footer);
