export class Pagination {
  private totalPages: number;
  private currentPage: number;
  private isLooped: boolean;

  constructor(totalPages: number, initialPage: number = 1, isLooped: boolean = false) {
    this.totalPages = totalPages;
    this.currentPage = initialPage;
    this.isLooped = isLooped;
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public goToPage(page: number): void {
    if (page < 1) {
      this.currentPage = this.isLooped ? this.totalPages : 1;
    } else if (page > this.totalPages) {
      this.currentPage = this.isLooped ? 1 : this.totalPages;
    } else {
      this.currentPage = page;
    }
  }
  public next(): void {
    this.goToPage(this.currentPage + 1);
  }

  public prev(): void {
    this.goToPage(this.currentPage - 1);
  }

  public nextMultiple(steps: number): void {
    this.goToPage(this.currentPage + steps);
  }


  public prevMultiple(steps: number): void {
    this.goToPage(this.currentPage - steps);
  }
}
