import { BarService } from "@/services/BarService";

export class FooController {
  private readonly barService: BarService;

  constructor() {
    this.barService = new BarService();
  }

  foo() {
    this.barService.bar();
  }
}
