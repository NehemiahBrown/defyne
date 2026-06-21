export default function WordList({ title, icon, color, words }) {
  return (
    <section className="bg-[var(--surface-color)] w-full min-w-0 flex-1 p-4 border border-[var(--border)] rounded-lg">
      <div className="flex flex-start gap-2">
        <img src={icon} className="w-4 icon" />
        <h2 className="font-bold text-[var(--primary-color)]">{title}</h2>
      </div>
      <div>
        <ul className="list-disc pl-5 mt-3" style={{ "--marker-color": color }}>
          {words?.slice(0, 5).map((word, index) => (
            <li
              key={`${word} - ${index}`}
              style={{ color: "var(--primary-text)" }}
              className="marker:text-[var(--marker-color)]"
            >
              {word.word}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
