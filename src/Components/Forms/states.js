const states = {
    AL: '2021-08-21 18:00:00',
    AB: '2021-08-21 18:30:00',
    AC: '2021-08-21 18:45:00',

}
export default Object.keys(states).map(value => ({
    value,
    label: states[value]
}))
