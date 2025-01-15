export interface IRedirect {
  _id?: string;
  sourceUrl: string;
  destinationUrl: string;
  httpStatusCode: number;
  createdAt: string;
  updatedAt: string;
}
