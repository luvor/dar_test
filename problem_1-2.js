function color_pattern_times(arr) {
  const cp = 1; // change pencil
  const cs = 2; // color square
  let count = 2;
  for (let i = 1; i < arr.length; i++) {
    count += cs;
    if (arr[i - 1] !== arr[i]) {
      count += cp;
    }
    // console.log(`secs: ${count}, color: ${arr[i]}`);
  }
  return count;
}

// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]);
// color_pattern_times(["Red", "Yellow", "Green", "Blue"]);
// color_pattern_times(["Blue"]);
// color_pattern_times(["Blue", "Blue", "Blue", "Red", "Red", "Red"]);

function plant(ftype, w, f, t) {
  let fl = "-".repeat(w) + String(ftype).repeat(f);
  if (t >= 20 && t <= 30) {
    return fl.repeat(w);
  } else {
    fl = "-".repeat(w).repeat(w) + ftype;
    return fl;
  }
}

// plant("@", 3, 3, 25)
// "---@@@---@@@---@@@"

// plant("#", 1, 5, 30)
// "-#####"

// plant("&", 5, 1, 20)
// "-----&-----&-----&-----&-----&"

// plant("§", 3, 3, 15)
// "---------§"
