export const reachMetrikaGoal = (goalName: string) => {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.ym !== "function") {
    return;
  }

  const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);

  if (!counterId) {
    return;
  }

  window.ym(counterId, "reachGoal", goalName);
};