import { Box, Button } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import React from "react";
import { InputField } from "src/components/InputField";
import { Wrapper } from "src/components/Wrapper";
import { toErrorMap } from "src/utils/toErrorMap";
import login from "../login";

const ResetPassword: NextPage<{ token: string }> = ({ token }) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          //   const response = await login(values);
          //   if (response.data?.login.errors) {
          //     setErrors(toErrorMap(response.data.login.errors));
          //   } else if (response.data?.login.user) {
          //     // logged in!
          //     router.push("/");
          //   }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="new password"
              label="New Password"
              type="password"
            />

            <Button
              mt={4}
              variantColor="teal"
              type="submit"
              isLoading={isSubmitting}
            >
              reset password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

ResetPassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ResetPassword;
