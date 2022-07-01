import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeExample } from "./Components/CodeExample";
export function App() {
  const [markdown, setMarkdown] = useState(CodeExample);
  return (
    <div>
      <div>
        <div>
          <strong>Editor</strong>
        </div>
        <div>
          <textarea 
          id="editor" 
          onChange={(event) => setMarkdown(event.target.value)}
          name="txt" 
          >{CodeExample}</textarea>
        </div>
      </div>

      <div>
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
