import * as vscode from "vscode";

import { downloadAndExtract } from "./commands/fetch";
import { updateTaskbar } from "./commands/updateTaskbar";
import { AssayTreeDataProvider } from "./views/sidebarView";
import { WelcomeView } from "./views/welcomeView";

export async function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand("assay.review", async function (url: string) {
    vscode.env.openExternal(vscode.Uri.parse(url));
  });

  vscode.commands.registerCommand("assay.welcome", () => {
    WelcomeView.createOrShow(context.extensionUri);
  });

  const sidebar = vscode.window.createTreeView("assayCommands", {
    treeDataProvider: new AssayTreeDataProvider(),
  });

  context.subscriptions.push(
    downloadAndExtract,
    sidebar,
    vscode.window.onDidChangeActiveTextEditor(updateTaskbar)
  );
}

export function deactivate() {
  // Nothing to do yet
}
