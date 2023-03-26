const taskPromise = (name: string, total: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      total += 1;
      console.log(`${name} finished Total is ${total}`);
      resolve(total);
    }, 1000);
  });
};

taskPromise("task-1", 0)
  .then((total) => taskPromise("task-2", Number(total)))
  .then((total) => taskPromise("task-3", Number(total)))
  .then((total) => taskPromise("task-4", Number(total)))
  .then((total) => taskPromise("task-5", Number(total)));
