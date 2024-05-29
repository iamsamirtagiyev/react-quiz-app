import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .required()
    .test({test: email => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(email)}),

    password: Yup.string()
    .required()
    .min(6)
})