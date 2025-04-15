import { PageHeader } from "@/components/page-header";
import { NewsCard } from "@/components/news-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export default function NewsPage() {
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
    {
      id: "4",
      title: "Community Outreach Program Success",
      date: "March 15, 2023",
      excerpt:
        "Our recent outreach to the local orphanage was a huge success. Thank you to all volunteers who participated.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      content:
        "Last Saturday, over 50 BSF members participated in our community outreach program at Hope Orphanage. We provided food, clothing, school supplies, and spent quality time with the children. The day included games, storytelling, and a special lunch prepared by our welfare committee. The smiles on the children's faces were priceless and reminded us of the importance of showing Christ's love through practical service. We extend our heartfelt thanks to all who donated items and volunteered their time. Our next community outreach is scheduled for June - details will be announced soon.",
    },
    {
      id: "5",
      title: "Bible Study Series: Book of Romans",
      date: "February 20, 2023",
      excerpt:
        "Join us for an eight-week study of the Book of Romans starting next week.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      content:
        "We are excited to announce an eight-week Bible study series on the Book of Romans, starting next Wednesday. This in-depth study will explore the theological richness and practical applications of this foundational epistle. Each session will be led by Pastor James Thompson, who has extensive knowledge of Pauline literature. The study will take place every Wednesday from 6:00 PM to 8:00 PM at the Main Chapel. Study materials will be provided, but please bring your Bible. This is a great opportunity to deepen your understanding of salvation, justification by faith, and Christian living. All students are welcome!",
    },
    {
      id: "6",
      title: "Annual Sports Day Announcement",
      date: "February 5, 2023",
      excerpt:
        "Mark your calendars for our Annual Sports Day on March 25th. Registration for various events is now open.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      content:
        "Get ready for a day of fun, competition, and fellowship at our Annual Sports Day! This year's event will be held on March 25th at the University Sports Complex from 8:00 AM to 5:00 PM. Activities will include football, volleyball, basketball, table tennis, athletics, and various fun games. You can participate as an individual or form teams for group events. Registration is now open and will close on March 15th. There will be medals and prizes for winners, and refreshments will be provided for all participants. This is a great opportunity to showcase your sporting talents and enjoy fellowship with other students. Don't miss out!",
    },
  ];

  return (
    <>
      <PageHeader
        title="Latest News"
        description="Stay updated with announcements and news from BSF Kaduna Baptist Conference"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="max-w-md w-full">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search news..."
                  className="pl-8"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option value="all">All Categories</option>
                <option value="announcements">Announcements</option>
                <option value="events">Events</option>
                <option value="achievements">Achievements</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                date={news.date}
                excerpt={news.excerpt}
                imageUrl={news.imageUrl}
              />
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
        </div>
      </section>
    </>
  );
}
