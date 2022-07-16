import React from "react";
import { useCurrency } from "./../hooks/useCurrency";
import { Rings as Loading } from "react-loader-spinner";
const labels = ["نام", "قیمت"];

export default function ShowCurrency() {
  const { data, loading } = useCurrency();
  const renderRowData = Object.values(data).map((item, index) => {
    return (
      <tr
        key={index}
        className="hover:bg-slate-100 h-10 transition-all border-b text-gray-500 cursor-pointer"
      >
        <td className="text-center">{item[3]}</td>
        <td className="text-center">{item[1].a[0]}</td>
      </tr>
    );
  });

  const renderLabels = labels.map((label, index) => (
    <th key={index} className="text-gray-500 font-bold text-center">
      {label}
    </th>
  ));

  return (
    <div className="w-2/3 mx-auto flex justify-center items-center">
      {loading && (
        <div>
          <Loading
            height="100"
            width="130"
            color="#2563eb"
            ariaLabel="loading"
          />
          <span className="mt-10 text-blue-600 font">لطفا کمی صبر کنید</span>
        </div>
      )}
      {!loading && (
        <table className="shadow-lg bg-white w-full border- rounded-lg overflow-hidden">
          <tr className="h-14  rounded-md mb-3 border-b">{renderLabels}</tr>
          {renderRowData}
        </table>
      )}
    </div>
  );
}
