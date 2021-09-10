export const CONFIG_DIR = "~/ynab-buddy";
export const CONFIG_FILE = "config.yaml";
export const CONFIG_FILE_EXAMPLE = "src/config/example.yaml";
export const APP_NAME = "YNAB Buddy";
export const APP_VERSION = require("../package.json").version;

export const messages = {
  intro:
    "This tool converts your bank's files to YNAB-format and uploads them directly to your budget.",
  notConfigured: "It looks like you haven't configured YNAB Buddy yet.",
  gettingStarted:
    "To get started, open the following file and follow the instructions:",
  usingConfigPath: "Using configuration file:",
  importFolderPrompt: "Where are your bank's files located?",
  folderNotFound: "Could not find folder:",
  filesFound: "Found %s file(s) eligible for parsing.",
  parsingDone: "Success: %s transactions parsed.",
  parsing: "Parsing: %s",
  parseDateError: [
    "Unable to parse '%s'.",
    "The expected date format was: '%s'.",
    "You may want to check the format in your config.yaml file.",
  ]
};
