import "./styles.css";

function getFiboLinear(n) {
  let a = 0;
  let b = 1;
  let temp;
  const output = [];
  output.push(a);
  output.push(b);

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;

    output.push(temp);
  }
  if (n === 0) return "0";
  if (n === 1) return "0,1";

  return output.join(",");
}

function getFiboRecursive(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const seq = getFiboRecursive(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);

  return seq;
}

function getFiboRecursiveMemo(n, memo = {}) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  if (memo[n]) return memo[n];

  const prevSeq = getFiboRecursive(n - 1);
  const newSeq = [...prevSeq];

  newSeq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  memo[n] = newSeq;

  return newSeq;
}

function getFiboTabulated(n) {
  if (n <= 1) return n;

  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

function getFiboTabulatedSpace(n) {
  if (n <= 1) return n;

  let prev2 = 0;
  let prev1 = 1;

  for (let i = 2; i <= n; i++) {
    let current = prev2 + prev1;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>

<h1>getFibo ${getFiboLinear(5)}</h1>
<h1>getFiboRecursive ${getFiboRecursive(5)}</h1>
<h1>getFiboRecursiveMemo ${getFiboRecursive(5)}</h1>

<h1>getFiboTabulated ${getFiboTabulated(6)}</h1>
<h1>getFiboTabulatedSpace ${getFiboTabulatedSpace(6)}</h1>
`;
