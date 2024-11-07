import { tours } from "../data";
import Title from "./Title";
import TourInfo from "./TourInfo";
import ToursImg from "./ToursImg";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article key={tour.id} className="tour-card">
              <ToursImg image={tour.image} date={tour.date} />

              <TourInfo
                title={tour.title}
                info={tour.info}
                location={tour.location}
                duration={tour.duration}
                cost={tour.cost}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
