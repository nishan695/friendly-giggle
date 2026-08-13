const form = document.getElementById("enrollmentForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        course: document.getElementById("course").value
    };

    // Get existing data
    let enrollments = JSON.parse(
        localStorage.getItem("enrollments")
    ) || [];

    // Add new enrollment
    enrollments.push(data);

    // Save all enrollments
    localStorage.setItem(
        "enrollments",
        JSON.stringify(enrollments)
    );

    alert("Enrollment saved!");

    form.reset();
});