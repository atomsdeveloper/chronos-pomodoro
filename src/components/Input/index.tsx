import styles from './styles.module.css';

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
} & React.ComponentProps<'input'>;

export function Input({ id, label, type, placeholder, ...rest }: InputProps) {
  return (
    <div className='formRow'>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
