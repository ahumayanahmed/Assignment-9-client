"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      image: form.image,
    });

    if (data) {
    toast.success("Account created successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);

  } else {
    toast.error(error?.message || "Signup failed");
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
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p>Start your adventure with Wanderlust</p>
      </div>

      <Card className="border rounded-none p-4">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          
          {/* NAME */}
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <FieldError />
          </TextField>

          {/* IMAGE */}
          <TextField name="image">
            <Label>Image URL</Label>
            <Input
              placeholder="Image url"
              value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.value })
              }
            />
            <FieldError />
          </TextField>

          {/* EMAIL */}
          <TextField isRequired name="email">
            <Label>Email</Label>
            <Input
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField isRequired name="password">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <Description>
              Must be 8+ chars with uppercase & number
            </Description>
            <FieldError />
          </TextField>

          {/* SUBMIT */}
          <Button
            className="rounded-none w-full bg-cyan-500"
            type="submit"
          >
            Create Account
          </Button>
        </Form>

        <div className="flex items-center gap-3 my-4">
          <Separator />
          <div className="whitespace-nowrap">Or sign up with</div>
          <Separator />
        </div>

        <Button
          onClick={handleGoogleSignin}
          className="w-full rounded-none"
          variant="outline"
        >
          <FcGoogle className="mr-2" />
          Sign up with Google
        </Button>
      </Card>
    </div>
  );
};

export default SignUpPage;