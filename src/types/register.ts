type RequestRegister = {
  username: string;
  fullname: string;
  password: string;
  role?: "LEAD" | "TEAM";
};

export type { RequestRegister };
