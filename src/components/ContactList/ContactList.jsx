import Contact from "../Contact/Contact";
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <li className={styles.item} key={contact.id}>
                    <Contact contacts={contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
