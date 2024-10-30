import IoCContainer from "ioc-lite";

import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";
import { IoCResources } from "src/types";

export const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCResources>();

  ioc.registerClass("Logger", Logger);
  ioc.registerClass("HTTP", HTTP);
  ioc.registerClass("Users", Users);

  return ioc;
};
