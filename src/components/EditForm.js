import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function EditForm() {
  const [code, setCode] = useState(`img { }`);

  function handleSubmit(e) {
    e.preventDefault();
    const userCode = { code };
    const regex = /\{}.+?}\]/;
    userCode.match(regex);
    setCode(userCode);
    console.log(userCode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Editor
        className="code-editor"
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={20}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          border: "1px solid rgba(0, 0, 0, 0.8)",
        }}
      />
      <button>Submit</button>
    </form>
  );
}
