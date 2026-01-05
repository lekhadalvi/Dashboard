
import { GroupIcon, BoxIconLine } from "../../icons";

export const ecommerceMetrics = [
  {
    id: "investor",
    label: "Investors",
    value: 3782352,
    icon: GroupIcon,
  },
  {
    id: "partner",
    label: "Partners",
    value: 27435381,
    icon: GroupIcon,
  },
  {
    id: "startup",
    label: "Startups",
    value: 5334259,
    icon: BoxIconLine,
  },
];

export default function EcommerceMetrics() {
  return (
    <div className="grid gap-4 grid-cols-3 md:gap-6">
      {ecommerceMetrics.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
        >
          {/* Icon (optional) */}
          {/* <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <item.icon className="text-gray-800 size-6 dark:text-white/90" />
          </div> */}

          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </span>

              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {item.value.toLocaleString()}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
