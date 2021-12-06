import { handleSubmit } from "./js/formHandler";

console.log("Hello from Webpack!", { handleSubmit });

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

function main() {
    const formElement = document.getElementById("form");

    formElement.addEventListener("submit", handleSubmit);

    if (process.env.NODE_ENV === "production") {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", function () {
                navigator.serviceWorker.register("/service-worker.js").then(
                    function (registration) {
                        // Registration was successful
                        console.log(
                            "ServiceWorker registration successful with scope: ",
                            registration.scope
                        );
                    },
                    function (err) {
                        // registration failed :(
                        console.log("ServiceWorker registration failed: ", err);
                    }
                );
            });
        }
    }
}

main();
