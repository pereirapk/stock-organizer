"use client"

export const TableComponent  = ({ data } : {data: any[]}) => {
    return (
        <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">Coluna 1</th>
              <th className="px-6 py-3 text-left">Coluna 2</th>
              <th className="px-6 py-3 text-left">Coluna 3</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{item.col1}</td>
                <td className="px-6 py-4">{item.col2}</td>
                <td className="px-6 py-4">{item.col3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}