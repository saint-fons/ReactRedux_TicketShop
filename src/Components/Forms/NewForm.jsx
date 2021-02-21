import React from "react"
import {Form, Field} from 'react-final-form'
import Styles from './Styles'


const NewForm = (props) => {

    let ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

    let remoteIP = props.remoteIP

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)

        await sleep(300)
        getAddress(remoteIP)
    }

    const required = value => (value ? undefined : 'Required')
    const ipValue = value => (value.match(ipFormat) ? updateAddress(value) : 'Invalid address')
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    let updateAddress = (value) => {
        props.updateAddress(value)
    }


    let getAddress = (remoteIP) => {
        props.getAddress(remoteIP)
    }





    return (
        <Styles>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="address"
                            validate={composeValidators(required, ipValue)}
                        >
                            {({input, meta}) => (
                                <div>
                                    <input {...input} type="text" placeholder="Required IP address"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </Styles>
    )
}

export default NewForm
