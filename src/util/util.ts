type yearMonthDay = {
  year: number;
  month: number;
  day: number;
};

export const dateStrToYearMonthDay = (dateStr: string): yearMonthDay => {
  const date = new Date(dateStr);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1, // 月を0始まりで数える
    day: date.getDate(),
  };
};
