module.exports = (componentName) => ({
  content: `import React from "react";

const ${componentName} = (props) => (
  <div></div>
);

export default ${componentName};

`,
  extension: `.jsx`
});
