import firm from "../assets/images/firm.jpg";

export default () => {
  const stats = [
    {
      data: "20+",
      title: "Years of Service",
    },
    {
      data: "800+",
      title: "Customers & Counting",
    },
    {
      data: "3",
      title: "Offices Nationwide",
    },
  ];

  return (
    <section className="py-14">
      <div className="lg:px-16 mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img src={firm} className="rounded-lg" alt="" />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We do our best to make Clients always happy
            </h3>
            <p className="mt-3 max-w-xl">
              We are your plug when it comes to any legal issues or advice. We
              go beyond just assisting clients, we are a complete formation
              package.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-indigo-600 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
