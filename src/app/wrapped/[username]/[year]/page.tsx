'use client'

import { Intro } from "@/components/sections/Intro";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { PrivacySettings } from "@/lib/types";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Wrapped({ params }: { params: Promise<{ username: string, year: string }> }) {
    const { username, year } = useParams()

    const [privacy, setPrivacy] = useState<PrivacySettings>('private')

    const mockData = {
        avatar: "https://github.com/shadcn.png",
        overallMsg: "This year, you watched a variety of different anime!"
    }

    const apiMockData = {
        "n": 17,
        "n_completed": 7,
        "n_ongoing": 10,
        "n_dropped": 0,
        "n_episodes": 53,
        "avg_score": 9.242857142857144,
        "scores_valid": true,
        "first_completed": {
            "media_id": "176496",
            "completed_at": "2025-03-29"
        },
        "last_completed": {
            "media_id": "154967",
            "completed_at": "2025-07-12"
        },
        "genre_counts": [
            {
                "group": "Drama",
                "count": 11
            },
            {
                "group": "Romance",
                "count": 10
            },
            {
                "group": "Comedy",
                "count": 9
            },
            {
                "group": "Supernatural",
                "count": 9
            },
            {
                "group": "Psychological",
                "count": 7
            },
            {
                "group": "Slice of Life",
                "count": 5
            },
            {
                "group": "Action",
                "count": 4
            },
            {
                "group": "Mystery",
                "count": 2
            },
            {
                "group": "Sci-Fi",
                "count": 2
            },
            {
                "group": "Adventure",
                "count": 1
            },
            {
                "group": "Fantasy",
                "count": 1
            },
            {
                "group": "Thriller",
                "count": 1
            },
            {
                "group": "Horror",
                "count": 1
            },
            {
                "group": "Ecchi",
                "count": 1
            },
            {
                "group": "Music",
                "count": 1
            }
        ],
        "decade_counts": [
            {
                "group": "2010",
                "count": 2
            },
            {
                "group": "2020",
                "count": 15
            }
        ],
        "format_counts": [
            {
                "group": "MOVIE",
                "count": 3
            },
            {
                "group": "TV",
                "count": 14
            }
        ],
        "anime": {
            "101291": {
                "media_id": 101291,
                "title": "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n101291-fqIUvQ6apEtD.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101291-wfEdgPqtfU0l.jpg",
                "description": "There's a rumor about a mysterious phenomenon called \"puberty syndrome.\" For example, Sakuta Azusagawa is a high school student who suddenly sees a bunny girl appear in front of him. The girl is actually a girl named Mai Sakurajima, who is Sakuta's upperclassman who is also a famous actress who has gone on hiatus from the entertainment industry. For some reason, the people around Mai cannot see her bunny-girl figure. Sakuta sets out to solve this mystery, and as he spends time with Mai, he learns her secret feelings. Other heroines who have \"puberty syndrome\" start to appear in front of Sakuta.<br><br>\n(Source: Anime News Network)",
                "average_score": 81,
                "mean_score": 81,
                "episodes": 13,
                "genres": [
                    "Comedy",
                    "Drama",
                    "Mystery",
                    "Psychological",
                    "Romance",
                    "Supernatural"
                ],
                "season": "FALL",
                "season_year": 2018,
                "site_url": "https://anilist.co/anime/101291",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "104157": {
                "media_id": 104157,
                "title": "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104157-PS7tfPpvJKhk.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx104157-rk99XI56PaIC.jpg",
                "description": "In Fujisawa, where the skies are bright and the seas glisten, Sakuta Azusagawa is in his second year of high school. His blissful days with his girlfriend and upperclassman, Mai Sakurajima, are interrupted with the appearance of his first crush, Shouko Makinohara. For reasons unknown, he encounters two Shouko's: one in middle school and another who has become an adult.\n<br>\n<br>\nAs Sakuta finds himself helplessly living with the Shouko's, the adult Shouko leads him around by the nose, causing a huge rift in his relationship with Mai.\n<br>\n<br>\nIn the midst of all of this, he discovers that the middle school Shouko is suffering from a grave illness and his scar begins to throb...\n<br>\n<br>\n(Source: Aniplex USA)",
                "average_score": 84,
                "mean_score": 84,
                "episodes": 1,
                "genres": [
                    "Drama",
                    "Psychological",
                    "Romance",
                    "Supernatural"
                ],
                "season": "SPRING",
                "season_year": 2019,
                "site_url": "https://anilist.co/anime/104157",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "114232": {
                "media_id": 114232,
                "title": "Hige wo Soru. Soshite Joshikousei wo Hirou.",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114232-lWTVDRDLqAH1.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx114232-2rm50ZD1cQgP.jpg",
                "description": "On his way home from drinking his sorrows away after being rejected by his crush, the 26 year old salaryman, Yoshida, finds a high school girl named Sayu sitting on the side of the road. Yoshida is completely drunk out of his mind and ends up letting Sayu stay at his place overnight. Not having the heart to put Sayu out on the streets since she ran away from home, Yoshida allows her to stay at his place... And so began the awkward, irritable, and slightly heartwarming relationship between a runaway high school girl and a salaryman living together.<br>\n<br>\n(Source: Crunchyroll)",
                "average_score": 70,
                "mean_score": 70,
                "episodes": 13,
                "genres": [
                    "Drama",
                    "Romance",
                    "Slice of Life"
                ],
                "season": "SPRING",
                "season_year": 2021,
                "site_url": "https://anilist.co/anime/114232",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "130003": {
                "media_id": 130003,
                "title": "Bocchi the Rock!",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-FEBlngeJSTEm.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx130003-HTDmeL4RGeJ4.png",
                "description": "Hitori Gotou, “Bocchi-chan,” is a girl who’s so introverted and shy around people that she’d always start her conversations with “Ah...”<br>\n<br>\nDuring her middle school years, she started playing the guitar, wanting to join a band because she thought it could be an opportunity for even someone shy like her to also shine. But because she had no friends, she ended up practicing guitar for six hours every day all by herself. After becoming a skilled guitar player, she uploaded videos of herself playing the guitar to the internet under the name “Guitar Hero” and fantasized about performing at her school’s cultural festival concert. But not only could she not find any bandmates, before she knew it, she was in high school and still wasn’t able to make a single friend!<br>\n<br>\nShe was really close to becoming a shut-in, but one day, Nijika Ijichi, the drummer in Kessoku Band, reached out to her. And because of that, her everyday life started to change little by little...<br>\n<br>\n(Source: Crunchyroll)",
                "average_score": 87,
                "mean_score": 87,
                "episodes": 12,
                "genres": [
                    "Comedy",
                    "Music",
                    "Slice of Life"
                ],
                "season": "FALL",
                "season_year": 2022,
                "site_url": "https://anilist.co/anime/130003",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "143866": {
                "media_id": 143866,
                "title": "Jaku-Chara Tomozaki-kun 2nd STAGE",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/143866-dfIeGq0O9im5.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx143866-75E3G6nYEUVr.jpg",
                "description": "The second season of <i>Jaku-Chara Tomozaki-kun</i>.",
                "average_score": 70,
                "mean_score": 70,
                "episodes": 13,
                "genres": [
                    "Comedy",
                    "Drama",
                    "Romance",
                    "Slice of Life"
                ],
                "season": "WINTER",
                "season_year": 2024,
                "site_url": "https://anilist.co/anime/143866",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "149118": {
                "media_id": 149118,
                "title": "Enen no Shouboutai: San no Shou",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/149118-neeUO11QUL0R.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx149118-AOQb0xuTssGl.jpg",
                "description": "The third season of <i>Enen no Shouboutai</i>.<br><br>\nShinra and the team are about to uncover the world’s greatest secret. But just as the other Special Fire Force Companies unite to face the looming disaster, Obi is captured by the Tokyo Imperial Army, and Company 8 is branded as traitors. Hunted by the Empire, they must fight alone to rescue Obi and stop the Evangelist—all while a new assassin and the corrupt Captain Burns block their path.<br><br>\n(Source: Crunchyroll)",
                "average_score": 78,
                "mean_score": 78,
                "episodes": 12,
                "genres": [
                    "Action",
                    "Drama",
                    "Sci-Fi",
                    "Supernatural"
                ],
                "season": "SPRING",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/149118",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "151514": {
                "media_id": 151514,
                "title": "Chi. Chikyuu no Undou ni Tsuite",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151514-mwWSGTynCLkl.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx151514-Y0d82Ah2ZOHX.jpg",
                "description": "The setting is 15th-century Europe. It was a time when heretical ideas lead those to who possessed such a mindset to being burned at the stake for their beliefs.<br><br>\n\nThe protagonist, Rafał, a child prodigy, is expected to major in theology, the most important subject at the time, at the university where he plans to skip a grade. One day, however, he comes across a mysterious man, and is now studying a possible \"truth\" in the midst of heretical thought!<br><br>\n(Source: Shogakukan, translated)",
                "average_score": 86,
                "mean_score": 86,
                "episodes": 25,
                "genres": [
                    "Drama"
                ],
                "season": "FALL",
                "season_year": 2024,
                "site_url": "https://anilist.co/anime/151514",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "154768": {
                "media_id": 154768,
                "title": "Sono Bisque Doll wa Koi wo Suru Season 2",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154768-EuZd63IcqsVq.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx154768-DHHvNd4MjV1p.jpg",
                "description": "The second season of <i>Sono Bisque Doll wa Koi wo Suru</i>.\n<br><br>\nWhen Marin Kitagawa and Wakana Gojo met, they grew close over their love for cosplay. Through interacting with classmates and making new cosplay friends, Marin and Wakana’s world keeps growing. New developments arise as Marin’s love for Wakana continues to be filled with endless excitement. In their ever-expanding world, Marin and Wakana’s story of cosplay and thrills continues!<br><br>\n(Source: Crunchyroll)",
                "average_score": 82,
                "mean_score": 83,
                "episodes": 12,
                "genres": [
                    "Comedy",
                    "Ecchi",
                    "Romance",
                    "Slice of Life"
                ],
                "season": "SUMMER",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/154768",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "154967": {
                "media_id": 154967,
                "title": "Seishun Buta Yarou wa Odekake Sister no Yume wo Minai",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154967-uUEtnP9NOTGu.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx154967-W9cIm0qlz6fj.jpg",
                "description": "<i>WHAT WILL IT TAKE TO MAKE HER WISH COME TRUE?</i><br>\n<br>\nAfter a draining December, Sakuta is quickly nearing the end of his second year of high school. Since Mai is a third-year student, they don’t have much time left together before graduation rolls around. Meanwhile, his sister, Kaede, is slowly but steadily venturing outdoors again. Just as she begins to find her footing, she announces her most ambitious goal yet—attending her brother’s high school! Sakuta knows better than anyone how difficult this will be for Kaede, and he’s ready to support her however he can. He’s just not sure if that’s what’s best for her…or what she really wants…<br>\n<br>\n(Source: Yen Press)",
                "average_score": 79,
                "mean_score": 79,
                "episodes": 1,
                "genres": [
                    "Drama",
                    "Psychological",
                    "Supernatural"
                ],
                "season": "SPRING",
                "season_year": 2023,
                "site_url": "https://anilist.co/anime/154967",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "161474": {
                "media_id": 161474,
                "title": "Seishun Buta Yarou wa Randoseru Girl no Yume wo Minai",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/161474-QHw3Y93gLwkE.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx161474-ZDfmmlJQQngN.jpg",
                "description": "March begins, and there is only one month left in the third term. Sakuta Azusagawa is about to celebrate the graduation of his girlfriend Mai Sakurajima. As he waits for Mai at Shichirigahama beach, an elementary school-aged girl who looks like Mai did when she was a child actress appears in front of him. While reflecting on this mysterious encounter, he receives a phone call from his father. Kaede’s mother never came to terms with what happened to Kaede. Having been hospitalized for so long, their mother finally wants to see her daughter. To fulfill their mother’s wish, Sakuta makes the decision to meet face-to-face–something they haven’t done in a long time. He’s unable to hide his nervousness about all this. Never-before-seen scars begin to appear on Sakuta’s body. Could these be warning signs of a new type of puberty syndrome?<br><br>\n(Source: Fathom Events)",
                "average_score": 83,
                "mean_score": 83,
                "episodes": 1,
                "genres": [
                    "Drama",
                    "Psychological",
                    "Romance",
                    "Supernatural"
                ],
                "season": "FALL",
                "season_year": 2023,
                "site_url": "https://anilist.co/anime/161474",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "171046": {
                "media_id": 171046,
                "title": "Seishun Buta Yarou wa Santa Claus no Yume wo Minai",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/171046-PjeeUUfeaVyR.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx171046-9leqLiNuOqNu.png",
                "description": "Sequel to the film <i>Seishun Buta Yarou wa Randoseru Girl no Yume wo Minai</i>.\n<br><br>\n After encountering various girls going through Puberty Syndrome, Sakuta Azusagawa's high school days have come to a close, and he is now a university student. He enrolls at a university in Kanazawa-hakkei alongside his girlfriend Mai Sakurajima, a nationally famed actress. Off campus, he stumbles upon an out-of-season miniskirt Santa. Precognitive dreams, an anonymous online singer, poltergeists buzzing on social media... A mysterious tale with enigmatic phenomenons surrounding girls with wavering hearts starts again. Puberty continues...\n<br><br> \n(Source: Crunchyroll)",
                "average_score": 81,
                "mean_score": 82,
                "episodes": 13,
                "genres": [
                    "Comedy",
                    "Psychological",
                    "Romance",
                    "Supernatural"
                ],
                "season": "SUMMER",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/171046",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "175914": {
                "media_id": 175914,
                "title": "Yofukashi no Uta Season 2",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/175914-K0Hw6bg3Tf5i.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx175914-VsbL90WzuqoM.jpg",
                "description": "The second season of <i>Yofukashi no Uta</i>.\n<br><br>\nKo overcomes his confusion about becoming a vampire and decides to \"like\" Nazuna, while Nazuna resolves to make Ko \"fall in love\" with her. Without understanding what \"love\" even is, the two of them spend their nights together in a frenzy. Meanwhile, Detective Uguisu Anko is closing in with her plot to kill vampires, not just Nazuna. A vampire's weakness is \"anything they were attached to when they were human\" and so they all try to get rid of this weakness before it's too late. But, Nazuna has no memory of her human life. What is Nazuna's hidden past? Why did Anko start killing vampires? And what is the \"secret\" that Nazuna and Anko share? For Ko, Nazuna, Anko, a fun \"late night\" doesn't end here... a new \"night\" begins!\n<br><br>\n(Source: HIDIVE)",
                "average_score": 80,
                "mean_score": 81,
                "episodes": 12,
                "genres": [
                    "Comedy",
                    "Psychological",
                    "Romance",
                    "Slice of Life",
                    "Supernatural"
                ],
                "season": "SUMMER",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/175914",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "176496": {
                "media_id": 176496,
                "title": "Ore dake Level Up na Ken: Season 2 - Arise from the Shadow",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/176496-5oY4k2NRqlYs.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx176496-9BDMjAZGEbq4.png",
                "description": "The second season of <i>Solo Leveling</i>.<br><br>\nMastering his new abilities in secret, Jin-U must battle humanity's toughest foes to save his mother.<br><br>\n\n(Source: Crunchyroll News)",
                "average_score": 86,
                "mean_score": 86,
                "episodes": 13,
                "genres": [
                    "Action",
                    "Adventure",
                    "Fantasy"
                ],
                "season": "WINTER",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/176496",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "177689": {
                "media_id": 177689,
                "title": "Hikaru ga Shinda Natsu",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/177689-hbCQDYraujAG.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx177689-d0mB5nYgdnhi.jpg",
                "description": "Two best friends living in a rural Japanese village: Yoshiki and Hikaru. Growing up together, they were inseparable… until the day Hikaru came back from the mountains, and was no longer himself. “Something” has taken over Hikaru’s body, memories, feelings… and everything they know begins to unravel.<br>\n<br>\n(Source: Netflix)",
                "average_score": 79,
                "mean_score": 80,
                "episodes": 12,
                "genres": [
                    "Horror",
                    "Mystery",
                    "Psychological",
                    "Supernatural",
                    "Thriller"
                ],
                "season": "SUMMER",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/177689",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "178680": {
                "media_id": 178680,
                "title": "WIND BREAKER Season 2",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/178680-9HupCDo647QU.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx178680-nIAhCizY46ZU.jpg",
                "description": "The second season of <i>WIND BREAKER</i>.<br><br>\n\nWelcome back to Furin High School, an institution infamous for its population of brawny brutes who solve every conflict with a show of strength. Some of the students even formed a group, Bofurin, which protects the town. Haruka Sakura, a first-year student who moved in from out of town, is only interested in one thing: fighting his way to the top! <br><br>\n\n(Source: Crunchyroll, edited)",
                "average_score": 78,
                "mean_score": 78,
                "episodes": 12,
                "genres": [
                    "Action",
                    "Comedy",
                    "Drama"
                ],
                "season": "SPRING",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/178680",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "181444": {
                "media_id": 181444,
                "title": "Kaoru Hana wa Rin to Saku",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/181444-SBhwJNPxjHrr.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx181444-Ut9DDUZdfHwg.jpg",
                "description": "Chidori High is a boys’ school that takes in the dregs of society with the lowest grades. Next door stands Kikyo Girls’ High, where the wealthy, high-class families send their precious daughters. Chidori second-year Rintaro, who has a fierce face but a gentle heart, is helping at his family’s patisserie when he meets a girl named Kaoruko. The two hit it off right away…but this blissful peace is quickly disturbed when Rintaro discovers that Kaoruko is actually a student at Kikyo. Worse, she doesn’t seem to realize what a huge problem this really is! Will these two be able to forge a path for themselves, and sidestep the traps (metaphorical and literal) laid by their classmates?\n<br><br>\n(Source: Kodansha USA)",
                "average_score": 86,
                "mean_score": 87,
                "episodes": 13,
                "genres": [
                    "Comedy",
                    "Drama",
                    "Romance"
                ],
                "season": "SUMMER",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/181444",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            },
            "185660": {
                "media_id": 185660,
                "title": "Dandadan 2nd Season",
                "banner_url": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/185660-2yfXorZxyKJV.jpg",
                "cover_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx185660-uB8RUMBGovGr.jpg",
                "description": "The second season of <i>Dandadan</i>.<br><br> Okarun and Jiji have made a strange discovery, while Momo finds herself under attack! What mysterious encounters await them next?!<br><br>\n\n(Source: Netflix Anime Twitter)\n<br><br>\n<i>Notes: <br>\n- Worldwide premiere of Episodes 1-3 titled as <b>DAN DA DAN: EVIL EYE</b> before the Japanese premiere was pre-screened in advance in theaters on June 6, 2025 in North America by GKIDS Films and June 7 and 8 in Europe by Piece of Magic Entertainment and Animation Digital Network.</i>",
                "average_score": 82,
                "mean_score": 82,
                "episodes": 12,
                "genres": [
                    "Action",
                    "Comedy",
                    "Drama",
                    "Romance",
                    "Sci-Fi",
                    "Supernatural"
                ],
                "season": "SUMMER",
                "season_year": 2025,
                "site_url": "https://anilist.co/anime/185660",
                "is_adult": false,
                "is_favourite": false,
                "type": "ANIME"
            }
        }
    }

    return (
        <Carousel orientation="vertical">
            <CarouselContent>
                <CarouselItem>
                    <Intro privacy={privacy} setPrivacy={setPrivacy} mockData={mockData} username={username as string} year={year as string} />
                </CarouselItem>
                <CarouselItem>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}
