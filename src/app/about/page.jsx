import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-street-by-palais-garnier-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
        />
        ;
      </div>
    </div>
  );
};
export default AboutPage;
