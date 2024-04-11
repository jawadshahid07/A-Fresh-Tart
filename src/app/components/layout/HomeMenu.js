import SectionHeaders from "./SectionHeaders";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
    return (
        <section className="">
          <div className="text-center mb-4">
            <SectionHeaders
              subHeader={'check out'}
              mainHeader={'Our Best Sellers'} />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />

          </div>
        </section>
    )
}