constincrement = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const countLabel = document.getElementById("countlabel");
let count = 0;

increment.addEventListener("click", () => {
    count++;
    countLabel.textContent = count;
}); 
decrement.addEventListener("click", () => {
    count--;
    countLabel.textContent = count;
});
reset.addEventListener("click", () => {
    count = 0;
    countLabel.textContent = count;
});
