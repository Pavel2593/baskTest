// [JS] Напишите JS функцию, которая преобразует email вида some @email.ru в деперсонализированный формат s *********** u
// Функция должна заменить все символы кроме первого и последнего на звездочки


const showEmail = (email) => {
    const emailLenght = email.length
    const firstSymbol = email[0]
    const lastSymbol = email[emailLenght -1]

    const result = firstSymbol + '*'.repeat(emailLenght -2) + lastSymbol
    return result
}

console.log(showEmail('shket97@yandex.ru'))