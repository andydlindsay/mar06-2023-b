import useRequest from "../hooks/useRequest";

const Request = () => {
  const url = 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';
  const {loading, data} = useRequest(url);

  return (
    <div>
      <h2>Request component</h2>
      { loading && <h2>Spinner...</h2> }
      { data && <h2>Num Recipes: {data.length}</h2> }
    </div>
  );
};

export default Request;
