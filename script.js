// Fonction pour valider le formulaire de contact
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour la validation

    var nom = document.querySelector("input[type='text']").value;
    var email = document.querySelectorAll("input[type='text']")[1].value;

    // Vérifier si tous les champs sont remplis
    if (nom === "" || email === "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        alert("Merci pour votre inscription.");
        document.querySelector("form").reset(); // Réinitialiser le formulaire après soumission
    }
});

// Fonction pour l'effet de défilement fluide au clic sur "En Savoir Plus"
document.querySelector("button").addEventListener("click", function() {
    document.querySelector("#fonctionalite").scrollIntoView({
        behavior: "smooth"
    });
});