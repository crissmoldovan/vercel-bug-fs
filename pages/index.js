import { getData } from "../lib";

const Index = ({ data }) => (
  <div>
    HELLO
    <p>data:</p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export const getServerSideProps = async ({ req }) => {
  const data = getData();

  return {
    props: {
      data,
    },
  };
};
export default Index;
