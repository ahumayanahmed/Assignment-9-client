"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.signIn.email({
      email: form.email,
      password: form.password,
    });

    if (data) {
      window.location.href = "/";
    } else {
      alert(error?.message || "Login failed");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-3">
        <h1 className="text-2xl font-bold">Login</h1>
        <p>Welcome back</p>
      </div>

      <Card className="border rounded-none p-4">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">

          {/* EMAIL */}
          <TextField isRequired name="email">
            <Label>Email</Label>
            <Input
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="john@example.com"
            />
            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField isRequired name="password">
            <Label>Password</Label>
            <Input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              placeholder="Enter password"
            />
            <FieldError />
          </TextField>

          {/* SUBMIT */}
          <Button
            className="rounded-none w-full bg-cyan-500"
            type="submit"
          >
            Login
          </Button>
        </Form>

        <div className="flex items-center gap-3 my-4">
          <Separator />
          <div className="whitespace-nowrap">Or continue with</div>
          <Separator />
        </div>

        <Button
          onClick={handleGoogleSignin}
          className="w-full rounded-none"
          variant="outline"
        >
          <FcGoogle className="mr-2" />
          Google Login
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;