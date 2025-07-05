'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function UsernameInput() {
    const router = useRouter()

    const handleSubmit = () => {
        router.push('/wrapped/alpha/2024')
    }

    return (
        <div className="flex w-full max-w-sm items-center gap-2 mt-4">
            <Input type="email" placeholder="Enter your mal/anilist username" className="text-center" />
            <Button type="submit" variant="outline" onClick={handleSubmit}>
                Enter
            </Button>
        </div>
    )
}

