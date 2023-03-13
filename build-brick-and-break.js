/**
 * Build a wall of bricks, one brick every 100 milliseconds, until the wall is n bricks high.
 * @param n - the number of bricks to build
 */
function build(n) {
    let body = document.getElementsByTagName("body")[0];
    let bricks = 1;
    let interval = setInterval(() => {
        let brick = document.createElement("div");
        brick.setAttribute("id", "brick-" + bricks);
        bricks % 3 === 2 ? (brick.dataset.foundation = true) : null;
        body.appendChild(brick);
        bricks++;
        if (bricks > n) {
            clearInterval(interval);
        }
    }, 100);
}
/* Taking in an array of ids and then iterating over them. For each id, it is getting the element with
that id and then checking if it has the attribute "foundation". If it does, it sets the data
attribute "repaired" to "in progress". If it does not, it sets the data attribute "repaired" to
true. */
function repair(...ids) {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        brick.getAttribute("foundation")
            ? (brick.dataset.repaired = "in progress")
            : (brick.dataset.repaired = true);
    });
}
/**
 * Remove the last div element from the DOM.
 */
function destroy() {
    let bricks = document.getElementsByTagName("div");
    bricks[bricks.length - 1].remove();
}
export { build, repair, destroy };