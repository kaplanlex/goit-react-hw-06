import styles from './Contact.module.css';

export default function Contact({ contacts: { id, name, number, phone }, onDelete }) {
    const contactNumber = number || phone;

    return (
        <div>
            <p>{name}</p>
            <p>{contactNumber}</p>
            <button onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}
