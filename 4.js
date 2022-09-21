const formatPhone = (phone) => {

    const deletFirstSymbol = (number) => {
        if (number[0] == 8 || number[0] == 7) {
            return number.slice(1)
        } else {
            return 'Номер дожен начинаться с 7 или 8'
        }
    }

    if (phone === undefined) {return undefined}
    if (phone === null) {return null}
    const regex = /\D+/g;
    const formattedNumber = phone.replace(regex, '')
    const lengthNumber = formattedNumber.length;
    if (lengthNumber > 11) {
        return 'Слишком много чисел в номере телефона'
    }

    if (lengthNumber <= 10) {
        return formattedNumber
    } else {
        return deletFirstSymbol(formattedNumber)
    }
}

console.log(formatPhone('+7(903)123-45-67'))