import * as yup from 'yup'
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const ageRule = /^(1[89]|[2-9]\d)$/;
const phoneRules = /^(\+91|0)?[6789]\d{9}$/;

// sign up validation schema
export const basicSchema = yup.object().shape({
    name: yup.string().min(3).required("This field is required"),
    email: yup.string().email("please Enter a valid email").required("This field is required"),
    phone: yup.string().matches(phoneRules, { message: "Enter a valid number" }).required("This field is required."),
    rollNum: yup.string().matches(ageRule, { message: "Please enter a valid age" }).required("This field is required."),


})