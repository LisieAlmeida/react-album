import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>Galeria de fotos</h1>
        </header>
    );
}