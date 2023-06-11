const user = {
  department: "",
};

export const login = (type: "marketing" | "product") => {
  if (type === "marketing") {
    return (user["department"] = "marketing");
  }
  if (type === "product") {
    return (user["department"] = "product");
  }
};

export const logout = () => {
  return (user["department"] = "");
};

export const getUser = () => {
  return user;
};
