export class FakeAnn {
  id: number;
  date: Date;
  title: string;
  body: string;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.date = args.premiered;
      this.title = args.name;
      this.body = args.summary;
    }
  }
}
