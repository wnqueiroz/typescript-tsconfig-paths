import { FooController } from "@/controllers/FooController";
import { BarService } from "@/services/BarService";

describe("Unit: FooController", () => {
  let fooController: FooController;

  beforeEach(() => {
    fooController = new FooController();
  });

  describe("foo", () => {
    it("should call bar method from BarService", () => {
      const spy = jest.spyOn(BarService.prototype, "bar").mockImplementation();

      fooController.foo();

      expect(spy).toBeCalled();
    });
  });
});
