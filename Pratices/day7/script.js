// =========================
// GET ELEMENTS
// =========================

const nameInput = document.getElementById("name");

const numberInput = document.getElementById("number");

const expiryInput = document.getElementById("expiry");

const form = document.getElementById("cardForm");

const table = document.getElementById("cardTable");


// Card preview elements

const displayName =
    document.getElementById("displayName");

const displayNumber =
    document.getElementById("displayNumber");

const displayExpiry =
    document.getElementById("displayExpiry");


// =========================
// NAME PREVIEW
// =========================

nameInput.addEventListener("input", function () {

    if (this.value === "") {

        displayName.textContent = "YOUR NAME";

    } else {

        displayName.textContent =
            this.value.toUpperCase();

    }

});


// =========================
// CARD NUMBER PREVIEW
// =========================

numberInput.addEventListener("input", function () {

    // Remove anything except numbers

    let value =
        this.value.replace(/\D/g, "");


    // Maximum 16 numbers

    value =
        value.substring(0, 16);


    // Add space after every 4 numbers

    let formatted =
        value.match(/.{1,4}/g);


    if (formatted) {

        displayNumber.textContent =
            formatted.join(" ");

    } else {

        displayNumber.textContent =
            "0000 0000 0000 0000";

    }

});


// =========================
// EXPIRY PREVIEW
// =========================

expiryInput.addEventListener("input", function () {

    let value =
        this.value.replace(/\D/g, "");


    // Maximum 4 numbers

    value =
        value.substring(0, 4);


    // Add /

    if (value.length >= 3) {

        value =
            value.substring(0, 2)
            + "/"
            + value.substring(2);

    }


    this.value = value;


    if (value === "") {

        displayExpiry.textContent = "MM/YY";

    } else {

        displayExpiry.textContent = value;

    }

});


// =========================
// FORM SUBMIT
// =========================

form.addEventListener("submit", function (event) {

    // Prevent page refresh

    event.preventDefault();


    // Get values

    const name =
        nameInput.value;

    const number =
        numberInput.value;

    const expiry =
        expiryInput.value;


    // Create new table row

    const row =
        document.createElement("tr");


    // Name cell

    const nameCell =
        document.createElement("td");

    nameCell.textContent =
        name;


    // Number cell

    const numberCell =
        document.createElement("td");

    numberCell.textContent =
        number;


    // Expiry cell

    const expiryCell =
        document.createElement("td");

    expiryCell.textContent =
        expiry;


    // Action cell

    const actionCell =
        document.createElement("td");


    // Delete button

    const deleteButton =
        document.createElement("button");

    deleteButton.textContent =
        "Delete";

    deleteButton.className =
        "delete-btn";


    // Delete row

    deleteButton.addEventListener(
        "click",
        function () {

            row.remove();

        }
    );


    // Add button to cell

    actionCell.appendChild(
        deleteButton
    );


    // Add cells to row

    row.appendChild(nameCell);

    row.appendChild(numberCell);

    row.appendChild(expiryCell);

    row.appendChild(actionCell);


    // Add row to table

    table.appendChild(row);


    // Clear form

    form.reset();


    // Reset card preview

    displayName.textContent =
        "YOUR NAME";

    displayNumber.textContent =
        "0000 0000 0000 0000";

    displayExpiry.textContent =
        "MM/YY";

});