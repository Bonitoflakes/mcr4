/* eslint-disable react/prop-types */
export const AppLayout = ({ children }) => {
  return (
    <>
      <header className="bg-purple-200 ">
        <nav>
          <h1 className="px-10 py-4 text-3xl font-semibold text-purple-700 px">MyForum</h1>
        </nav>
      </header>

      <div className="flex gap-4 mt-5">
        <aside className="flex-1 ">Sidenav</aside>

        <main className="flex-[2]">{children}</main>

        <aside className="flex-[1] ">
          <h1>Sort By</h1>
        </aside>
      </div>
    </>
  );
};
