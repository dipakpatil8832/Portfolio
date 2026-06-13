export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-sky-500 opacity-20 blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-500 opacity-20 blur-3xl animate-pulse"></div>

    </div>
  );
}