import Image from "next/image"
import Link from "next/link"
import { Command } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { LoginForm } from "./LoginForm"

export default function AuthenticationPage() {
    return (
        <>
        <div className="fixed inset-0 z-[100] hidden h-[800px] bg-white flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div
                className="absolute inset-0 bg-cover"
                style={{
                backgroundImage:
                    "url(https://theimpression.com/wp-content/uploads/2018/10/balenciaga-atm-rs19-3229.jpg)",
                }}
            />
            <div className="relative z-20 flex items-center text-lg font-medium">
                <Command className="mr-2 h-6 w-6" /> Pioreer Ange
            </div>
            </div>
            <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Login
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email and password to log in
                </p>
                </div>
                <LoginForm />
            </div>
            </div>
        </div>
        </>
    )
}