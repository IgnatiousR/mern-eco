import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

type FiltersState = {
  category: string;
  gender: string;
  color: string;
  size: string[];
  material: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
};

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Derive filters from searchParams instead of syncing via useEffect
  const filters = useMemo<FiltersState>(() => {
    const params = Object.fromEntries([...searchParams]);

    return {
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    };
  }, [searchParams]);

  const [priceRange, setPriceRange] = useState([0, filters.maxPrice]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "White"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const brands = ["B1", "B2"];
  const genders = ["Men", "Women"];

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLButtonElement;
    const name = target.name as keyof FiltersState;
    const value = target.value;

    const newFilters: FiltersState = { ...filters };

    // Checkbox filters (arrays)
    if (
      target instanceof HTMLInputElement &&
      target.type === "checkbox" &&
      (name === "size" || name === "material" || name === "brand")
    ) {
      const checked = target.checked;

      newFilters[name] = checked
        ? [...newFilters[name], value]
        : newFilters[name].filter((item) => item !== value);

      updateURLParams(newFilters);
      return;
    }

    // Single-value filters (string)
    if (name === "category" || name === "gender" || name === "color") {
      newFilters[name] = value;
      updateURLParams(newFilters);
      return;
    }
  };

  const updateURLParams = (newFilters: FiltersState) => {
    const params = new URLSearchParams();

    (Object.keys(newFilters) as (keyof FiltersState)[]).forEach((key) => {
      const value = newFilters[key];

      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      } else if (typeof value === "string" && value) {
        params.set(key, value);
      } else if (typeof value === "number" && value > 0) {
        params.set(key, value.toString());
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(e.target.value);

    setPriceRange([0, newPrice]);

    const newFilters: FiltersState = {
      ...filters,
      minPrice: 0,
      maxPrice: newPrice,
    };

    updateURLParams(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-zinc-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-zinc-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 accent-red-500 focus:ring-red-400 border-zinc-300"
            />
            <span className="text-zinc-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-zinc-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 accent-red-500 focus:ring-red-400 border-zinc-300"
            />
            <span className="text-zinc-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-zinc-600 font-medium mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-8 h-8 rounded-full border border-zinc-300 cursor-pointer transition hover:scale-105 ${
                filters.color === color ? "ring-2 ring-zinc-600" : ""
              }`}
              style={{ backgroundColor: color.toLocaleLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-zinc-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 accent-red-500 focus:ring-red-400 border-zinc-300"
            />
            <span className="text-zinc-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-zinc-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 accent-red-500 focus:ring-red-400 border-zinc-300"
            />
            <span className="text-zinc-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <label className="block text-zinc-600 font-medium mb-2">Price Range</label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="rounded-lg
          appearance-none
          cursor-pointer
          accent-red-500
          bg-gray-300"
        />
        <div className="flex justify-between text-zinc-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
