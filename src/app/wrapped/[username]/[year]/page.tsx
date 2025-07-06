import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default async function Wrapped({ params }: { params: Promise<{ username: string, year: string }> }) {
    const { username, year } = await params

    const mockData = {
        avatar: "https://github.com/shadcn.png",
        overallMsg: "This year, you watched a variety of different anime!"
    }

    return (
        <Carousel orientation="vertical">
            <CarouselContent>
                <CarouselItem>
                    <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center">
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
                </CarouselItem>
                <CarouselItem>
                    <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center bg-blue-200">
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
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}
