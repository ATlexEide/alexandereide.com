const version = '0.4.6';
document.getElementById('stylesheet').href = `../css/countingUi.css?v=${version}`;
document.getElementById('js').src = `../js/counting.js?v=${version}`;
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
        // Empty textfield for items to remove
        document.getElementById(`rm${money[i].id}`).textContent = ''
        document.getElementById(`mynt`).textContent = ''
        // Add object to register
        if (money[i].value > 0 && money[i].id >= 50) { register.push({ id: money[i].id, isCoin: false, amount: money[i].value, total: money[i].id * money[i].value }) }
        if (money[i].value > 0 && money[i].id < 50) { register.push({ id: money[i].id, isCoin: true, amount: money[i].value, total: money[i].id * money[i].value }) }
    }
    // Sum total in register
    const registerSum = register.reduce((total, register) => {
        return total + register.total
    }, 0)
    document.getElementById('registerSum').textContent = `Sum in register: ${registerSum}`;
    // Get amount to remove
    let oppgjør = registerSum - 1500;
    document.getElementById('rmSum').textContent = `Remove: ${oppgjør}`;
    // Get what to remove
    let coins = []
    for (let i = 0; i < register.length; i++) {

        const cashId = register[i].id;
        const cashAmount = register[i].amount;
        const textField = document.getElementById(`rm${cashId}`);
        ////////////////////
        let takeOut = Math.floor(oppgjør / cashId);
        if (takeOut > cashAmount) { takeOut = cashAmount }
        console.log(`cashID: ${cashId}  cashAmount: ${cashAmount}  takeOut: ${takeOut}`)
        if (takeOut > 0 && takeOut == cashAmount && !register[i].isCoin) { textField.textContent = `${cashId}: ALL(${takeOut}) = ${cashId * takeOut} kr` }
        else if (takeOut > 0 && !register[i].isCoin) { textField.textContent = `${cashId}: ${takeOut} = ${cashId * takeOut} kr` }
        else if (takeOut > 0 && register[i].isCoin) { coins.push(cashId * takeOut), textField.textContent = `${cashId}: ${takeOut} ` }
        oppgjør = oppgjør - takeOut * cashId;
    }
    const coinsSummed = coins.reduce((acc, curr) => {
        return acc + curr
    }, 0);
    if (coinsSummed > 0) { document.getElementById('mynt').textContent = `Mynt: ${coinsSummed}kr` }
});