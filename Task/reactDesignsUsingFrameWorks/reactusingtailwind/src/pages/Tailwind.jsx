import Tailwindpages from "../constants/RoutesDeclartaion/Tailwindpages";

function Tailwind() {
  return (
    <div className="p-4 md:p-6">
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse min-w-175">
          {/* Table Head */}
          <thead className="bg-black text-white">
            <tr>  
              <th className="px-4 py-3 text-left text-sm font-semibold">SR.</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Concept Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold">
                Visit
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {Tailwindpages.Children.map((childRoute, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>

                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {childRoute.Name}
                </td>

                <td className="px-4 py-3 text-sm text-gray-600">
                  {childRoute.Description}
                </td>

                <td className="px-4 py-3 text-center">
                  <a
                    href={childRoute.path}
                    className="inline-flex items-center justify-center rounded-md bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition"
                  >
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tailwind;
