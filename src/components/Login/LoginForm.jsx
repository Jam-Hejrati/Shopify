import FormHeader from "@/components/Login/FormHeader";
import FormInputs from "@/components/Login/FormInputs";
import FormButton from "@/components/Login/FormButton";
import LoginPageLayout from "@/layouts/LoginPageLayout";

export default function LoginForm() {
  return (
      <form>
        <LoginPageLayout>
          <FormHeader/>
          <FormInputs/>
          <FormButton/>
        </LoginPageLayout>
      </form>
  )
}