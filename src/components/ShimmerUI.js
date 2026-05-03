const ShimmerUI = () => {
  return (
    <div className="animate-pulse">

      {/* Restaurant Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-gray-200 p-5">
        
        <div className="h-[100px] w-[100px] sm:h-[130px] sm:w-[130px] bg-gray-300 rounded-md"></div>

        <div className="flex flex-col gap-3 w-full sm:w-1/2">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        </div>

      </div>

      {/* 📂 Categories */}
      <div className="mt-6 space-y-6">

        {Array(5).fill("").map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-8/12 mx-auto p-4 bg-gray-100 rounded-lg shadow-md"
          >

            {/* Category Title */}
            <div className="h-5 w-1/3 bg-gray-300 rounded mb-4"></div>

            {/* Items */}
            {Array(3).fill("").map((_, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row justify-between gap-4 border-b border-gray-300 pb-4 mb-4"
              >

                {/* Left */}
                <div className="sm:w-9/12 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>

                {/* Right */}
                <div className="sm:w-3/12 flex flex-col items-center gap-2">
                  <div className="h-[80px] w-[100px] bg-gray-300 rounded-md"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded"></div>
                </div>

              </div>
            ))}

          </div>
        ))}

      </div>

    </div>
  );
};

export default ShimmerUI;