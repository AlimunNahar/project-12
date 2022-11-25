const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -PureSnuggle`;
  }, [title]);
};
export default useTitle;
