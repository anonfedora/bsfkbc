import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsDetailProps {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  // In a real application, you would fetch this data from an API or database
  const newsItems = [
    {
      id: "1",
      title: "BAPTIST STUDENT'S FELLOWSHIP ANNUAL RETREAT",
      date: "17th-20th April, 2025",
      excerpt:
        "Registration for the annual BSF conference is now open. Early bird registration ends July 15th.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      content:
        "The Baptist Student Fellowship Annual Retreat is a time of spiritual renewal, fellowship, and growth. Join us for four days of inspiring messages, worship, workshops, and recreational activities. This year's theme is 'Rooted and Built Up in Christ' based on Colossians 2:7. Early bird registration is now open until July 15th. Don't miss this opportunity to deepen your faith and connect with fellow Baptist students from across the region.",
    },
    {
      id: "2",
      title: "New Executive Committee Elected",
      date: "May 28, 2023",
      excerpt:
        "Congratulations to the newly elected executive committee members who will serve for the next academic year.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      content:
        "We are pleased to announce the results of our recent elections for the BSF Executive Committee. After a transparent and democratic process, the following students have been elected to serve for the 2023-2024 academic year: John Adewale (President), Sarah Okafor (Vice President), Emmanuel Bello (General Secretary), Grace Musa (Financial Secretary), David Eze (Prayer Secretary), and Ruth Adamu (Welfare Secretary). The new committee will be inaugurated during our next general meeting. Please join us in congratulating them and praying for God's wisdom as they lead our fellowship.",
    },
    {
      id: "3",
      title: "BSF Choir Wins Regional Competition",
      date: "April 10, 2023",
      excerpt:
        "Our choir has won first place in the regional gospel choir competition. Congratulations to all members!",
      imageUrl: "/placeholder.svg?height=200&width=400",
      content:
        "We are proud to announce that the Baptist Student Fellowship Choir has won first place in the Regional Gospel Choir Competition held last weekend. Competing against 15 other choirs from various institutions, our choir impressed the judges with their harmonious rendition of 'Total Praise' and 'How Great Thou Art'. Special thanks to the choir director, Michael Johnson, for his dedication and leadership. The choir will now represent our region in the national competition scheduled for August. Let's continue to support them with our prayers and encouragement.",
    },
  ];

  const newsItem =
    newsItems.find((item) => item.id === params.id) || newsItems[0];

  return (
    <>
      <PageHeader title="News Detail" description="Read the full story" />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to News</span>
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary mb-4">
                {newsItem.title}
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {newsItem.date}
                </span>
              </div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={newsItem.imageUrl || "/placeholder.svg"}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose max-w-none">
                <p className="text-muted-foreground">{newsItem.content}</p>
                <p className="text-muted-foreground mt-4">
                  For more information, please contact the BSF secretary at
                  secretary@bsfkaduna.org or visit our office during regular
                  hours.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-6">
              <Button
                variant="outline"
                className="gap-1 border-primary text-primary hover:bg-primary/10"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Link href="/news">
                <Button
                  variant="outline"
                  className="gap-1 border-primary text-primary hover:bg-primary/10"
                >
                  More News
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
