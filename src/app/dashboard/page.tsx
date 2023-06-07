import { Suspense } from "react";
import { unique } from "next/dist/build/utils";

interface Car {
  createdAt: string;
  driverName: string;
  driverAvatar: string;
  carName: string;
  carManufacturer: string;
  isAllocation: boolean;
  carId: string;
}
async function getCars(): Promise<Car[]> {
  const res = await fetch(
    `https://647de137af984710854a86f2.mockapi.io/api/v1/cars`
  );
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return res.json();
}

export default async function Posts() {
  const cars = await getCars();

  return (
    <section>
      <h3>자동차 보기 영역</h3>
      {cars &&
        cars.map((car) => {
          return <li key={`${car.carId}_${car.carName}`}>{car.carName}</li>;
        })}
    </section>
  );
}
