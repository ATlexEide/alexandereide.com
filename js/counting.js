let register = [];
// valuta
let money = [
    document.getElementById('1000'),
    document.getElementById('500'),
    document.getElementById('200'),
    document.getElementById('100'),
    document.getElementById('50'),
    document.getElementById('20'),
    document.getElementById('10'),
    document.getElementById('5'),
    document.getElementById('1')
]
// Push value of input to register as an object
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    register = []
    for (let i = 0; i < money.length; i++) {
        if (money[i].value > 0) { register.push({ id: money[i].id, amount: money[i].value, total: money[i].id * money[i].value }) }
    }
    console.log(register)
    // Sum total in register
    const registerSum = register.reduce((total, register) => {
        return total + register.total
    }, 0)
    document.getElementById('registerSum').textContent = `Sum in register: ${registerSum}`;
    // Get amount to remove
    let oppgjør = registerSum - 1500;
    document.getElementById('rmSum').textContent = `Remove: ${oppgjør}`;
    // Get what to remove
});

