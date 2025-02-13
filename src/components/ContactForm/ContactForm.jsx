import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        phone: Yup.string().required("Phone number is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        onAdd({
            id: Date.now(),
            name: values.name,
            phone: values.phone,
        });
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: "", phone: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <Field className={styles.input} type="text" name="name" placeholder="Enter contact name" />
                    {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
                    <Field className={styles.input} type="text" name="phone" placeholder="Enter contact phone number" />
                    {errors.phone && touched.phone && <div className={styles.error}>{errors.phone}</div>}
                    <button type="submit" className={styles.button}>Add Contact</button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
