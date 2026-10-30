fetch("./footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du footer");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error(error));