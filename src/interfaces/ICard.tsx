import { Status } from "../types/Status";

export interface ICard {
  readonly id: number;
  status: Status;
  title: string;
  description: string;
}
