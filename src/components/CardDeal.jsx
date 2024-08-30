import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque eos, consequatur illum vel rerum laudantium laborum minus eum illo necessitatibus iste, corporis, ipsam odit quia fugiat reprehenderit ad blanditiis.
        Facere voluptates est nemo maxime non aperiam laboriosam adipisci neque dolor. Consectetur, vitae dolore! Minima, delectus. Illo, vel autem! Eius alias aperiam consectetur magni culpa quo eaque assumenda! Fuga, labore?
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
