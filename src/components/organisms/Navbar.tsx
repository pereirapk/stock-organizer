export const Navbar = () => {
  return (
    <div className="w-full h-16 bg-black flex justify-between">
      <div className="flex items-center justify-center h-full ms-8">
        <p className="text-white text-xl font-bold">Stock Organizer</p>
      </div>
      <div></div>
      <div>
        <div className="flex m-4 overflow-hidden text-center items-center justify-center">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full ring-2 ring-white"
          />
        </div>
      </div>
    </div>
  );
};
