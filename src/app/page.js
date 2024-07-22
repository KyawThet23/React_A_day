"use client"
import Container from "./components/Container";
import Greeting from "./components/Greeting";
import HelloWorld , {AnotherChild} from "./components/HelloWorld";
import JSXDemo from "./components/JSXDemo";
import Profile from "./components/Profile";
import styles from "./page.module.css";

export default function Home() {

let profile = {
  name : 'Test user',
  imageUrl: 'https://randomuser.me/api/portraits/men/74.jpg'
}

  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <h1>Header</h1>
      </div>

      <div className={styles.center}>
        
      </div>

      <AnotherChild />

      <div className={styles.grid}>
        <HelloWorld />
        <HelloWorld />
      </div>

      <JSXDemo />

      <Greeting name={"KTH"}/>
      <Greeting name={"KTH"} age={23}/>

      <Profile profile={profile} /> */}

      <Container message={"Message from page"}>
        <h1>Hello</h1>
        <p>Its me!!!!</p>
      </Container>

    </main>
  );
}
