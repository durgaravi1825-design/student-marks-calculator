function calculate() {
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    let total = m1 + m2 + m3;
    let avg = total / 3;

    document.getElementById("result").innerText =
        "Total: " + total + " | Average: " + avg.toFixed(2);
}