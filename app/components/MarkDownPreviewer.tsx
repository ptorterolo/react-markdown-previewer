'use client'

import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import xss from 'xss';


const MarkdownPreviewer = () => {
const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
># Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [text, setText] = useState(defaultMarkdown);
  const [html, setHtml] = useState<string | null>(null);

  const handleChange = (event:any) => {
    setText(event.target.value);
  };
  marked.use({ breaks: true, gfm: true});
  
  //const html = marked.parse(text);
  useEffect(() => {
    const generateHtml = async () => {
      const result = await marked.parse(text);
      setHtml(result);
    };
  
    generateHtml();
  }, [text]);
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

      <textarea id="editor" className='textarea min-h-96 w-full' value={text} onChange={handleChange} />
       <div className='bg-white rounded p-4 min-h-screen overflow-auto w-full markdown' id="preview" dangerouslySetInnerHTML={{ __html: html || '' }} />
      </div>
        
    </div>
  );
};

export default MarkdownPreviewer;