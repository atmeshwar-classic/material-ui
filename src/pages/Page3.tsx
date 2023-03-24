import MyTabs from "../components/myTabs/MyTabs";
import { myPageStyle } from "./Page2";

const Page3 = () => {
  let myPageStyle1 = {
    ...myPageStyle,
    alignItems: "top",
    justifyContent:'left'
  };
  return (
    <div style={myPageStyle1}>
      <MyTabs />
    </div>
  );
};

export default Page3;
