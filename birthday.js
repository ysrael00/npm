const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs() //ele ira criar uma data atual e retornar um objeto
    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears +1, 'year')
    
    console.log('idade: ${ageInYears}´')
    console.log('proximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}')
    console.log('dias ate completar ${ageInYears +1} anos: ${daysToNextBirthday}')
}

birthday('1999-01-01')