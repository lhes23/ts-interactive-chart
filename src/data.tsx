export type IData = {
  categoryId: string;
  x: string[];
  y: number[];
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const sampleData: IData[] = [
  {
    categoryId: "2020",
    x: months,
    y: [
      5000, -17000, 15000, 8000, 20000, -600, 13000, 20000, -9000, 4000, 17000,
      -40000,
    ],
  },
  {
    categoryId: "2021",
    x: months,
    y: [
      -200000, -50000, 3000, 1000, -13000, 338, 3500, 19000, 18000, -5000,
      17000, 117000,
    ],
  },
  {
    categoryId: "2022",
    x: months,
    y: [-70, -26000, -33000, -680, -18000, 1500, 30000],
  },
];
