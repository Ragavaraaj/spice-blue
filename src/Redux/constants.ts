export let ACCESS_TOKEN = {
  token: "",
  get: function () {
    return this.token;
  },
  set: function (token: string) {
    return (this.token = token);
  },
};

export const BASE_URL = "https://stage.api.sloovi.com/";

export const ROUTES = {
  login: "/login",
  user: "/user",
  dropDown: "/team",
  allTask: "/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
};

export const getURL = (forRoute: string) => `${BASE_URL}${forRoute}`;
