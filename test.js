let i = 10;
while (i != 0) {
    if (i === 10) { para.textContent = `Countdown ${i}`; }
    else if (i <= 10 && i >= 0) { console.log(`${i}`); }
    else if (i === 0) { console.log(`Blast off!`); }
    else { console.log(`Error`;) }
    i--
}
