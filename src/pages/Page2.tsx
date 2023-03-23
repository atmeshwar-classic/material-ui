import MyPaper from "../components/MyPaper/MyPaper";
export const myPageStyle = {
  margin: "auto",
  width: "90vw",
  height: "80vh",
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
};

const Page2 = () => {
  return (
    <div style={myPageStyle}>
      <MyPaper />
    </div>
  );
};

export default Page2;
