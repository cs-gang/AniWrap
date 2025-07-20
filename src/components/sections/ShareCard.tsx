import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button"
import { Dispatch, SetStateAction } from "react";
import { PrivacySettings } from "@/lib/types";

interface Props {
    privacy: PrivacySettings;
    setPrivacy: Dispatch<SetStateAction<PrivacySettings>>;
}

export function ShareCard({ privacy, setPrivacy }: Props) {
    return (
        <div className="absolute top-8 right-8 flex flex-col gap-2 bg-gray-400/20 p-4 px-8 rounded-md shadow-xl w-2/12">
            <p className="text-lg">Privacy: <span className="text-blue-600">{privacy}</span></p>
            <Select value={privacy} onValueChange={(value) => setPrivacy(value as PrivacySettings)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Privacy Setting" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            {privacy === 'private' && <div className="w-fit text-sm">Change privacy setting to share your aniwrap</div>}
            <Button>Share</Button>
        </div>
    )
}