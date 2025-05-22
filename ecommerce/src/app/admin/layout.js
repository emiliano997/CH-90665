export default function AdminLayout({ children }) {
  return (
    <header>
      <div className="bg-blue-800 p-5 flex items-center justify-center gap-10">
        <h3 className="text-xl font-bold uppercase text-center">Admin</h3>
      </div>
      {children}
    </header>
  );
}
