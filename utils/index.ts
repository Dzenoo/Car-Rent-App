import { CarCardProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.manufacturer}&year=${filters.year}&model=${filters.model}&limit=${filters.limit}&fuel_type=${filters.fuel}`,
    {
      headers: {
        "X-RapidAPI-Key": "daf3f27dcamshf45bf670c941bd1p127084jsn52853853696d",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
