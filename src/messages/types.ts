export interface Message {
  content: string;
  id: number;
}
export type Messages = {
  [key: string]: Message;
};
