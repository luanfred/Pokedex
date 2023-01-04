export function Button({ children, run }) {
  return (
    <button
      className="w-64 h-10 text-colors-white font-semibold rounded bg-colors-orange-primary"
      onClick={run}
    >
      {children}
    </button>
  );
}
