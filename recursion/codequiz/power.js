function power(base, expo) {
  if (expo === 0) return 1;

  return base * power(base, expo - 1);
}

console.log(power(2, 4));
console.log(power(2, 3));
console.log(power(2, 2));
console.log(power(2, 1));
console.log(power(2, 0));
