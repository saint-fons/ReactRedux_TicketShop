const states1 = {
    1: '2021-08-21 18:30:00',
    2: '2021-08-21 18:50:00',
    3: '2021-08-21 19:45:00',
}





export default Object.keys(states1).map(value => ({
    value,
    label: states1[value]
}))
