import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
//Atoms
import TextInput from '../../ui/atoms/text-input'
import PasswordInput from '../../ui/atoms/password-input'
import SubmitButton from '../../ui/atoms/submit-button'
//molecules
import LoginForm from '../../ui/molecules/login-form'
import { Labels, Placeholders, TestIDs } from '../../pages/core/configs'
import '@testing-library/jest-dom';

const testObject = {
    isTextInput: (screen) => screen.getByPlaceholderText(Placeholders.TEXT_INPUT),
    isPasswordInput: (screen) => screen.getByPlaceholderText(Placeholders.PASSWORD_INPUT),
    isSubmitButton: (screen) => screen.getByText(Labels.SUBMIT),
    isErrorField: (screen) => screen.getByTestId(TestIDs.ERROR)
}

const makeLogin = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtjklmnopqrstuvwxyz0123456789';
    var characersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characersLength))
    }
    return result
}

const expectation = (element) => expect(element).toBeInTheDocument()

describe('UI inputs must render properly', () => {
    it('renders a text input', () => {

        render(<TextInput onLoginEnter={(value) => value} />)

        const input = testObject.isTextInput(screen)
        expectation(testObject.isTextInput(screen))

        fireEvent.change(input, { target: { value: 'การรำ' } })
        expect(input).toHaveDisplayValue('')

        const generatedLogin = makeLogin(101)

        fireEvent.change(input, { target: { value: generatedLogin } })
        expect(input).toHaveDisplayValue('')

    })

    it('render a password input', () => {
        render(<PasswordInput  onPasswordEnter={(value) => value}/>)

        const input = testObject.isPasswordInput(screen)
        expectation(input)

        fireEvent.change(input, { target: { value: 'การรำ' } })
        expect(input).toHaveDisplayValue('')

        const generatedLogin = makeLogin(51)

        fireEvent.change(input, { target: { value: generatedLogin } })
        expect(input).toHaveDisplayValue('')
    })
    it('render a submit button', () => {
        render(<SubmitButton />)
        expectation(testObject.isSubmitButton(screen))
    })
})

describe('Form should be rendered properly', () => {
    it('render login form', () => {
        render(<LoginForm />)
        const testKeys = Object.keys(testObject)
        if (Array.isArray(testKeys) && testKeys.length > 0) {
            testKeys.forEach((test) => {
                expectation(testObject[test](screen))
            })
        }
    })


})




/* describe('UI inputs must render properly', () => {
    it('render a text input', () => {
        render(<TextInput/>)
        const input = screen.getByPlaceholderText(Placeholders.TEXT_INPUT)
        expect(input).toBeInTheDocument()
    })
    it('render a password input', () => {
        render(<PasswordInut/>)
        const input = screen.getByPlaceholderText(Placeholders.PASSWORD_INPUT)
        expect(input).toBeInTheDocument()
    })
    it('render a submit button', ()=> {
        render(<SubmitButton/>)
        const submit = screen.getByText(Labels.SUBMIT)
        expect(submit).toBeInTheDocument()
    })
}) */