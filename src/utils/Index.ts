export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

export type CardServiceProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export type CardGreatProps = {
  image: string;
  description: string;
};

export type IdeaProps = {
  no: number;
  title: string;
  deskripsi: string;
};

export type CardNewsProps = {
  title: string;
  description: string;
  link: string;
};

export type CardHappyProps = {
  rating: number;
  deskripsi: string;
};

export type InterestProps = {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

export type CardCardArtikelProps = {
  image: string;
  title: string;
  deskripsi: string;
};
