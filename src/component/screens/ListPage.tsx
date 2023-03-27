import styled from "@emotion/styled";
import CustomTab from "../CustomTab/CustomTab";

const StyledDiv = styled("div")`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const ListPage = (): JSX.Element => {
  return (
    // <div  style={{display: "flex", justifyContent: "center", margin: "20px"}}>
    <StyledDiv>
      <CustomTab />
    </StyledDiv>
  );
};

export default ListPage;
