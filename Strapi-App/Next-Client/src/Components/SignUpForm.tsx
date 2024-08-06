"use client";
import { registerUserAction } from "@/actions/auth-actions";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/Components/ui/card";
import StrapiErrors from "./StrapiErrors";
import SubmitButton from "./SubmitButton";
import ZodErrors from "./ZodErrors";
import { useFormState } from "react-dom";
import Link from "next/link";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null
};

const SignUpForm = () => {

    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

    return (
        <div className="w-full max-w-md">
            <form action={formAction}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>

                        <CardDescription>
                            Enter your details to create a new account
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                            <ZodErrors error={formState?.zodErrors?.username} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                placeholder="name@example.com"
                                id="email"
                                name="email"
                                type="email"
                            />
                            <ZodErrors error={formState?.zodErrors?.email} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                            <ZodErrors error={formState?.zodErrors?.password} />
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col">
                        <SubmitButton
                            className="w-full font-semibold"
                            text="Sign Up"
                            loadingText="Loading"
                        />

                        <StrapiErrors error={formState?.strapiErrors} />
                    </CardFooter>
                </Card>

                <div className="mt-4 text-center text-sm">
                    Have an account?

                    <Link
                        className="underline ml-2"
                        href="/signin"
                    >
                        Sign In
                    </Link>
                </div>
            </form>
        </div>
    )
};

export default SignUpForm;