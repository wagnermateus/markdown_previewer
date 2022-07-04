import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./App.module.css";
import { CodeExample } from "./Components/CodeExample";
import { BiCollapse, BiExpand } from "react-icons/bi";
export function App() {
  const [markdown, setMarkdown] = useState(CodeExample);
  const [textareaIsMaximized, setTextAreaIsMaximized] = useState(false);
  const [previewerIsMaximized, setPreviewerIsMaximized] = useState(false);
  function maximizeAndMinimizeTextArea() {
    setTextAreaIsMaximized(!textareaIsMaximized);
  }
  function maximizeAndMinimizePreviewer() {
    setPreviewerIsMaximized(!previewerIsMaximized);
  }
  return (
    <div className={styles.App}>
      <div  className={                        
              previewerIsMaximized ?            
                styles.previewerMaximizedTextAreaHidden:
                styles.Editor
            }>
        <div className={styles.boxHeader}>
          <strong>Editor</strong>
          <i onClick={maximizeAndMinimizeTextArea} className={styles.btn}>
            {!textareaIsMaximized ? <BiExpand /> : <BiCollapse />}
          </i>
        </div>
        <div>
          <textarea
            className={
              textareaIsMaximized? 
               styles.maximizedTextArea
                :styles.minimizedTextArea 
            }
            id="editor"
            onChange={(event) => setMarkdown(event.target.value)}
          >
            {CodeExample}
          </textarea>
        </div>
      </div>
      {!textareaIsMaximized && (
        <div className={styles.Previewer}>
          <div className={styles.boxHeader}>
            <strong>Preview</strong>
            <i onClick={maximizeAndMinimizePreviewer} className={styles.btn}>
              {!previewerIsMaximized ? <BiExpand /> : <BiCollapse />}
            </i>
          </div>
          <div id="preview">
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      )}
    </div>
  );
}
