/**
 * Created by jdickinson on 2/21/2017.
 */
export interface IOutcome{description: string; code: string}
export class Outcome implements IOutcome{
  description: string;
  code: string;
}
