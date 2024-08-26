export const Updates = () => {
  return (
    <section className="relative py-28 bg-[#132554]">
      <div className="relative z-10  mx-auto px-4 text-gray-300 justify-center gap-24 lg:flex md:px-8">
        <div className="mt-12 lg:mt-0">
          <div className="relative z-10   sm:text-center">
            <div className="space-y-3">
              <h3 className="text-3xl text-white font-bold">
                Your Court Dairy Linked With Cause List
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Register today and get notified about weekly cause list from
                your local courts
              </p>
            </div>
            <div className="mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-gray-500 w-full p-2 outline-none"
                />
                <button className="p-3 px-3 rounded-lg font-medium text-xs whitespace-nowrap text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
                  Get Updates
                </button>
              </form>
              <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                No spam whatsoever, we care about the protection of your data.
                Read our{" "}
                <a className="underline" href="javascript:void(0)">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};
