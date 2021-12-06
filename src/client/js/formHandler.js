import { checkForName } from "./nameChecker";

let url = "/test";
if (process.env.NODE_ENV === "development") {
    url = "http://localhost:8085/test";
}

export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    const isCaptain = checkForName(formText);
    if (isCaptain) {
        alert("Welcome, Captain!")
    }

    console.log("::: Form Submitted :::");
    fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ articleUrl: formText }) 
        })
        .then((raw) => raw.json())
        .then((response) => console.log({ response }));
}
