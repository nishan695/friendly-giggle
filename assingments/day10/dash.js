// STUDENT DATA
let students = JSON.parse(localStorage.getItem("students")) || [];

// GET HTML ELEMENTS

const table = document.getElementById("studentTable");

const studentCount =
    document.getElementById("studentCount");

const pendingCount =
    document.getElementById("pendingCount");

const modal =
    document.getElementById("studentModal");

const addStudentBtn =
    document.getElementById("addStudentBtn");

const closeModal =
    document.getElementById("closeModal");

const form =
    document.getElementById("studentForm");

const searchInput =
    document.getElementById("searchInput");

const themeBtn =
    document.getElementById("themeBtn");

const clearBtn =
    document.getElementById("clearBtn");

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.querySelector(".sidebar");

// DISPLAY STUDENTS

function displayStudents(data = students) {

    table.innerHTML = "";

    data.forEach(function(student) {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>#${student.id}</td>
            <td>
                <strong>${student.name}</strong>
            </td>
            <td>
                ${student.email}
            </td>
            <td>
                ${student.course}
            </td>
            <td>
                ${student.attendance}%
            </td>

            <td>
                <span class="${
                    student.fee === "Paid"
                    ? "status-paid"
                    : "status-pending"
                }">
                    ${student.fee}
                </span>
            </td>
        `;

        table.appendChild(row);

    });

    updateStatistics();

}
// UPDATE STATISTICS

function updateStatistics() {

    studentCount.textContent =
        students.length;

    const pending =
        students.filter(function(student) {

            return student.fee === "Pending";

        });

    pendingCount.textContent =
        pending.length;

}
// OPEN MODAL

addStudentBtn.addEventListener("click", function() {

    modal.style.display = "flex";

});
// CLOSE MODAL

closeModal.addEventListener("click", function() {

    modal.style.display = "none";

});

// ADD STUDENT

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const course =
        document.getElementById("course").value;

    const attendance =
        document.getElementById("attendance").value;

    const fee =
        document.getElementById("fee").value;

    const newStudent = {

        id: students.length + 1,
        name: name,
        email: email,
        course: course,
        attendance: attendance,
        fee: fee
    };

    students.push(newStudent);

    // SAVE TO LOCAL STORAGE

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    displayStudents();

    form.reset();

    modal.style.display = "none";
});
// SEARCH
searchInput.addEventListener("input", function() {

    const search =
        searchInput.value.toLowerCase();

    const filtered =
        students.filter(function(student) {

            return (

                student.name
                    .toLowerCase()
                    .includes(search)

                ||

                student.email
                    .toLowerCase()
                    .includes(search)

                ||

                student.course
                    .toLowerCase()
                    .includes(search)

            );

        });
    displayStudents(filtered);

});
// DARK MODE
themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";
    }
});
// CLEAR ALL

clearBtn.addEventListener("click", function() {

    const confirmDelete =
        confirm("Delete all students?");

    if (confirmDelete) {

        students = [];

        localStorage.removeItem("students");

        displayStudents();
    }
});
// MOBILE MENU
menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show");
});
// INITIAL DISPLAY 
displayStudents();