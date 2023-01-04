export function Pokemon({ id, name, img, type }) {
  return (
    <div className="flex flex-col justify-center items-center w-96 h-50 p-3 rounded border-solid border border-colors-orange-primary hover:bg-colors-orange-secondary">
      <img src={img} alt={name} className=" w-32 h-30" />
      <h1 className="text-2xl font-extrabold">
        {id}. {name[0].toUpperCase() + name.substring(1)}
      </h1>
      <h3>{type}</h3>
    </div>
  );
}
