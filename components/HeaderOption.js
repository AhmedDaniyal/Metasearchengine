export default function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-amber-500
       cursor-pointer hover:border-amber-500 pb-3 ${
        selected && "text-amber-500 border-amber-500"}`}
    >
      <Icon className="h-5" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}
  