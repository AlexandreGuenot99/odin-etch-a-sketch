const gridContainer = document.querySelector("#grid-container");

for(let i=0; i<5;i++ ){
    for(let j=0; j<5;j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", () => 
        { square.classList.toggle("active"); });
        gridContainer.appendChild(square);
    }
}
