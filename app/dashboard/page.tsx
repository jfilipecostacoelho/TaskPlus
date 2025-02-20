import styles from "./styles.module.css";
import Head from "next/head";

export default async function Dashboard() {
    console.log("SERVER SIDE IS HERE!!");

    //const session = await getSession({ req };)

    return (
        <div className={styles.container}>
            <Head>
                <title>My Taskboard</title>
            </Head>

            <h1>
                Board page
            </h1>
        </div>
    );
}
