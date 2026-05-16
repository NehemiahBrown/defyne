import deleteRecent from "../assets/delete.svg";
import { Fragment } from "react";

export default function RecentInfo() {
  return (
    <Fragment>
      <hr className="border-[var(--border-light)] w-full" />
      <section className="flex w-full justify-between items-center p-4 bg-[var(--surface-color-light)] my-4  p-4 border border-[var(--border-light)] rounded-lg">
        <p>8 searches</p>
        <button className="flex gap-1 text-white font-bold bg-[var(--antonym-light)]/30 py-1 px-3 rounded-lg border border-[var(--antonym-light)]">
          <img src={deleteRecent} alt="Delete button." />
          Clear All
        </button>
      </section>
    </Fragment>
  );
}
