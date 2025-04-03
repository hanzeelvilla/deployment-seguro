test("prints Hola Mundo", () => {
    console.log = jest.fn();
    require("./index");
    expect(console.log).toHaveBeenCalledWith("Hola Mundo");
  });
  