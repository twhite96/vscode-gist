interface Notify {
  error(...messages: string[]): void;
  info(...messages: string[]): void;
}

interface Input {
  prompt(message: string, defaultValue?: string): Promise<string>;
  quickPick(list: Gist[]): Promise<QuickPickGist | undefined>;
}

interface GistDetails {
  content: string;
  filename: string;
  id: string;
  language: string;
  path: string;
}

interface Files {
  extractTextDocumentDetails(
    doc: GistTextDocument,
    editor?: TextEditor
  ): GistDetails;
  filesSync(
    token: string,
    files: { [x: string]: { content: string } }
  ): string[];
  fileSync(token: string, filename: string, content: string): string;
  getFileName(doc: GistTextDocument): string;
}

interface Utils {
  files: Files;
  input: Input;
  notify: Notify;
}
