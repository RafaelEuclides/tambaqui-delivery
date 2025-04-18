import Image from "next/image";

export function Navbar() {
  return (
    <header className="select-none h-20 fixed top-0 left-0 right-0 z-50 bg-indigo-950 shadow-md p-4 flex justify-between items-center">
      <div className="flex ml-20 mt-12 bg-indigo-950 rounded-full cursor-pointer items-center">
        <Image
          src="/logo3.png"
          alt="Logo"
          width={120}
          height={100}
        />
      </div>

      <div className="flex items-center">
        <button className="text-white cursor-pointer mr-30 px-6 py-2 border border-black rounded-md hover:bg-white hover:text-indigo-950 transition-all  text-md">Registar/Entrar 👤</button>
      </div>
    </header>
  );
}
