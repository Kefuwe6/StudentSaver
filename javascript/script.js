function getBestPrice(prices){
    return Math.min(...Object.values(prices));
}

function initSharing(){
    document.addEventListener("click", function(e){
        if(e.target.classList.contains("share-btn")){
            const name = e.target.getAttribute("data-name");
            const msg = `Check Out This Deal On StudentSaver: ${name}`;
            const url = window.location.href;
            window.open(
                `https://wa.me/?text=${encodeURIComponent(msg + " " + url)}`,
                "_blank"
            );
        }
    });
}

initSharing();

// ================= SEARCH BAR =================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    const productCards = document.querySelectorAll(".product-card");

    searchInput.addEventListener("keyup", function () {

        const searchText = searchInput.value.toLowerCase();

        productCards.forEach(function(card) {

            const productTitle = card
                .querySelector(".product-title")
                .textContent
                .toLowerCase();

            if (productTitle.includes(searchText)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


function getPrice(value){
    // removes R, spaces, and converts to number safely
    return parseFloat(value.replace(/[^0-9.]/g, ""));
}

function getPrice(value){
    return parseFloat(value.replace(/[^0-9.]/g, ""));
}

function markBestDeals(){

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        // ✅ FIX 1: correct selector
        const rows = product.querySelectorAll("tbody tr");

        if(rows.length === 0) return;

        let lowestPrice = Infinity;
        let bestRow = null;

        // STEP 1: find lowest price
        rows.forEach(row => {

            const priceCell = row.children[1];
            const price = getPrice(priceCell.innerText);

            if(price < lowestPrice){
                lowestPrice = price;
                bestRow = row;
            }

        });

        // STEP 2: highlight best row
        if(bestRow){

            bestRow.style.backgroundColor = "#c8e6c9";

            const statusCell = bestRow.children[2];

            statusCell.innerText = "Best Deal";
            statusCell.style.fontWeight = "bold";
            statusCell.style.color = "#2e7d32";

        }

    });

}

// run after page loads
document.addEventListener("DOMContentLoaded", markBestDeals);