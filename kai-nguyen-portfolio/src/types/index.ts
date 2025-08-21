export type ConsoleMessage =
  | { type: "cmd"; content: string }
  | { type: "text"; content: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | {
      type: "gallery";
      items: Array<{ src: string; alt: string; caption?: string }>;
      maxRow?: number;
    }
  | { type: "divider" };

export type Command = {
  name: string;
  description: string;
  run: () => ConsoleMessage[] | Promise<ConsoleMessage[]>;
};

export interface IdCardProps {
  name: string;
  role: string;
  location: string;
  id: string;
  avatarUrl: string;
}

export interface ChipProps {
  label: string;
  value: string;
  active?: boolean;
  onClick: (value: string) => void;
}

export interface PanelProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}
