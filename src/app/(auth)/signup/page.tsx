import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create your Teskel workspace. Free forever for hobbyists.",
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
