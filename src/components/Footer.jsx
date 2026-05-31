export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full bg-[var(--surface-color)] mt-8 py-2 px-4">
      <div className="flex flex-col w-full justify-between">
        <div className="flex justify-between items-center gap-1">
          <p className="text-xl text-[var(--primary-text)]">
            de<span className="text-[var(--primary-color)]">fyne</span>
          </p>
          <ul className="flex gap-2">
            <li className="text-sm text-[var(--primary-text)]">
              <a>About</a>
            </li>
            <li className="text-sm text-[var(--primary-text)]">
              <a href="https://github.com/NehemiahBrown/defyne" target="_blank">
                GitHub
              </a>
            </li>
            <li className="text-sm text-[var(--primary-text)]">
              <a href="https://dictionaryapi.dev/" target="_blank">
                API
              </a>
            </li>
          </ul>
        </div>
        <p className="text-sm text-[var(--primary-text)]">
          A modern dictionary app
        </p>
      </div>
      <hr className="border-[var(--border)] w-full my-4" />
      <div className="flex w-full justify-between">
        <p className="text-xs text-[var(--primary-text)]">@2026 Defyne</p>
        <p className="text-xs text-[var(--primary-text)]">
          Powered by Dictionary API
        </p>
      </div>
    </footer>
  );
}
