export type TUser = {
  _id: string;
  username: string;
  created: Date;
};

export type AuthReturnType = {
  user: TUser;
  tokens: {
    access: {
      token: string;
      expires: Date;
    };
    refresh: {
      token: string;
      expires: Date;
    };
  };
};
