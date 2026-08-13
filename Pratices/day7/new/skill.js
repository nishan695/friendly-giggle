const form = document.getElementById("enrollmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const course = document.getElementById("course").value;
    const education = document.getElementById("education").value;
    const source = document.getElementById("source").value;


    const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        course: course,
        education: education,
        source: source
    };


    localStorage.setItem(
        "enrollmentData",
        JSON.stringify(data)
    );


    alert("Form submitted successfully!");

});