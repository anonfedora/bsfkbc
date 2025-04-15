import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Image from "next/image";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  date: string;
}

function GalleryItem({ imageUrl, title, date }: GalleryItemProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative group">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </Card>
  );
}

export default function GalleryPage() {
  const galleryItems = [
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/486138250_664417159609801_3061242768304579367_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG35LBr3WJFyXWnxLtYtOO1XF7iGEkef15cXuIYSR5_Xv3dWpR5-uvREoQ0pEN5SvCqLpBpGrdl0gosWtC0VKr_&_nc_ohc=01GqnrIAgfUQ7kNvwHzjx-K&_nc_oc=AdnHGt0DzAH-Dagk2YND2fFFVJ5uPHuAzPXHszTFk_42sUlUHH3nGlOsOFmu_4ihOzI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=GFyCWL2KriLiIMAfWcAncw&oh=00_AfGsFXIQDxVC4ouP0HLvHYM6dKmovDrywT0kg3oLUfiSnQ&oe=6804508C",
      title: "New Year Praise Night",
      date: "January 19, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489822700_676424978409019_2286318064618864593_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEgSlyAqUm0i2vbEEmyBkj0jXex0F_og3qNd7HQX-iDepyC2_dV9UiSqk7-kFh7fPnt0wg9ikHTG1GGBMBE6cIH&_nc_ohc=le8yQ5rU9_wQ7kNvwEdQLjb&_nc_oc=Admm0pZr_LUGEt6oyEXbAQ_A3pGPy86vYCzEeHsclWivnaEXB8kEqgUiB19hJ-alY6w&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=3oFZZeubQ17ZtfZzl89AgA&oh=00_AfFTk5JILJZ3TK1S-8Jg-0wgUytoVPVU3IXg6E6sX5mvNA&oe=68046548",
      title: "Youth Conference",
      date: "November 13, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489674381_676422395075944_5404512004159338138_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGIh4qtOsV6WZFNCsfV0qdyz40zaiVOvcjPjTNqJU69yDeDNHiysC-DQBOhJrRdy2zerHHeJ_ltw2Vjy2v1vC7i&_nc_ohc=3k__o1Sj_4YQ7kNvwHDmiWd&_nc_oc=AdncYhRhgYP9ftIviSXGtddMiAWiEU98O_WUyseZV8HHmPEUy0BgdTDJin7mtNCh1cE&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=3oFZZeubQ17ZtfZzl89AgA&oh=00_AfF9Zd8hWS43ZrQ6N_JV5h3eLGcbSnklAged1f9UYIFCvQ&oe=68043967",
      title: "Missionary Summit",
      date: "December 13, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490042243_676425275075656_5571393341531137461_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFIc7fWNgZNQoe3NeqHgrChDAx1M6wHhg8MDHUzrAeGDyW5P8jaQ_1HMM3P4s5PCjdX87Dw5k85-YOGy5Jbhonn&_nc_ohc=-5VrsbxWFzkQ7kNvwEWkhPJ&_nc_oc=AdkJ6KjfndqSjQIszvhAOzaAxrIKk0KYhyMiQk1QczHieb6uep6YvARfQnKWEbnN3SU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=-rgVRF2tD4TKtcOFj79Fbg&oh=00_AfGiHLtQWPyAfqOxtCwlQLk6X3XY5ZRAbCEG25xleDLxVg&oe=680449DE",
      title: "Annual Convention",
      date: "January 4, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489699827_676421018409415_6004928514468697145_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGUglBtS_g7ImVarv-FuxzGZqDvtqwhXFtmoO-2rCFcW60AmlBy18RAEodyXF0ot-RUdLZdpLD9DOu8Ec20Qk4Q&_nc_ohc=EXZnbv5puNMQ7kNvwGewUm-&_nc_oc=AdlgJxfbVDJXDvaR4huNn-wEgzD0rcbQQB9z_sxYa1PSiP9z5BhDnu8b50UdhRj2C0M&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=-rgVRF2tD4TKtcOFj79Fbg&oh=00_AfHwTU8eNY8D_h79mEYUvtZcYh3IhOqkHf_290vs6a4CgA&oe=68044257",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489785775_676424835075700_7319742759826009632_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHqLdGx_k9JYDN8Px2hFRplHPuTz8Xrogcc-5PPxeuiB4I6Kyhqesovj30b0N0qgUwUWnNVxNVaTLgyfItVCQWV&_nc_ohc=rlGIF1z5wIsQ7kNvwEpjQw2&_nc_oc=Adla0abPeU62A9GqF38fAG8YNiIGw6CYzRdj_ivZ-vj2KdrHK88Mj7I3gpKJH-DcvFE&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=-rgVRF2tD4TKtcOFj79Fbg&oh=00_AfHqlBuX6CzBh5QVNCJhhrwOs6MtQTw_Xal_OByn-qXysw&oe=68043ED1",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490303757_676422728409244_4152942309447468698_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEMp6IkTbbBlPR_nBUe5kwIKdsBQK1OCzUp2wFArU4LNYuXMxmna6RZ0xx-szbtqEBMizHHP8iNAFkms6slBApx&_nc_ohc=a6RH2fKXPIYQ7kNvwFQyGrR&_nc_oc=Adm3T5YrPDp3x869OVN0Vk99rhrJqtuJyoEcCPsCsGnM8IixOUHtbEXBv5PFvdRVoWc&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=-rgVRF2tD4TKtcOFj79Fbg&oh=00_AfEi6aRTDIYSzOd6tMBrQThYxXKKzhuBXuOuxWudZre9cg&oe=68044424",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489787659_676424425075741_3497589078796227962_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFIcsW7JRayeRLLqvcQkZAu7_OL2KXfn1jv84vYpd-fWNN3g3EX_0BwUFKP4bijZM5nKJRgu8McrriXDtCE6Yec&_nc_ohc=TTqeqL67EYEQ7kNvwGsi6kM&_nc_oc=AdlDnsal1z0b2LX0ksyQPPjlxpakqDzWexfQ3-0N58CeaFfS513Ps1b8Vv7OfcK0TB0&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=gNYMMCDPkZlwySL4TkuQmQ&oh=00_AfFxyVlqH27xlwRErYy2SU8-r77ChadkEUfpR206jOkdFA&oe=68047467",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489568073_676420258409491_6727063254822632924_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEWJNgAnOW3KSiuFt73cKK-I0ymIshnBacjTKYiyGcFpzSQN6cH9b0vQ1i3jTlWPxdZzq3zGf4lYYjxwaxu5B9C&_nc_ohc=c3xZvznntF8Q7kNvwENN4Yd&_nc_oc=AdlPor2j-gBsjlX2kkBO87gVt4cC1v0V2ZM5ZQ_VK3_kRBaJM9MZlZaOi-1ks7SvS4I&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=pm2O1k1L5jZ0VORkhvx2tQ&oh=00_AfHhsYFfu9An7Uk12Njw2CNm4KqRUiQvIC65oI6cCtNftA&oe=68044F7B",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489627453_676422708409246_4983680945251976458_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFpe_-n-XXlpgsBgSVNLz-4UvnH7ymUb-hS-cfvKZRv6E7dV_9WwIACpCiJPKJluvoNoH6Ulm5fUST5hNzwaoNY&_nc_ohc=nlsRNnNAlF8Q7kNvwHw9ULG&_nc_oc=Adlv-0avMC9L_ZOTqGMgzzQv3YERimz0D76pono4NmlETX0yPpMVfGd3-6X9Vc34Guw&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=SiIvAjX8mMzUevOHlN2jFw&oh=00_AfG44hHEoZzqPGUPQVCjaAgJnoDTkvpnPbj3VdfVi7DNPw&oe=68046A0D",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489699813_676421988409318_5351681358009892613_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEvxF1-cEuLQRdtyhvWeWVLP4vO4csAqhI_i87hywCqEjknYLN9xR9rCrRe6PMw8-GocpboiH-pmHJTbcozYaRu&_nc_ohc=AWS28mzuUaMQ7kNvwGsbZR-&_nc_oc=AdlbWnHoxk0D2pbCQjD2eXoGvk38bYuM2rzZsWk2ky6w8FceHXCWcXzq3Kwl6vqHTig&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=K5j7YntPU4alNmCcK7wvQA&oh=00_AfG2Px3YsZ40R6d9ZY4g560jZsNVdNd5rhpjrlVj-LWR_Q&oe=680447CB",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489699827_676421018409415_6004928514468697145_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGUglBtS_g7ImVarv-FuxzGZqDvtqwhXFtmoO-2rCFcW60AmlBy18RAEodyXF0ot-RUdLZdpLD9DOu8Ec20Qk4Q&_nc_ohc=EXZnbv5puNMQ7kNvwGewUm-&_nc_oc=AdlgJxfbVDJXDvaR4huNn-wEgzD0rcbQQB9z_sxYa1PSiP9z5BhDnu8b50UdhRj2C0M&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=-rgVRF2tD4TKtcOFj79Fbg&oh=00_AfHwTU8eNY8D_h79mEYUvtZcYh3IhOqkHf_290vs6a4CgA&oe=68044257",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489530777_676419168409600_4874143111041904016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEq6OC3llIgFErlWKDOf4nsuyUwBmqOcq27JTAGao5yrWyq-sO6D08HvzNwrKHuT2Q1fOFMG61YIxT-jCIulbQq&_nc_ohc=yfxogkfS4M4Q7kNvwF2LbAv&_nc_oc=AdnegLMrpHvTLLUrESP1qrDwfOdJxNN8-XJntLP61ntz6cVENB6cOSCWwn8ORWuInbQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=lZ72YvIaqh2__AlE4EN_Mw&oh=00_AfGD5HJ71Y2-znt6-j49rjDS4xuK3gb1_royc_lbDWDEIg&oe=68046EDD",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
  ];

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        description="Browse photos from our events and activities"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary">
              Event Photos
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option value="all">All Events</option>
                <option value="conference">Conference</option>
                <option value="outreach">Outreach</option>
                <option value="worship">Worship</option>
                <option value="social">Social</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Load More
            </Button>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary mb-6 text-center">
              Upload Photos
            </h2>
            <Card className="bg-white max-w-md mx-auto">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 text-center">
                  Authorized users can upload photos to our gallery. Please sign
                  in to access this feature.
                </p>
                <div className="flex justify-center">
                  <Button>Sign In to Upload</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
