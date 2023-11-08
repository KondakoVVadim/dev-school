function landPerimeter(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  let perimeter = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr[i][j] === 'X') {
        perimeter += 4; 

        if (i > 0 && arr[i - 1][j] === 'X') {
          perimeter--; // Subtract 1 for the top side.
        }
        if (i < rows - 1 && arr[i + 1][j] === 'X') {
          perimeter--; 
        if (j > 0 && arr[i][j - 1] === 'X') {
          perimeter--; 
        }
        if (j < cols - 1 && arr[i][j + 1] === 'X') {
          perimeter--; 
        }
      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}}
