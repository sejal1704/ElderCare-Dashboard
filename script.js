// Function to show the relevant service section when clicked
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.service-content').forEach(function(content) {
      content.classList.add('hidden');
    });
  
    // Show the selected section
    document.getElementById(section).classList.remove('hidden');
  }
  
  // Function to populate Healthcare content
  function showHealthcareDetails() {
    const healthcareContent = `
      <h4>Pharma Stores</h4>
      <div class="card">
        <h5>Shop 1</h5>
        <p>Contact: 123-456-7890</p>
        <p><a href="https://shop1.com" target="_blank">Visit Shop 1</a></p>
      </div>
      <div class="card">
        <h5>Shop 2</h5>
        <p>Contact: 234-567-8901</p>
        <p><a href="https://shop2.com" target="_blank">Visit Shop 2</a></p>
      </div>
    `;
    document.getElementById("healthcare-details").innerHTML = healthcareContent;
  }
  
  // Function to populate Grocery content
  function showGroceryDetails() {
    const groceryContent = `
      <h4>Online Grocery Services</h4>
      <div class="card">
        <h5>Shop 1</h5>
        <p><a href="https://shop1groceries.com" target="_blank">Visit Shop 1</a></p>
      </div>
      <div class="card">
        <h5>Shop 2</h5>
        <p><a href="https://shop2groceries.com" target="_blank">Visit Shop 2</a></p>
      </div>
    `;
    document.getElementById("grocery-details").innerHTML = groceryContent;
  }
  
  // Function to populate Finance content
  function showFinanceDetails() {
    const financeContent = `
      <h4>National Schemes for Elderly</h4>
      <div class="card">
        <h5>Scheme 1</h5>
        <p>Details: Senior citizen pension scheme.</p>
        <p>Contact: 123-123-1234</p>
      </div>
      <div class="card">
        <h5>Scheme 2</h5>
        <p>Details: Health insurance for seniors.</p>
        <p>Contact: 234-234-2345</p>
      </div>
    `;
    document.getElementById("finance-details").innerHTML = financeContent;
  }
  
  // Function to show Dashboard content
  function showDashboard() {
    const dashboardContent = `
      <h3>User Dashboard</h3>
      <div id="account-details">
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>
      <div id="health-reports">
        <h4>Health Reports</h4>
        <div class="card">
          <p>Report 1: Blood Pressure</p>
          <p>Status: Normal</p>
        </div>
        <div class="card">
          <p>Report 2: Sugar Level</p>
          <p>Status: High</p>
        </div>
      </div>
    `;
    document.getElementById("dashboard").innerHTML = dashboardContent;
  }
  
  // Event listeners for buttons
  document.getElementById("healthcareButton").addEventListener("click", function() {
    showSection('healthcare');
    showHealthcareDetails(); // Show healthcare content
  });
  
  document.getElementById("groceryButton").addEventListener("click", function() {
    showSection('grocery');
    showGroceryDetails(); // Show grocery content
  });
  
  document.getElementById("financeButton").addEventListener("click", function() {
    showSection('finance');
    showFinanceDetails(); // Show finance content
  });
  
  document.getElementById("dashboardButton").addEventListener("click", function() {
    showSection('dashboard');
    showDashboard(); // Show dashboard content
  });
  