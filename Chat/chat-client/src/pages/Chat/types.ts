export interface Chat {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  lastActivityAt: string;
  lastMessage: string;
}

export interface Message {
  id: number;
  chatId: number;
  content: string;
  sentAt: string;
  sender: number;
  updatedAt: string;
}
