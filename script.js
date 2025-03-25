const draggables = document.querySelectorAll(".draggable");
let draggedElement = null;

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        setTimeout(() => e.target.style.opacity = "0.5", 0);
    });

    draggable.addEventListener("dragend", (e) => {
        setTimeout(() => e.target.style.opacity = "1", 0);
        draggedElement = null;
    });

    draggable.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    draggable.addEventListener("drop", (e) => {
        if (draggedElement && draggedElement !== e.target) {
            let temp = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = temp;
        }
    });
});
