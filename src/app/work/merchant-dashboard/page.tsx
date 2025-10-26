/* import Image from "next/image";
import { getImagePath } from "@/lib/utils"; */

export default function MerchantDashboard() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <h1 className="text-4xl font-bold animate-slide-in">
          Merchant Dashboard
        </h1>

        <div className="w-full">
          <div>
            <p className="project-title">
              For webshops to track metrics for marketing performance.
            </p>

            <p className="project-subtitle">
              Designed and developed independently by me.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
