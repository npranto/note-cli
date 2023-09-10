import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  // To create a new note, i.e., `note create "buy milk" --tags "chore"`
  .command(
    "create <note>",
    "Create a new note",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        describe: "The content of the new note",
      });
    },
    (argv) => {
      console.log("Creating a new note...", argv.note);
    }
  )
  .option("tags", {
    alias: "T",
    type: "boolean",
    description: "The tags associated with the note",
  })

  // To get all the notes, i.e., `note all`
  .command(
    "all",
    "Get all notes",
    () => {},
    (argv) => {
      console.log("Getting all notes...");
    }
  )

  // To find a note by text, i.e., `note find "milk"`
  .command(
    "find <note>",
    "Find a matching note",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        describe: "The content to filter by note by",
      });
    },
    (argv) => {
      console.log("Filtering by note...", argv.note);
    }
  )

  // To remove a note by id, i.e., `note remove 234243223432`
  .command(
    "remove <noteId>",
    "Remove a note by id",
    (yargs) => {
      return yargs.positional("noteId", {
        type: "number",
        describe: "The note id to remove from all notes",
      });
    },
    (argv) => {
      console.log("Removing note by id...", argv.noteId);
    }
  )

  // To remove all notes by id, i.e., `note clean`
  .command(
    "clean",
    "Remove all notes",
    () => {},
    (argv) => {
      console.log("Removing all notes");
    }
  )

  // To remove all notes by id, i.e., `note view`
  .command(
    "view [port]",
    "See all notes in the browser window",
    (yargs) => {
      return yargs.positional("port", {
        type: "number",
        describe: "The port to open notes on",
        default: 5000,
      });
    },
    (argv) => {
      console.log("Showing all notes inside a browser", argv.port);
    }
  )
  .parse();
