// Get references to the sections and buttons
const orderFormContainer = document.getElementById('orderFormContainer');
const orderDetailsSection = document.getElementById('orderDetailsSection');
const orderTableBody = document.getElementById('orderTable').querySelector('tbody');
const backToOrderButton = document.getElementById('backToOrder');
const homeLink = document.getElementById('homeLink');
const menuLink = document.getElementById('menuLink');
const menuSection = document.getElementById('menuSection');

// Show Place Your Order form
function showOrderForm() {
    orderFormContainer.style.display = 'block';
    orderDetailsSection.style.display = 'none';
    menuSection.style.display = 'none';
}

// Show Order Details
function showOrderDetails() {
    orderFormContainer.style.display = 'none';
    orderDetailsSection.style.display = 'block';
    menuSection.style.display = 'none';
}

// Show Menu Section
function showMenuSection() {
    menuSection.style.display = 'block';
    orderFormContainer.style.display = 'none';
    orderDetailsSection.style.display = 'none';
}

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;
    const customizations = [];
    if (document.getElementById('extraCheese').checked) customizations.push('Extra Cheese');
    if (document.getElementById('noOnions').checked) customizations.push('No Onions');
    const additionalInstructions = document.getElementById('additionalInstructions').value;

    const row = `
        <tr>
            <td>${itemName}</td>
            <td>${quantity}</td>
            <td>${customizations.join(', ') || 'None'}<br>${additionalInstructions}</td>
            <td><span class="status pending">Pending</span></td>
        </tr>
    `;
    orderTableBody.insertAdjacentHTML('beforeend', row);

    showOrderDetails();
});

// Handle Back Button
backToOrderButton.addEventListener('click', showOrderForm);

// Handle Navigation Links
homeLink.addEventListener('click', showOrderForm);
menuLink.addEventListener('click', showMenuSection);
