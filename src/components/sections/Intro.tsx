import { ShareCard } from "@/components/sections/ShareCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PrivacySettings } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";

export interface Props {
    privacy: PrivacySettings;
    setPrivacy: Dispatch<SetStateAction<PrivacySettings>>;
    mockData: {
        avatar: string;
        overallMsg: string;
    };
    username: string;
    year: string;
}

export function Intro({ privacy, setPrivacy, mockData, username, year }: Props) {
    return (
        <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center bg-blue-100">
            <ShareCard privacy={privacy} setPrivacy={setPrivacy} />
            <div>
                <div className="flex gap-4 items-center">
                    <Avatar className="w-28 h-28">
                        <AvatarImage src={mockData.avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-7xl text-blue-700">
                        {username}'s
                    </div>
                </div>
                <div className="text-8xl">
                    ANIWRAP {year}
                </div>
                <div className="mt-16 flex flex-col gap-12">
                    <div className="text-4xl">{mockData.overallMsg}</div>
                    <div className="text-3xl">Here are a few of your highlights...</div>
                </div>
            </div>
        </div>
    )
}