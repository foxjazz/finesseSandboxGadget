/**
 * Created by jdickinson on 2/21/2017.
 */
export interface IReason {description: string; code: string}
export class Reason implements IReason {
  description: string;
  code : string;
}
