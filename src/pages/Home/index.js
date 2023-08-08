import Header from 'components/Header';
import styles from './Home.module.scss';
import imageExample from "assets/image-example.png";

export default function Home() {
  return (
    <div>
      <Header
        title='Blue Page'
        description='The new yellow pages'
        image={imageExample}
        className={styles.header}
      />
    </div>
  );
}
