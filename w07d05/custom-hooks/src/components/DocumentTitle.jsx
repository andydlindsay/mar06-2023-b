// import { useEffect } from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  const title = 'does this work?';

  useDocumentTitle(title);

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  return (
    <div>
      <h2>Document title component</h2>
    </div>
  );
};

export default DocumentTitle;