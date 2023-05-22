import Button from "./Button";
import styles from "./App.module.css";
import Background from "./BackgroundImg";


function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
      <Background />
    </div>
  );
}

export default App;
