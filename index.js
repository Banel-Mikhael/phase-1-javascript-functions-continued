function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork (location  = 'go to the office') {
    location;

    return `This Monday, I will ${location}.`
}

function wrapAdjective (style = '*') {
    return function inner (anyWord = 'special') {
        return `You are ${style}${anyWord}${style}!`
    }
}