// ================= DRAWER =================

const drawer = document.getElementById("drawer");

const overlay = document.getElementById("overlay");

const menuBtn = document.getElementById("menuBtn");

const closeBtn = document.getElementById("closeBtn");


// OPEN DRAWER

menuBtn.addEventListener("click", function () {

    drawer.classList.add("show");

    overlay.classList.add("show");

});


// CLOSE DRAWER

closeBtn.addEventListener("click", function () {

    drawer.classList.remove("show");

    overlay.classList.remove("show");

});


// CLICK OUTSIDE

overlay.addEventListener("click", function () {

    drawer.classList.remove("show");

    overlay.classList.remove("show");

});


// CLOSE AFTER CLICKING MENU ITEM

const links = document.querySelectorAll(".drawer a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        drawer.classList.remove("show");

        overlay.classList.remove("show");

    });

});


// ================= DARK MODE =================

const darkBtn =
    document.getElementById("darkBtn");

const darkToggle =
    document.getElementById("darkToggle");


function toggleDarkMode() {

    document.body.classList.toggle("dark");

}


// Top dark mode button

darkBtn.addEventListener(
    "click",
    toggleDarkMode
);


// Settings checkbox

darkToggle.addEventListener(
    "change",
    toggleDarkMode
);


// ================= ADD STUDENT =================

const modal =
    document.getElementById("modal");

const addBtn =
    document.getElementById("addBtn");

const modalClose =
    document.getElementById("modalClose");

const form =
    document.getElementById("studentForm");

const table =
    document.getElementById("studentTable");


// OPEN MODAL

addBtn.addEventListener("click", function () {

    modal.style.display = "flex";

});


// CLOSE MODAL

modalClose.addEventListener("click", function () {

    modal.style.display = "none";

});


// ADD STUDENT

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const course =
        document.getElementById("course").value;

    const attendance =
        document.getElementById("attendance").value;

    const fee =
        document.getElementById("fee").value;


    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>New</td>

        <td>${name}</td>

        <td>${course}</td>

        <td>${attendance}%</td>

        <td>

            <span class="${
                fee === "Paid"
                    ? "paid"
                    : "pending"
            }">

                ${fee}

            </span>

        </td>

    `;


    table.appendChild(row);


    form.reset();

    modal.style.display = "none";

});


// ================= SEARCH =================

const search =
    document.getElementById("search");


search.addEventListener("input", function () {

    const value =
        search.value.toLowerCase();


    const rows =
        table.querySelectorAll("tr");


    rows.forEach(function (row) {

        const text =
            row.innerText.toLowerCase();


        if (text.includes(value)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});