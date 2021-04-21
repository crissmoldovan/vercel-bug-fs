import fs from "fs";

const Index = ({ data }) => (
  <div>
    HELLO
    <p>data:</p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export const getServerSideProps = async ({ req }) => {
  if (false) {
    const content = fs.readFileSync("/some path");
  }

  return {
    props: {
      data: {
        test: true,
      },
    },
  };
};
export default Index;
