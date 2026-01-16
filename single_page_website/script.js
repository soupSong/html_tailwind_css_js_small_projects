const myForm = document.getElementById('myForm');
const submitDialog = document.getElementById('submitDialog');
const confirmBtn = document.getElementById('confirmBtn');
const scrollTopBtn = document.getElementById("scrollTopBtn");

myForm.addEventListener('submit', function(event){
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

})

function closeDialog(){
    submitDialog.close()
    submitDialog.setAttribute("hidden", "");
}

function addRecommendation(){
    const nameElement = document.getElementById("name")
    const messageElement = document.getElementById("message")

    if (messageElement.value === ""){
        alert("Please enter some message")
        messageElement.focus()
        return
    }

    // let cardHtml = `<div class="border w-100 rounded-md p-2">
    //             <p class="italic">
    //             <span class="text-purple-800 font-bold">“</span>
    //             ${messageElement.value}
    //             <span class="text-purple-800 font-bold">”</span>
    //             </p>

    //          </div>`

    const cards_box = document.getElementById("recommendation-cards")
    // cards_box.innerHTML += cardHtml;

    // MORE CORRECT METHOD
    const card = document.createElement("div");
    card.className = "border w-100 rounded-md p-2";
    card.innerHTML = `
    <p class="italic">
        <span class="text-purple-800 font-bold">“</span>
        ${messageElement.value}
        <span class="text-purple-800 font-bold">”</span>
    </p>
    `;

    cards_box.appendChild(card);
    

    nameElement.value = ""
    messageElement.value = ""

    // Show the dialog modally (blocks interaction with the rest of the page)
    submitDialog.removeAttribute("hidden");
    submitDialog.showModal();
}

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});