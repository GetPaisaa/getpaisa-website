import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";
import SectionTitle from "../Common/SectionTitle";
const Clients = () => {
  return (
    <section className="pb-20 bg-gray-4 dark:bg-dark-4 md:py-[40px] md:pb-17">
      <div className="container px-4">
     <div className="flex justify-center">
     <SectionTitle
          subtitle="Banks"
          title="Our Banking Partners"
          paragraph=" "
          width="640px"
          center
        />
     </div>
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
