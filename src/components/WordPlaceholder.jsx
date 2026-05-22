export default function WordPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[var(--surface-color-light)] my-4 py-8 border border-[var(--border-light)] rounded-lg">
      <i className="ti ti-book-2 text-gray-200 text-[28px]" />
      <p className="text-3xl text-gray-400">
        Search a word to see its definition
      </p>
    </div>
  );
}
