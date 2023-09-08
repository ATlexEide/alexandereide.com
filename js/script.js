const currentDate = new Date();
document.querySelector('footer').textContent = `\u00A9 ${currentDate.getFullYear()} | Alexander Eide`

function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
document.getElementById('myAge').textContent = `${getAge('March 31, 2002')}`;