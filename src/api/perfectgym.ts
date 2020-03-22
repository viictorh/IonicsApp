import { execPost } from "../util/httpRequest";

const { REACT_APP_PRT_API_KEY, REACT_APP_PRT_API_URL } = process.env;

export function doLogin(username: string, password: string) {
  const form = {
    grant_type: "password",
    username,
    password
  };

  return execPost(
    REACT_APP_PRT_API_URL + "oauth/authorize",
    form,
    "application/x-www-form-urlencoded"
  );
}
