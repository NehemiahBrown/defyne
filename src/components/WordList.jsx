export default function WordList({ title, icon, color, words }) {
  return (
    <section className="bg-[var(--surface-color-light)] flex-1 p-4 border border-[var(--border-light)] rounded-lg">
      <div className="flex flex-start gap-2">
        <img src={icon} className="w-4" />
        <h2 className="font-bold text-[var(--soft-text-light)]">{title}</h2>
      </div>
      <div>
        <ul className="list-disc pl-5 mt-3" style={{ "--marker-color": color }}>
          {words?.slice(0, 5).map((word) => (
            <li
              key={word}
              style={{ color: "var(--soft-text-light)" }}
              className="marker:text-[var(--marker-color)]"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
