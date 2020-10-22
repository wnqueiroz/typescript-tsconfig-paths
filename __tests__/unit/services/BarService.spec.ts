import { BarService } from "@/services/BarService";

describe("Unit: BarService", () => {
  let barService: BarService;

  beforeEach(() => {
    barService = new BarService();
  });

  describe("foo", () => {
    it("should call console.log", () => {
      const spy = jest.spyOn(console, "log").mockImplementation();

      barService.bar();

      expect(spy).toBeCalledWith(`Hi! I'm bar method from BarService :)`);
    });
  });
});
