export interface ChatInputProps {
    sendMessage: (message: string) => void;
}

export interface User {
    id: number;
    nickName: string;
    firstName: string;
    lastName: string;
}

export interface LiveMessage {
    text: string;
    user: User;
}

export interface MessageProps {
    message: LiveMessage;
}