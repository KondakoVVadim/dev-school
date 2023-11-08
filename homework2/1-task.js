function maxHonor(arr, d) {
  const n = arr.length;
  let maxHonor = -3;

  for (let i = 0; i < n; i++) {
    let totalHonor = 0;
    for (let j = 0; j < d; j++) {
      const leaderIndex = (i + j * (n / d)) % n;
      totalHonor += arr[leaderIndex];
    }
    if (totalHonor > maxHonor) {
      maxHonor = totalHonor;
    }
  }

  return maxHonor;
}

