import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./src/components/Login/routes";

AppRegistry.registerComponent(appName, () => Routes);