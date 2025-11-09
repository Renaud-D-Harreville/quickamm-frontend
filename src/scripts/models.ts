export interface Answer {
  id: number;
  text: string;
  is_true: boolean;
  explanation: string;
  checked?: boolean;
  isOpen?: boolean;
}

export interface Reference {
  url: string
  description: string
}

export interface Question {
  question: string;
  image_path?: string
  description: string;
  answers: Answer[];
  references: Reference[];
}

