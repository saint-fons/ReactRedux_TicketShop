import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'


const NewForm = (props) => {

    const TextFieldAdapter = ({ input, meta, ...rest }) => (
        <TextField
            {...input}
            {...rest}
            onChange={(event, value) => input.onChange(value)}
            errorText={meta.touched ? meta.error : ''}
        />
    )

    const ToggleAdapter = ({ input: { onChange, value }, label, ...rest }) => (
        <Toggle
            label={label}
            toggled={!!value}
            onToggle={(event, isInputChecked) => onChange(isInputChecked)}
            {...rest}
        />
    )
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
    }
    const required = value => (value ? undefined : 'Required')
    const cityValue = value => (value === "A" || value === "B" ? updateCity(value) : 'Select city A or B')
    const timeValue = value => (value ? updateTime(value) : "Required")
    const timeWayBack = value => (value ? updateTimeToWayBack(value) : "Required")
    const returnValue = value => (value ? updateReturn(value) : updateReturn(false))
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)



    let updateCity = (value) => {
        props.updateCityToVisitAC(value)
    }
    let updateTime = (value) => {
        props.updateTimeToVisitAC(value)
    }

    let updateTimeToWayBack = (value) => {
        props.updateTimeToWayBackAC(value)
    }

    let updateReturn = (value) => {
        props.updateReturnVisitAC(value)
    }

    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Styles>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    name="cityToVisit"
                                    component={TextFieldAdapter}
                                    validate={composeValidators(required, cityValue)}
                                    hintText="City to visit"
                                    floatingLabelText="Pick your city to visit A or B"
                                />
                            </div>
                            <div>
                                <label>Pick a time</label>
                                <Field
                                    name="timePicked"
                                    component="select"
                                    validate={timeValue}
                                >
                                    {

                                        props.getRoutesSuperSelector.map ( r =>
                                            <option
                                                value={r.toLocaleString()}>{r.toLocaleString()}
                                            </option>
                                        )
                                    }
                                </Field>
                            </div>
                            <div>
                                <Field
                                    name="return"
                                    label="Return?"
                                    component={ToggleAdapter}
                                    labelPosition="right"
                                    validate={returnValue}
                                />
                            </div>
                            <div>
                                <label>Way back</label>
                                <Field
                                    name="wayBack"
                                    component="select"
                                    validate={timeWayBack}
                                >
                                    {
                                        props.getWayBackSuperSelector.map ( r =>
                                            <option
                                                value={r}>{r.toLocaleString()}
                                            </option>
                                        )
                                    }
                                </Field>
                            </div>

                            <div className="buttons">
                                <button
                                    type="submit"
                                    disabled={submitting}>
                                    Log In
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    )}
                />
            </Styles>
        </MuiThemeProvider>
    )

}

export default NewForm
