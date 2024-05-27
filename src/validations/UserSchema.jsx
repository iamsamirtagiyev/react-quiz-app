import * as Yup from 'yup'

export const UserSchema = Yup.object().shape({
    name: Yup.string()
    .required().test({ test: name =>  /^[a-z]+$/i.test(name)}),

    surname: Yup.string()
    .required().test({ test: name =>  /^[a-z]+$/i.test(name)}),
})

