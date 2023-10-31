import styles from "./Register.module.css";

const Register = () => {
  // Button //
  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    e.preventDefault()
    console.log(e.target.name);
  }

  return (
    <section className={styles.formContainer}>
      <form className={styles.form}>
        <h2>User Form</h2>
        <input
          type="text"
          className={styles.input}
          placeholder="Name"
          onChange={handleInputChange}
          name="shiulhrg"
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Email Address"
          onChange={handleInputChange}
          name="shiulhrg"
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          onChange={handleInputChange}
          name="shiulhrg"
        />
        <button onClick={handleButtonClick} className={styles.btn}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Register;
