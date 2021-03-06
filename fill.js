Bitmap.prototype.fill = function (row, col, new_color) {
    const old_color = this.grid[row][col];
    if (old_color === new_color) return;
    this.setColor(row, col, new_color);
    var queue = [];
    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    //
    // Push the coordinates [row, col] onto the queue.
    queue.push([row, col]);
    // While the queue is not empty:
    while (queue.length) {
        //    Shift a pair of coordinates [r,c] off the front of the queue.
        queue.shift();
        //    The 4-connected neighbors are the cells above, below, left, and right.
        //    Check each of those 4 neighbors:
        /* left */
        if (this.grid[row][col - 1] === old_color) {
            this.grid[row][col - 1] = new_color;
            this.setColor(row, col - 1, new_color);
            queue.push([row, col - 1]);
        /* right */
        };
        if (this.grid[row][col + 1] === old_color) {
            this.grid[row][col + 1] = new_color;
            this.setColor(row, col + 1, new_color);
            queue.push([row, col + 1]);
        };
        /* up */
        if (this.grid[row - 1][col] === old_color) {
            this.grid[row - 1][col] = new_color;
            this.setColor(row - 1, col, new_color);
            queue.push([row - 1, col]);
        /* down */
        };
        if (this.grid[row + 1][col] === old_color) {
            this.grid[row + 1][col] = new_color;
            this.setColor(row + 1, col, new_color);
            queue.push([row + 1, col]);
        };

        //       If the neighbor is old_color:
        //          Set the neighbor to new_color.
        //          Add the neighbors coordinates to the queue
        //          (to ensure we later check its neighbors as well).
    };
}