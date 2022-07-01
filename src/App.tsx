import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./App.module.css"
import { CodeExample } from "./Components/CodeExample";
export function App() {
  const [markdown, setMarkdown] = useState(CodeExample);
  return (
    <div className={styles.App}>
      <div className={styles.Editor}>
        <div>
          <strong>Editor</strong>
        </div>
        <div>
          <textarea 
          id="editor" 
          onChange={(event) => setMarkdown(event.target.value)}
          >{CodeExample}</textarea>
        </div>
      </div>

      <div className={styles.Previewer}>
        <div>
          <strong>Preview</strong>
        </div>
        <div id="preview">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
}
