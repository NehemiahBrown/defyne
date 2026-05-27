export default function Footer(){
    return (
        <footer className="flex flex-col items-center w-full bg-[var(--surface-color-light)] mt-8 py-2 px-4">
            <div className="flex w-full justify-between">
                <div className="flex flex-col gap-1">
                <p className="text-xl">de<span className="text-[var(--primary-color-light)]">fyne</span></p>
                <p className="text-sm">A modern dictionary app</p>
                </div>
                <ul className="flex gap-2">
                    <li className="text-sm"><a>About</a></li>
                    <li className="text-sm"><a href="https://github.com/NehemiahBrown/defyne" target="_blank">GitHub</a></li>
                    <li className="text-sm"><a href="https://dictionaryapi.dev/" target="_blank">API</a></li>
                </ul>
            </div>
            <hr className="border-[var(--border-light)] w-full my-4" />
            <div className="flex w-full justify-between">
                <p className="text-xs">@2026 Defyne</p>
                <p className="text-xs">Powered by Dictionary API</p>
            </div>
            
        </footer>
    )
}