export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-950 shadow-md p-4 flex justify-between items-center">
      <div className="flex cursor-pointer items-center gap-2">
        <img src="/logo2.png" alt="Logo" className="h-25 w-35" />
      </div>

      <div className="flex gap-4 items-center">
        <button className="text-white cursor-pointer hover:scale-[1.1] text-xl"> Buscar 🔍</button>
        <button className="text-white cursor-pointer hover:scale-[1.1] text-xl">Registar/Entrar 👤</button>
      </div>
    </header>
  );
}
