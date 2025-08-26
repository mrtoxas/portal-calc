import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={styles.button}>
    <span className={styles.glare}></span>
    <span className={styles.content}>{children}</span>
  </button>
);
