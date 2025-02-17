import React from 'react';
import { Snowflake, Thermometer, Grill } from 'lucide-react';

interface ProductionFormData {
  pc3_dips_prs: string;
  pc3_dips_abs: string;
  pc3_dips_cf: boolean | null;
  pc3_dips_ncf: boolean | null;
  pc3_wings_prs: string;
  pc3_wings_abs: string;
  pc3_wings_cf: boolean | null;
  pc3_wings_ncf: boolean | null;
  pc5_chickenLong_prs: string;
  pc5_chickenLong_abs: string;
  pc5_chickenLong_cf: boolean | null;
  pc5_chickenLong_ncf: boolean | null;
  pc5_chickenSupreme_prs: string;
  pc5_chickenSupreme_abs: string;
  pc5_chickenSupreme_cf: boolean | null;
  pc5_chickenSupreme_ncf: boolean | null;
  pc5_boucheesPoulet_prs: string;
  pc5_boucheesPoulet_abs: string;
  pc5_boucheesPoulet_cf: boolean | null;
  pc5_boucheesPoulet_ncf: boolean | null;
  pc5_baconPoulet_prs: string;
  pc5_baconPoulet_abs: string;
  pc5_baconPoulet_cf: boolean | null;
  pc5_baconPoulet_ncf: boolean | null;
  pc7_boucheesPouletSachet_prs: string;
  pc7_boucheesPouletSachet_abs: string;
  pc7_boucheesPouletSachet_cf: boolean | null;
  pc7_boucheesPouletSachet_ncf: boolean | null;
  pc7_baconPouletSachet_prs: string;
  pc7_baconPouletSachet_abs: string;
  pc7_baconPouletSachet_cf: boolean | null;
  pc7_baconPouletSachet_ncf: boolean | null;
  pc8_9_45g_prs: string;
  pc8_9_45g_abs: string;
  pc8_9_45g_cf: boolean | null;
  pc8_9_45g_ncf: boolean | null;
  pc8_9_115g_prs: string;
  pc8_9_115g_abs: string;
  pc8_9_115g_cf: boolean | null;
  pc8_9_115g_ncf: boolean | null;
  pc8_9_150g_prs: string;
  pc8_9_150g_abs: string;
  pc8_9_150g_cf: boolean | null;
  pc8_9_150g_ncf: boolean | null;
}

const ProductionForm: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="bg-gray-50 rounded-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center space-x-2">
          <Snowflake className="w-5 h-5 text-blue-500" />
          <span>PC 3: Armoire ou Conservateur Négative 1</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Dips</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Wings</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center space-x-2">
          <Snowflake className="w-5 h-5 text-blue-500" />
          <span>PC 5: Armoire ou Conservateur Négative 2</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Chicken Long</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Chicken Suprême 129g</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Bouchées Poulet rôties</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Bacon de poulet</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center space-x-2">
          <Thermometer className="w-5 h-5 text-orange-500" />
          <span>PC 7: TG Réfrigérée</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">sachet* Bouchées Poulet rôties</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">sachet* Bacon de poulet</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-md p-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center space-x-2">
          <Grill className="w-5 h-5 text-red-500" />
          <span>PC 8 / 9: Meuble à patties / Grill</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">45 g</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">115 g</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">150 g</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PRS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ABS</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 flex space-x-4 items-center mt-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">CF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">NCF</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionForm;
