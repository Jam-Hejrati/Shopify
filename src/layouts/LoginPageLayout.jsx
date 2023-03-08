import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20vh;
`

export default function LoginPageLayout(props){
  return(
      <Layout>
        {props.children}
      </Layout>
  )
}