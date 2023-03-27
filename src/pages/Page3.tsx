import MyTabs from "../components/myTabs/MyTabs";
import { MyPage } from "../styles/styles";

const Page3 = () => {
  return (
    <MyPage
      sx={{ alignItems: "top!important", justifyContent: "left!important" }}
    >
      <MyTabs />
    </MyPage>
  );
};

export default Page3;
