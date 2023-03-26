const fetchDataWithCallback = (callback: (data: any) => void) => {
  setTimeout(callback, 3000, "lemon");
};

test("return lemon", (done) => {
  const callback = (data: any) => {
    expect(data).toBe("lemon");
    done();
  };
  fetchDataWithCallback(callback);
});

const fetchDataWithPromiseResolve = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, "lemon"));
// .resolvesを利用して成功時の値を受け取る
test("return lemon", () => {
  return expect(fetchDataWithPromiseResolve()).resolves.toBe("lemon");
});
// async/awaitを利用
test("return lemon with async/await", async () => {
  await expect(fetchDataWithPromiseResolve()).resolves.toBe("lemon");
});
