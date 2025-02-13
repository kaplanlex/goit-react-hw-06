import styles from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
    return (
        <div>
            <p className={styles.p}>Search by name</p>
            <input
                type="text"
                className={styles.input}
                value={value}
                onChange={onSearch}
            />
        </div>
    );
};

export default SearchBox;
