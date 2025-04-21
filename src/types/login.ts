type RequestLogin = {
  username: string;
  fullname: string;
  password: string;
  role: "LEAD" | "TEAM";
};

type ResponseLogin = {
  token: string;
  role?: "LEAD" | "TEAM";
};

export type { RequestLogin, ResponseLogin };
