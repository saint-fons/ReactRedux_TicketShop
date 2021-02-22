const states = {
    1: '2021-08-21 18:00:00',
    2: '2021-08-21 18:30:00',
    3: '2021-08-21 18:45:00',
}





export default Object.keys(states).map(value => ({
    value,
    label: states[value]
}))
