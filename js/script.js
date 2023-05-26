kasse = [
    femhundre = 500 * 6,
    tohundre = 200 * 9,
    hundre = 100 * 15,
    femti = 50 * 7,
    tjue = 20 * 14,
    ti = 10 * 27,
    fem = 5 * 30,
    en = 1 * 48]
let iKasse = kasse.reduce((acc, curr) => { return acc + curr }, 0);
oppgjør = iKasse - 1500;

console.log(kasse);
console.log(iKasse);
console.log(oppgjør)

function test() {
    thousand = Math.floor(oppgjør / 1000)
    console.log(`1000: ${thousand}`)
    oppgjør = oppgjør - 1000 * thousand

    fiveHundred = Math.floor(oppgjør / 500)
    console.log(`500: ${fiveHundred}`)
    oppgjør = oppgjør - 500 * fiveHundred

    twoHundred = Math.floor(oppgjør / 200)
    console.log(`200: ${twoHundred}`)
    oppgjør = oppgjør - 200 * twoHundred

    hundred = Math.floor(oppgjør / 100)
    console.log(`100: ${hundred}`)
    oppgjør = oppgjør - 100 * twoHundred

    fifty = Math.floor(oppgjør / 50)
    console.log(`50: ${fifty}`)
    oppgjør = oppgjør - 50 * fifty

    tjue = Math.floor(oppgjør / 20)
    console.log(`20: ${tjue}`)
    oppgjør = oppgjør - 20 * tjue

    ti = Math.floor(oppgjør / 10)
    console.log(`10: ${ti}`)
    oppgjør = oppgjør - 10 * ti

    fem = Math.floor(oppgjør / 5)
    console.log(`5: ${fem}`)
    oppgjør = oppgjør - 5 * fem

    en = Math.floor(oppgjør / 1)
    console.log(`1: ${en}`)
    oppgjør = oppgjør - 1 * en
    console.log(oppgjør)
}

test()