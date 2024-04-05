import * as Yup from 'yup';

const yupSchema = Yup.object().shape({
    name: Yup.string()
        .optional(),
    phone: Yup.string()
        .matches(/^([0-9]{12})$/, "Must be 12 numbers")
        .max(12, "Must be 12 numbers")
        .required("Phone number is a required"),
    email: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, "Invalid e-mail")
        .required("E-mail is a required"),
    service: Yup.string()
        .optional(),
    message: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(300, "Must be at most 300 characters")
        .required("Message is a required"),
    conditions: Yup.bool()
        .oneOf([true], 'Accept Terms & Conditions is required'),
});

export default yupSchema;