const SkeletonCard = () => {
  return (
    <div className="card border border-gray-200 p-6 rounded-2xl w-full animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-56 bg-gray-200 rounded-xl mb-6"></div>

      {/* Name skeleton */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
        <div className="h-5 bg-gray-200 rounded w-36"></div>
      </div>

      {/* Country & Role skeleton */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="h-9 bg-gray-200 rounded-lg w-24"></div>
      </div>

      <hr className="border-gray-200 mb-5" />

      {/* Details skeleton */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-10"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-28"></div>
          <div className="h-4 bg-gray-200 rounded w-28"></div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="h-9 bg-gray-200 rounded-lg w-28"></div>
        </div>
      </div>
    </div>
  );
};

const PlayerCardsSkeleton = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {[...Array(8)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default PlayerCardsSkeleton;
